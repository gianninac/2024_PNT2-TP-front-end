"use client"; // Obligatorio para componentes que manejan eventos del cliente

import { useRouter } from "next/navigation"; // Cambiamos el import
import { useState } from "react"; // Importar useState para manejar el estado
import "./styles.css"; // Importar el archivo CSS

export default function Registro() {
  const router = useRouter(); // Mantenemos el hook pero desde 'next/navigation'

  // Estado para los campos de usuario y contraseñas
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  const handleRegister = () => {
    // Aquí puedes manejar la lógica de registro
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
    console.log("Confirmar Contraseña:", confirmPassword);
    // Lógica para verificar que las contraseñas coincidan y registrar al usuario
    if (password === confirmPassword) {
      // Aquí iría la lógica de registro
      router.push("/signin"); // Redirigir a la página de inicio de sesión después del registro
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  const handleCancel = () => {
    router.push("/"); // Redirigir a la página de inicio
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Registro</h1>
      <p style={{ textAlign: "center" }}>Crea tu cuenta en FacturaSmart ORT.</p>

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
        <label className="label">
          Confirmar Contraseña
          <input
            type={showPassword ? "text" : "password"} // Cambiar tipo según el estado
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
          />
        </label>
      </div>

      <div className="button-container" style={{ textAlign: "center" }}>
        <button onClick={handleCancel} className="button cancel-button">
          Cancelar
        </button>
        <button onClick={handleRegister} className="button">
          Registrar
        </button>
      </div>
    </div>
  );
}
