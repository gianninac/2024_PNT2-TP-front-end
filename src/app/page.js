// app/page.js
"use client"; // Obligatorio para componentes que manejan eventos del cliente

import { useRouter } from "next/navigation"; // Cambiamos el import
import Header from "./Header"; // Importar el componente Header
import AuthForm from "./AuthForm"; // Importar el componente AuthForm

export default function Home() {
  const router = useRouter(); // Mantenemos el hook pero desde 'next/navigation'

  const handleSignIn = () => {
    // Aquí puedes manejar la lógica de inicio de sesión
    router.push("/home");
  };

  const handleRegister = () => {
    router.push("/registro");
  };

  return (
    <div>
      <Header /> {/* Usar el componente Header */}
      <AuthForm onSignIn={handleSignIn} onRegister={handleRegister} />{" "}
      {/* Usar el componente AuthForm */}
    </div>
  );
}
// "use client"; // Obligatorio para componentes que manejan eventos del cliente

// import { useRouter } from "next/navigation"; // Cambiamos el import

// export default function Home() {
//   const router = useRouter(); // Mantenemos el hook pero desde 'next/navigation'

//   const handleSignIn = () => {
//     router.push("/uploadBill");
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
