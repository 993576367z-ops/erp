import { useEffect, useState } from "react";
import api from "../lib/api";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/inventory").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>ERP Dashboard</h1>

      <h3>Inventory</h3>
      {data.map((item) => (
        <div key={item.id}>
          {item.name} - {item.stock}
        </div>
      ))}
    </div>
  );
}
