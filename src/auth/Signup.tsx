// src/pages/Signup.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface SignupForm {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const [form, setForm] = useState<SignupForm>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/register", form);
      if (res.status === 200 || res.status === 201) {
        setMessage("✅ Compte créé avec succès !");
      }
    } catch (error: any) {
      if (error.response) {
        setMessage(`❌ Erreur: ${error.response.data.message || "Impossible de créer le compte"}`);
      } else {
        setMessage("❌ Erreur réseau");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Créer un compte</h2>

        <input
          type="text"
          name="firstname"
          placeholder="Prénom"
          value={form.firstname}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <input
          type="text"
          name="lastname"
          placeholder="Nom"
          value={form.lastname}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
        >
          S'inscrire
        </button>

        {message && <p className="text-center mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default Signup;
