import React, { useState } from "react";

type LoginProps = {
  onOtpRequested: (email: string) => void;
};

const LoginForm: React.FC<LoginProps> = ({ onOtpRequested }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

    const data = await res.json();
    console.log("Login response:", data);
    if (data.status === "OTP_SENT") {
    onOtpRequested(data.email);
    } else {
    setError(data.error || "Erreur d’authentification");
    }
    } catch {
      setError("Erreur serveur");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-4">
      <h2 className="text-xl mb-4">Connexion</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Se connecter
      </button>
    </form>
  );
};

export default LoginForm;
