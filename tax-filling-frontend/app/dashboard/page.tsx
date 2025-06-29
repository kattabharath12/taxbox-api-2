"use client";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Dashboard() {
  const { token } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setUserInfo(data);
    };
    fetchData();
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      {userInfo ? <pre>{JSON.stringify(userInfo, null, 2)}</pre> : "Loading..."}
    </div>
  );
}
