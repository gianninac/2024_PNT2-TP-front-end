// registro/page.js
"use client"; // Obligatorio para componentes que manejan eventos del cliente

import RegistroForm from "./RegistroForm"; // Importar el componente RegistroForm

export default function Registro() {
  return (
    <div>
      <RegistroForm /> {/* Usar el componente RegistroForm */}
    </div>
  );
}
