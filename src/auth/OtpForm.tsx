import React, { useState } from "react";

type OtpProps = {
  email: string;
  onLoginSuccess: (token: string) => void;
};

const OtpForm: React.FC<OtpProps> = ({ email, onLoginSuccess }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        onLoginSuccess(data.token);
      } else {
        setError(data.error || "OTP invalide");
      }
    } catch {
      setError("Erreur serveur");
    }
  };

  return (
    <form onSubmit={handleVerify} className="p-4">
      <h2 className="text-xl mb-4">Vérification OTP</h2>
      <input
        type="text"
        placeholder="Code OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Vérifier
      </button>
    </form>
  );
};

export default OtpForm;
