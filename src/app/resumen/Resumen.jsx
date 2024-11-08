"use client";
import { useRouter } from "next/navigation";
import "./styles.css";
import TablaFacturas from "./TablaFacturas";

export default function Resumen({ facturas = [] }) {
  const router = useRouter();

  return (
    <div className="resumen-container">
      <h1>Resumen de Facturas</h1>
      <TablaFacturas facturas={facturas} /> {/* Llamamos al componente de la grilla */}
      <div className="total-gasto">
        <h2>Gasto Total Mes Actual: ${facturas.length > 0 ? calcularGastoTotal(facturas) : 0}</h2>
      </div>
      <button onClick={() => router.push("/home")} className="button">
        Página Inicio
      </button>
    </div>
  );
}

export function calcularGastoTotal(facturas) {
    return facturas.reduce((total, factura) => total + factura.montoTotal, 0);
  }