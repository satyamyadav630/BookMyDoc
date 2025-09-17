// src/utils/health.js

// ✅ Symptoms list laane ke liye
export async function getSymptoms(token) {
  const response = await fetch(
    `https://healthservice.priaid.ch/symptoms?token=${token}&language=en-gb`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch symptoms");
  }

  return await response.json(); // Symptoms array return karega
}

// ✅ Diagnosis (Disease Suggestion) laane ke liye
export async function getDiagnosis(token, symptoms, gender, yearOfBirth) {
  const response = await fetch(
    `https://healthservice.priaid.ch/diagnosis?symptoms=${JSON.stringify(
      symptoms
    )}&gender=${gender}&year_of_birth=${yearOfBirth}&token=${token}&language=en-gb`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch diagnosis");
  }

  return await response.json(); // Diseases + Doctor suggestion return karega
}

// ✅ Specializations (Doctor type suggest karne ke liye)
export async function getSpecialisations(token, symptoms, gender, yearOfBirth) {
  const response = await fetch(
    `https://healthservice.priaid.ch/specialisations?symptoms=${JSON.stringify(
      symptoms
    )}&gender=${gender}&year_of_birth=${yearOfBirth}&token=${token}&language=en-gb`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch specialisations");
  }

  return await response.json(); // Specialist doctors ki list return karega
}
