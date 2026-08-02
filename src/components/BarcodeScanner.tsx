"use client";
import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

interface BarcodeScannerProps {
    onScanSuccess: (decodedText: string) => void;
}

export default function BarcodeScanner({ onScanSuccess }: BarcodeScannerProps) {
    const scannerRef = useRef<Html5QrcodeScanner | null>(null);

    useEffect(() => {
        if (!scannerRef.current) {
            const scanner = new Html5QrcodeScanner(
                "reader",
                {
                    fps: 10,
                    qrbox: { width: 250, height: 150 },
                    aspectRatio: 1.0,
                    showTorchButtonIfSupported: true
                },
                false
            );

            scanner.render(
                (decodedText) => {
                    scanner.clear(); // Detener al detectar para evitar múltiples escaneos
                    onScanSuccess(decodedText);
                },
                (error) => {
                    // Errores de escaneo ignorados en consola para no ensuciar
                }
            );

            scannerRef.current = scanner;
        }

        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear().catch(console.error);
            }
        };
    }, [onScanSuccess]);

    return (
        <div className="w-full mx-auto bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
            <div id="reader" className="w-full"></div>
        </div>
    );
}