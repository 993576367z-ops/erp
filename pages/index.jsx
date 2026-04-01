import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ padding: 20 }}>
      <h1>SaaS ERP System</h1>

      <button onClick={() => router.push("/login")}>
        Go Login
      </button>
    </div>
  );
}
