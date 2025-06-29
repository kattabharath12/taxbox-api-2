"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) {
      router.push("/login");
    } else {
      alert("Registration failed.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input className="border mb-2 p-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border mb-4 p-2" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleRegister}>Register</button>
    </div>
  );
}
