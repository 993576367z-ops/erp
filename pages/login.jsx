import { useState } from "react";
import api from "../lib/api";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const login = async () => {
    const res = await api.post("/login", { username });
    localStorage.setItem("token", res.data.token);
    router.push("/dashboard");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>ERP Login</h1>
      <input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}
