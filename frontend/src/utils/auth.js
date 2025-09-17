// src/utils/auth.js

export async function getToken() {
  const username = "Tw9x3_GMAIL_COM_AUT"; // 👈 apna username daalo
  const password = "Aq64DiJp7r5KZd8b9"; // 👈 apna password daalo
  const credentials = btoa(`${username}:${password}`);

  const response = await fetch("https://authservice.priaid.ch/login", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to get token");
  return await response.json(); // { Token: "xxxxx" }
}

export async function getSymptoms(token) {
  const res = await fetch(
    `https://healthservice.priaid.ch/symptoms?token=${token}&language=en-gb`
  );
  if (!res.ok) throw new Error("Failed to get symptoms");
  return await res.json();
}

export async function getDiagnosis(token, symptoms, gender, yearOfBirth) {
  const res = await fetch(
    `https://healthservice.priaid.ch/diagnosis?symptoms=${JSON.stringify(
      symptoms
    )}&gender=${gender}&year_of_birth=${yearOfBirth}&token=${token}&language=en-gb`
  );
  if (!res.ok) throw new Error("Failed to get diagnosis");
  return await res.json();
}
