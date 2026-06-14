"use client";

import { useEffect, useState } from "react";
import { getApiHealth } from "../lib/api";

export default function ApiStatus() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    async function checkApi() {
      try {
        const data = await getApiHealth();
        setStatus(data.status || "connected");
      } catch {
        setStatus("offline");
      }
    }

    checkApi();
  }, []);

  return (
    <section>
      <h2>Backend API Status</h2>
      <p>Status: {status}</p>
    </section>
  );
}