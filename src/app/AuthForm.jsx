// components/AuthForm.jsx
import { useState } from "react";

export default function AuthForm({ onSignIn, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  return (
    <div className="container">
      <label className="label" htmlFor="username">
        Usuario
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
          placeholder="Ingrese su usuario"
        />
      </label>
      <label className="label" htmlFor="password">
        Contraseña
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
      </label>
      <div className="button-container">
        <button onClick={onSignIn} className="button">
          Iniciar Sesión
        </button>
        <button onClick={onRegister} className="button">
          Registrarse
        </button>
      </div>
    </div>
  );
}
