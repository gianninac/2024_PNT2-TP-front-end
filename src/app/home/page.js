// home/page.js
"use client"; // Obligatorio para componentes que manejan eventos del cliente

import Home from "./Home"; // Importar el componente Home

export default function HomePage() {
  return (
    <div>
      <Home /> {/* Usar el componente Home */}
    </div>
  );
}
