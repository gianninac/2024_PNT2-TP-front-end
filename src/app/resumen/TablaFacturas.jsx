export default function FacturaTable({ facturas }) {
    return (
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
          {facturas && facturas.length > 0 ? (
            facturas.map((factura, index) => (
              <tr key={index}>
                <td>{factura.fechaImpresion}</td>
                <td>{factura.montoTotal}</td>
                <td>{factura.iva}</td>
                <td>{factura.razonSocial}</td>
                <td>{factura.puntoVenta}</td>
                <td>{factura.nroComprobante}</td>
                <td>{factura.tipoFactura}</td>
                <td>{factura.cuit}</td>
                <td>{factura.categoria}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No hay facturas cargadas.</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  