import { useEffect, useState } from "react";
import api from "../lib/api";

export default function Inventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/inventory").then((res) => setItems(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Inventory</h1>

      {items.map((i) => (
        <div key={i.id}>
          📦 {i.name} | stock: {i.stock}
        </div>
      ))}
    </div>
  );
}
