//Con imagen
"use client"; // Obligatorio para componentes que manejan eventos del cliente

import { useRouter } from "next/navigation"; // Importar el router para la navegación
import "./styles.css"; // Importar el archivo CSS
import Image from "next/image"; // Importar el componente Image de Next.js

export default function Home() {
  const router = useRouter(); // Inicializa el router

  return (
    <div className="home-container">
      <h1>Bienvenido a FacturaSmart ORT</h1>
      <p>Gestión inteligente de facturas con tecnología OCR.</p>

      {/* Imagen en lugar de un div de espacio */}
      <div className="image-container">
        <Image
          src="/factura.png" // Ruta de tu imagen
          alt="Descripción de la imagen" // Descripción alternativa
          layout="responsive" // Ajusta la imagen al contenedor
          width={600} // Ancho de la imagen
          height={200} // Altura de la imagen
        />
      </div>

      <div className="button-container">
        <button onClick={() => router.push("/uploadBill")} className="button">
          Cargar Factura
        </button>
        <button onClick={() => router.push("/resumen")} className="button">
          Resumen
        </button>
      </div>

      {/* Botón Cerrar Sesión alineado a la derecha */}
      <div className="logout-container">
        <button onClick={() => router.push("/")} className="button">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

//Con recuadro
// "use client"; // Obligatorio para componentes que manejan eventos del cliente

// import { useRouter } from "next/navigation"; // Importar el router para la navegación
// import "./styles.css"; // Importar el archivo CSS

// export default function Home() {
//   const router = useRouter(); // Inicializa el router

//   return (
//     <div className="home-container">
//       <h1>Bienvenido a FacturaSmart ORT</h1>
//       <p>Gestión inteligente de facturas con tecnología OCR.</p>

//       {/* Espacio en blanco (rectángulo grande) */}
//       <div className="spacer"></div>

//       <div className="button-container">
//         <button onClick={() => router.push("/uploadBill")} className="button">
//           Cargar Factura
//         </button>
//         <button onClick={() => router.push("/resumen")} className="button">
//           Resumen
//         </button>
//       </div>
//     </div>
//   );
// }
