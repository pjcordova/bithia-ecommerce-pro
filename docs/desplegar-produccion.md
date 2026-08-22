# Desplegar la conexión ERP ↔ bithia-web a producción

Esta guía es para pasar a producción lo que se construyó en la rama
`feat/descuento-stock-bithia` (este repo) y `diseno2.1` (repo `bithia-web`):
descuento automático de stock, código de producto por color, y
sincronización de stock en tiempo real (1 segundo) en ambos sentidos.

Está dividida en dos partes porque **cada una la hace quien tenga acceso a
esa plataforma**: la parte del ERP la hace quien administra Railway, la
parte de la tienda la hace quien administra Vercel. Pueden ser la misma
persona o no.

## Parte A — Lado ERP (Railway)

### 1. Revisar y mergear el Pull Request

Rama `feat/descuento-stock-bithia` → `main`. Trae:
- `POST /api/pedidos/descontar-stock` — recibe el aviso de bithia-web y
  descuenta stock real.
- `POST /api/productos/stock` — consulta de stock en vivo (sondeada cada
  segundo por bithia-web).
- Código de producto por color (`producto_colores.codigo_lote`) — elimina
  la ambigüedad de qué color descontar cuando un lote agrupa varios.
- Fix de un bug de serialización (`Decimal` en `/dashboard`, `/ventas`,
  `/finanzas`).
- Paleta de colores alineada con `bithia-web`.
- Refresco automático cada segundo en POS e Inventario.

### 2. Aplicar la migración SQL a la base de producción

Una sola vez, contra la base real de Railway (pestaña **Data** → editor de
SQL, o `psql` si tienen acceso directo):

```
prisma/manual-sql/codigo-lote-por-color.sql
```

Es aditiva y seguro: agrega una columna nueva y hace backfill automático de
los productos que hoy tienen un solo color. No borra ni renombra nada.

### 3. Generar y configurar `ERP_STOCK_API_KEY`

Es un secreto compartido entre los dos proyectos — el mismo valor va en
ambos lados.

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Ponerlo en las variables de entorno del servicio del ERP en Railway
(pestaña **Variables**). Si `SESSION_SECRET` y `DATABASE_URL` ya están
configuradas ahí, esta va al lado de esas.

### 4. Confirmar el despliegue

Si el servicio de Railway está conectado a GitHub, el merge a `main`
dispara el deploy solo. Si no, redeploy manual desde el dashboard.

### 5. Verificar que el endpoint responde

```bash
curl -s -X POST https://<url-real-del-erp>.up.railway.app/api/pedidos/descontar-stock \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <la-api-key-que-pusiste-arriba>" \
  -d '{"items":[{"codigo_lote":"CODIGO-QUE-NO-EXISTE","talla":"M","cantidad":1}]}'
```

Debería responder `200` con `{"ok":true,"ventaId":null,"problemas":[...]}`
— eso confirma que el endpoint está vivo y autenticando bien (fue a
propósito con un código inexistente para no tocar stock real en esta
prueba).

## Parte B — Lado bithia-web (Vercel)

### 1. Revisar y mergear el Pull Request

Rama `diseno2.1` → `main` (o la que Vercel tenga configurada para
producción).

### 2. Configurar las variables de entorno en Vercel

Proyecto → Settings → Environment Variables:

| Variable | Valor |
|---|---|
| `ERP_STOCK_API_KEY` | La misma que generaste en la Parte A.3 |
| `ERP_STOCK_WEBHOOK_URL` | `https://<url-real-del-erp>.up.railway.app/api/pedidos/descontar-stock` |
| `ERP_STOCK_QUERY_URL` | `https://<url-real-del-erp>.up.railway.app/api/productos/stock` |

### 3. Redeploy

Con las variables puestas, redeploy (o esperar el que dispara el merge).

## Parte C — Verificar de punta a punta en producción

1. Abrir un producto real en la tienda pública. Confirmar que la talla
   muestra el stock real (no solo el toggle manual).
2. Hacer un pedido de prueba: carrito → método de pago → adjuntar
   comprobante → "Enviar pedido por WhatsApp".
