"use client"; // Obligatorio para componentes que manejan eventos del cliente

import { useRouter } from "next/navigation"; // Importar el router para la navegación
import { useState } from "react"; // Importar useState para manejar el estado
import "./styles.css"; // Importar el archivo CSS

export default function Signin() {
  const router = useRouter(); // Inicializa el router
  const [file, setFile] = useState(null); // Estado para el archivo seleccionado
  const [fileName, setFileName] = useState(""); // Estado para el nombre del archivo

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Obtener el archivo seleccionado
    setFile(selectedFile); // Establecer el archivo en el estado
    setFileName(selectedFile.name); // Establecer el nombre del archivo
  };

  const handleUpload = () => {
    //Para poder trabajar, fuera del IF, luego hay que eliminar
    router.push("/extraction"); // Redirigir a la página de extracción
    if (file) {
      // Redirigir a la página de extracción
      router.push("/extraction"); // Redirigir a la página de extracción
    } else {
      alert("Por favor, selecciona un archivo antes de enviar.");
    }
  };

  const handleSummary = () => {
    router.push("/resumen"); // Redirigir a la página de resumen
  };

  const handleLogout = () => {
    router.push("/"); // Redirigir a la página de inicio
  };

  const handleDrop = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto
    const droppedFile = event.dataTransfer.files[0]; // Obtener el archivo arrastrado
    if (droppedFile) {
      setFile(droppedFile); // Establecer el archivo en el estado
      setFileName(droppedFile.name); // Establecer el nombre del archivo
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto
  };

  return (
    <div className="signin-container">
      <h1>Carga de Archivo</h1>
      <p>Por favor, selecciona un archivo para continuar.</p>

      <div className="file-input-container">
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input" // Clase CSS para el input de archivo
        />
        <div
          className="drop-area"
          onDrop={handleDrop}
          onDragOver={handleDragOver} // Manejar el evento de arrastre
        >
          <p>{fileName || "Arrastra y suelta el archivo aquí"}</p>{" "}
          {/* Mostrar el nombre del archivo o un mensaje */}
        </div>
      </div>

      <div className="button-container">
        <button onClick={handleUpload} className="button submit-button">
          Enviar
        </button>
      </div>

      <div className="button-container">
        <button onClick={handleSummary} className="button">
          Resumen
        </button>
        <button onClick={handleLogout} className="button">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
//version 2
// "use client"; // Obligatorio para componentes que manejan eventos del cliente

// import { useRouter } from "next/navigation"; // Importar el router para la navegación
// import { useState } from "react"; // Importar useState para manejar el estado
// import "./styles.css"; // Importar el archivo CSS

// export default function Signin() {
//   const router = useRouter(); // Inicializa el router
//   const [file, setFile] = useState(null); // Estado para el archivo seleccionado
//   const [fileName, setFileName] = useState(""); // Estado para el nombre del archivo

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0]; // Obtener el archivo seleccionado
//     setFile(selectedFile); // Establecer el archivo en el estado
//     setFileName(selectedFile.name); // Establecer el nombre del archivo
//   };

//   const handleUpload = () => {
//     if (file) {
//       // Aquí puedes manejar la lógica de carga del archivo
//       console.log("Archivo a cargar:", file);
//       // Lógica para subir el archivo
//     } else {
//       alert("Por favor, selecciona un archivo antes de enviar.");
//     }
//   };

//   const handleSummary = () => {
//     router.push("/resumen"); // Redirigir a la página de resumen
//   };

//   const handleLogout = () => {
//     router.push("/"); // Redirigir a la página de inicio
//   };

//   const handleDrop = (event) => {
//     event.preventDefault(); // Prevenir el comportamiento por defecto
//     const droppedFile = event.dataTransfer.files[0]; // Obtener el archivo arrastrado
//     if (droppedFile) {
//       setFile(droppedFile); // Establecer el archivo en el estado
//       setFileName(droppedFile.name); // Establecer el nombre del archivo
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault(); // Prevenir el comportamiento por defecto
//   };

//   return (
//     <div className="signin-container">
//       <h1>Carga de Archivo</h1>
//       <p>Por favor, selecciona un archivo para continuar.</p>

//       <div className="file-input-container">
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="file-input" // Clase CSS para el input de archivo
//         />
//         <div
//           className="drop-area"
//           onDrop={handleDrop}
//           onDragOver={handleDragOver} // Manejar el evento de arrastre
//         >
//           <p>{fileName || "Arrastra y suelta el archivo aquí"}</p>{" "}
//           {/* Mostrar el nombre del archivo o un mensaje */}
//         </div>
//       </div>

//       <div className="button-container">
//         <button onClick={handleUpload} className="button submit-button">
//           Enviar
//         </button>
//       </div>

//       <div className="button-container">
//         <button onClick={handleSummary} className="button">
//           Resumen
//         </button>
//         <button onClick={handleLogout} className="button">
//           Cerrar Sesión
//         </button>
//       </div>
//     </div>
//   );
// }

//version 1
// "use client"; // Obligatorio para componentes que manejan eventos del cliente

// import { useRouter } from "next/navigation"; // Importar el router para la navegación
// import { useState } from "react"; // Importar useState para manejar el estado
// import "./styles.css"; // Importar el archivo CSS

// export default function Signin() {
//   const router = useRouter(); // Inicializa el router
//   const [file, setFile] = useState(null); // Estado para el archivo seleccionado

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]); // Establecer el archivo seleccionado en el estado
//   };

//   const handleUpload = () => {
//     if (file) {
//       // Aquí puedes manejar la lógica de carga del archivo
//       console.log("Archivo a cargar:", file);
//       // Lógica para subir el archivo
//     } else {
//       alert("Por favor, selecciona un archivo antes de enviar.");
//     }
//   };

//   const handleSummary = () => {
//     router.push("/resumen"); // Redirigir a la página de resumen
//   };

//   const handleLogout = () => {
//     router.push("/"); // Redirigir a la página de inicio
//   };

//   const handleDrop = (event) => {
//     event.preventDefault(); // Prevenir el comportamiento por defecto
//     const droppedFile = event.dataTransfer.files[0]; // Obtener el archivo arrastrado
//     if (droppedFile) {
//       setFile(droppedFile); // Establecer el archivo en el estado
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault(); // Prevenir el comportamiento por defecto
//   };

//   return (
//     <div className="signin-container">
//       <h1>Carga de Archivo</h1>
//       <p>Por favor, selecciona un archivo para continuar.</p>

//       <div className="file-input-container">
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="file-input" // Clase CSS para el input de archivo
//         />
//         <div
//           className="drop-area"
//           onDrop={handleDrop}
//           onDragOver={handleDragOver} // Manejar el evento de arrastre
//         >
//           <p>Arrastra y suelta el archivo aquí</p>
//         </div>
//       </div>

//       <div className="button-container">
//         <button onClick={handleUpload} className="button submit-button">
//           Enviar
//         </button>
//       </div>

//       <div className="button-container">
//         <button onClick={handleSummary} className="button">
//           Resumen
//         </button>
//         <button onClick={handleLogout} className="button">
//           Cerrar Sesión
//         </button>
//       </div>
//     </div>
//   );
// }
