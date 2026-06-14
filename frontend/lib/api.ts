const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

export async function getApiHealth() {
  const response = await fetch(`${API_BASE_URL}/api/health`);

  if (!response.ok) {
    throw new Error("Failed to fetch API health status");
  }

  return response.json();
}

export async function getOfficials() {
  const response = await fetch(`${API_BASE_URL}/api/officials`);

  if (!response.ok) {
    throw new Error("Failed to fetch officials");
  }

  return response.json();
}

export async function getAssignments() {
  const response = await fetch(`${API_BASE_URL}/api/assignments`);

  if (!response.ok) {
    throw new Error("Failed to fetch assignments");
  }

  return response.json();
}