3. Revisar en el ERP (Inventario) que el stock bajó.
4. Con la ficha del producto todavía abierta en el navegador (sin
   recargar), cambiar el stock manualmente desde el ERP y confirmar que
   cambia solo en la web en 1-2 segundos.
5. Si algo no cuadra, los logs están en Vercel → proyecto → Logs (lado
   bithia-web) y en Railway → servicio → Logs (lado ERP).

## Nota sobre productos "de antes"

Los productos que ya existían en el ERP y agrupan más de un color bajo el
mismo lote (por ejemplo, si se recepcionaron varios colores juntos antes de
este cambio) van a quedar en revisión manual la primera vez que alguien
haga un pedido de ese código — no se pierde la venta (igual se manda el
pedido por WhatsApp), solo no se descuenta el stock automáticamente hasta
que ese producto se vuelva a recepcionar (ahí sí queda con su código de
color propio, sin ambigüedad).

---

## Prompt para pegarle a tu Claude

Si vas a usar Claude Code para hacer estos pasos, pegale esto tal cual —
tiene todo el contexto para que no tenga que ir descubriendo de a poco:

````
Necesito desplegar a producción una integración entre dos proyectos: el
ERP de Bithia Brand (este repo, Next.js + Prisma + Postgres en Railway) y
la tienda pública "bithia-web" (repo separado, también Next.js, con su
propia base en Neon, deployada en Vercel).

Ya está todo construido y probado localmente. Lo que falta es pura
configuración y despliegue, no desarrollo. Está documentado paso a paso en
docs/desplegar-produccion.md de este repo — leelo primero, completo, antes
de tocar nada.

Contexto rápido de qué hace la integración:
- Cuando una clienta confirma un pedido por WhatsApp en bithia-web, le pega
  un webhook a este ERP (POST /api/pedidos/descontar-stock) que descuenta
  el stock real.
- bithia-web también consulta stock en vivo a este ERP (POST
  /api/productos/stock) para mostrar cantidades reales en vez de un toggle
  manual, sondeando cada segundo mientras alguien tiene una página abierta.
- Ambos endpoints se autentican con un Bearer token compartido
  (ERP_STOCK_API_KEY), que hay que generar una vez y poner igual en los dos
  lados.
- Hay una migración SQL nueva (prisma/manual-sql/codigo-lote-por-color.sql)
  que hay que aplicar UNA VEZ contra la base de producción de Railway — es
  aditiva, no borra nada, pero es la base real del negocio así que
  confirmame antes de correrla si tenés alguna duda de que sea la base
  correcta.

Lo que necesito que hagas, en orden:
1. Confirmá que estás en la rama correcta y que el PR de
   feat/descuento-stock-bithia (o main si ya se mergeó) tiene los archivos
   que se mencionan en docs/desplegar-produccion.md — si falta algo, avisame
   antes de seguir.
2. Guiame para aplicar la migración SQL a producción (Parte A.2 de la
   guía) — decime exactamente qué pegar y dónde, yo la ejecuto porque toca
   la base real.
3. Generame el valor para ERP_STOCK_API_KEY (Parte A.3) y decime
   exactamente en qué pantalla de Railway tengo que pegarlo.
4. Si tenés acceso a la CLI de Railway o Vercel configurada en esta
   máquina, usala para revisar que las variables de entorno queden bien
   puestas. Si no tenés acceso a ninguna de las dos plataformas, decime
   exactamente qué pantalla abrir y qué pegar en cada una — no asumas que
   yo sé dónde queda cada cosa.
5. Una vez todo deployado, ayudame a correr la verificación de la Parte C
   de la guía (curl de prueba al endpoint, y el checklist manual de probar
   un pedido real).
6. Si algo falla en el camino, no lo arregles adivinando — mostrame el
   error exacto (log de Railway o Vercel) y explicame qué significa antes
   de cambiar nada.

No hace falta que reescribas ni "mejores" nada del código — ya está
revisado y probado. Esto es 100% configuración y verificación.
````
