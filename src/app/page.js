"use client"; // Obligatorio para componentes que manejan eventos del cliente

import { useRouter } from "next/navigation"; // Cambiamos el import
import { useState } from "react"; // Importar useState para manejar el estado
import "./page.css"; // Importar el archivo CSS

export default function Home() {
  const router = useRouter(); // Mantenemos el hook pero desde 'next/navigation'

  // Estado para los campos de usuario y contraseña
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  const handleSignIn = () => {
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log("Usuario", username);
    console.log("Contraseña", password);
    router.push("/signin");
  };

  const handleRegister = () => {
    router.push("/registro");
  };

  return (
    <div>
      <h1>Bienvenido a FacturaSmart ORT</h1>
      <p>Gestión inteligente de facturas con tecnología OCR.</p>

      <div className="container">
        <label className="label">
          Usuario
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Ingrese su usuario" // Placeholder agregado
          />
        </label>
        <label className="label">
          Contraseña
          <input
            type={showPassword ? "text" : "password"} // Cambiar tipo según el estado
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </label>
      </div>

      <div className="button-container">
        <button onClick={handleSignIn} className="button">
          Iniciar Sesión
        </button>
        <button onClick={handleRegister} className="button">
          Registrarse
        </button>
      </div>
    </div>
  );
}
// "use client"; // Obligatorio para componentes que manejan eventos del cliente

// import { useRouter } from "next/navigation"; // Cambiamos el import

// export default function Home() {
//   const router = useRouter(); // Mantenemos el hook pero desde 'next/navigation'

//   const handleSignIn = () => {
//     router.push("/signin");
//   };

//   const handleRegister = () => {
//     router.push("/register");
//   };

//   return (
//     <div>
//       <h1>Bienvenido a FacturaSmart ORT</h1>
//       <p>Gestión inteligente de facturas con tecnología OCR.</p>
//       <button onClick={handleSignIn} style={{ marginRight: "10px" }}>
//         Iniciar Sesión
//       </button>
//       <button onClick={handleRegister}>Registrarse</button>
//     </div>
//   );
// }

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <h1 className="dark:invert">Examen Nuevas Tecnologias 2</h1>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         Todos los derechos reservados
//       </footer>
//     </div>
//   );
// }
