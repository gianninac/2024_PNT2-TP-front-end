//Sin datos
"use client"; // Obligatorio para componentes que manejan eventos del cliente

import { useRouter } from "next/navigation"; // Importar el router para la navegación
import "./styles.css"; // Importar el archivo CSS

export default function Resumen() {
  const router = useRouter(); // Inicializa el router

  return (
    <div className="resumen-container">
      <h1>Resumen de Facturas</h1>
      <table>
        <thead>
          <tr>
            <th>Fecha de Impresión</th>
            <th>Monto Total</th>
            <th>IVA</th>
            <th>Razón Social</th>
            <th>Punto de Venta</th>
            <th>Nro Comprobante</th>
            <th>Tipo Factura</th>
            <th>CUIT</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="9">No hay facturas cargadas.</td>
          </tr>
        </tbody>
      </table>
      <div className="total-gasto">
        <h2>Gasto Total Mes Actual: $0</h2>
      </div>
      <button onClick={() => router.push("/home")} className="button">
        Página Inicio
      </button>
    </div>
  );
}

//Con datos
// "use client"; // Obligatorio para componentes que manejan eventos del cliente

// import { useRouter } from "next/navigation"; // Importar el router para la navegación
// import "./styles.css"; // Importar el archivo CSS

// export default function Resumen({ facturas }) {
//   const router = useRouter(); // Inicializa el router

//   // Calcular el gasto total del mes actual
//   const calcularGastoTotal = () => {
//     return facturas.reduce((total, factura) => total + factura.montoTotal, 0);
//   };

//   return (
//     <div className="resumen-container">
//       <h1>Resumen de Facturas</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Fecha de Impresión</th>
//             <th>Monto Total</th>
//             <th>IVA</th>
//             <th>Razón Social</th>
//             <th>Punto de Venta</th>
//             <th>Nro Comprobante</th>
//             <th>Tipo Factura</th>
//             <th>CUIT</th>
//             <th>Categoría</th>
//           </tr>
//         </thead>
//         <tbody>
//           {facturas.length > 0 ? (
//             facturas.map((factura, index) => (
//               <tr key={index}>
//                 <td>{factura.fechaImpresion}</td>
//                 <td>{factura.montoTotal}</td>
//                 <td>{factura.iva}</td>
//                 <td>{factura.razonSocial}</td>
//                 <td>{factura.puntoVenta}</td>
//                 <td>{factura.nroComprobante}</td>
//                 <td>{factura.tipoFactura}</td>
//                 <td>{factura.cuit}</td>
//                 <td>{factura.categoria}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="9">No hay facturas cargadas.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <div className="total-gasto">
//         <h2>Gasto Total Mes Actual: ${calcularGastoTotal()}</h2>
//       </div>
//       <button onClick={() => router.push("/uploadBill")} className="button">
//         Inicio
//       </button>
//     </div>
//   );
// }
