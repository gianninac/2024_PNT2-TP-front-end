"use client"; // Obligatorio para componentes que manejan eventos del cliente

import { useState } from "react"; // Importar useState para manejar el estado
import { useRouter } from "next/navigation"; // Importar el router para la navegación
import "./styles.css"; // Importar el archivo CSS

export default function Extraction() {
  const router = useRouter(); // Inicializa el router

  // Estado para los campos
  const [data, setData] = useState({
    fechaImpresion: "",
    montoTotal: "",
    iva: "",
    razonSocial: "",
    puntoVenta: "",
    nroComprobante: "",
    tipoFactura: "",
    cuit: "",
    categoria: "",
  });

  // Manejar cambios en los campos de entrada
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    // Aquí puedes manejar el envío de datos si es necesario
    router.push("/resumen"); // Redirigir a la página de resumen
  };

  // Manejar la cancelación
  const handleCancel = () => {
    router.push("/uploadBill"); // Redirigir a la página de inicio de sesión
  };

  return (
    <div className="extraction-container">
      <h1>Datos de Extracción</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fecha de Impresión</label>
          <input
            type="date"
            name="fechaImpresion"
            value={data.fechaImpresion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Monto Total</label>
          <input
            type="number"
            name="montoTotal"
            value={data.montoTotal}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>IVA</label>
          <input
            type="number"
            name="iva"
            value={data.iva}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Razón Social</label>
          <input
            type="text"
            name="razonSocial"
            value={data.razonSocial}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Punto de Venta</label>
          <input
            type="text"
            name="puntoVenta"
            value={data.puntoVenta}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nro Comprobante</label>
          <input
            type="text"
            name="nroComprobante"
            value={data.nroComprobante}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tipo Factura</label>
          <input
            type="text"
            name="tipoFactura"
            value={data.tipoFactura}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>CUIT</label>
          <input
            type="text"
            name="cuit"
            value={data.cuit}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Categoría</label>
          <select
            name="categoria"
            value={data.categoria}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una categoría</option>
            <option value="Servicios">Servicios</option>
            <option value="Impuestos">Impuestos</option>
            <option value="Refrigerios">Refrigerios</option>
            <option value="Muebles y Equipos">Muebles y Equipos</option>
            <option value="Reparación y Mantenimiento">
              Reparación y Mantenimiento
            </option>
            <option value="Viáticos y Movilidad">Viáticos y Movilidad</option>
            <option value="Gastos Administrativos">
              Gastos Administrativos
            </option>
            <option value="Eventos">Eventos</option>
          </select>
        </div>

        <div className="button-container">
          <button type="submit" className="button submit-button">
            Enviar
          </button>
          <button type="button" onClick={handleCancel} className="button">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
