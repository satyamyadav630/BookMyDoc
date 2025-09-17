// src/pages/AiRecommendationPage.jsx
import React, { useState } from "react";
import { Stethoscope, User, Activity } from "lucide-react";
import { getToken, getSymptoms, getDiagnosis } from "../utils/auth";

function AiRecommendationPage() {
  const [symptoms, setSymptoms] = useState("");
  const [disease, setDisease] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Auth token
      const { Token } = await getToken();

      // 2. Get all symptoms
      const allSymptoms = await getSymptoms(Token);

      // 3. Match user input with symptom list
      const matched = allSymptoms.filter((s) =>
        symptoms.toLowerCase().includes(s.Name.toLowerCase())
      );

      if (matched.length === 0) {
        alert("No matching symptom found!");
        setLoading(false);
        return;
      }

      // 4. Get diagnosis
      const diagnosis = await getDiagnosis(
        Token,
        [matched[0].ID],
        "male",
        1995
      );

      setDisease(diagnosis[0]?.Issue || null);
      setDoctor(diagnosis[0]?.Specialisation[0] || null);
    } catch (err) {
      console.error(err);
      alert("Error fetching data");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen100 flex justify-center  items-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-poppins text-center mb-6 flex items-center justify-center gap-2 text-teal-600">
          <Stethoscope size={28} /> AI Health Recommendation
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-teal-400"
            placeholder="Enter your symptoms..."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600 transition"
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Find"}
          </button>
        </form>

        {/* Results */}
        {disease && (
          <div className="mt-6 p-4 bg-teal-50 rounded-lg shadow-md">
            <h3 className="font-bold text-lg flex items-center gap-2 text-teal-700">
              <Activity size={20} /> Disease Prediction
            </h3>
            <p className="mt-1">Name: {disease.Name}</p>
            <p>Accuracy: {disease.Accuracy}%</p>
            <p>ProfName: {disease.ProfName}</p>
          </div>
        )}

        {doctor && (
          <div className="mt-6 p-4 bg-purple-50 rounded-lg shadow-md">
            <h3 className="font-bold text-lg flex items-center gap-2 text-purple-700">
              <User size={20} /> Recommended Doctor
            </h3>
            <p className="mt-1">{doctor.Name}</p>
            <p>Specialist ID: {doctor.ID}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiRecommendationPage;
