import { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Backend offline"));
  }, []);

  return (
    <div>
      <h1>Backend Status: {status}</h1>
    </div>
  );
}
