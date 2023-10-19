import React, { useState } from "react";

function KnowYourDosha() {
  // State to store user's responses to the questionnaire
  const [responses, setResponses] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
    q12: "",
    q13: "",
    q14: "",
  });

  // State to store the dosha result
  const [doshaResult, setDoshaResult] = useState("");

  // Function to calculate the dosha based on user's responses
  const calculateDosha = () => {
    // Extract responses
    const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14 } =
      responses;

    // Sample dosha calculation logic (simplified)
    // Replace with your actual dosha calculation logic
    // This example uses a simple count of each option
    const counts = {
      Vata: 0,
      Pitta: 0,
      Kapha: 0,
    };

    // Count the responses for each dosha
    const doshaQuestions = [
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      q7,
      q8,
      q9,
      q10,
      q11,
      q12,
      q13,
      q14,
    ];
    doshaQuestions.forEach((response) => {
      counts[response]++;
    });

    // Determine the dominant dosha based on counts (simplified logic)
    if (counts.Vata > counts.Pitta && counts.Vata > counts.Kapha) {
      setDoshaResult("Vata Dosha");
    } else if (counts.Pitta > counts.Vata && counts.Pitta > counts.Kapha) {
      setDoshaResult("Pitta Dosha");
    } else {
      setDoshaResult("Kapha Dosha");
    }
  };

  // Function to handle user's responses
  const handleQuestionnaireSubmit = () => {
    calculateDosha();
  };

  return (
    <div>
      <h1>Know Your Dosha</h1>
      {doshaResult ? (
        // Display dosha result
        <div>
          <h2>Your Dominant Dosha:</h2>
          <p>{doshaResult}</p>
        </div>
      ) : (
        // Display questionnaire
        <div>
          <p>
            Answer the following questions to determine your dominant dosha:
          </p>
          <form>
            {/* Question 1 */}
            <div>
              <label>Question 1: Describe your body frame</label>
              <div>
                <input
                  type="radio"
                  id="q1a"
                  name="q1"
                  value="A"
                  onChange={() => setResponses({ ...responses, q1: "A" })}
                />
                <label htmlFor="q1a">Thin</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="q1b"
                  name="q1"
                  value="B"
                  onChange={() => setResponses({ ...responses, q1: "B" })}
                />
                <label htmlFor="q1b">Medium build and musculature</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="q1c"
                  name="q1"
                  value="C"
                  onChange={() => setResponses({ ...responses, q1: "C" })}
                />
                <label htmlFor="q1c">Broad, strong, curvy</label>
              </div>
            </div>

            {/* Repeat similar structures for the other questions (q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14) */}
            {/* Each question should have a set of radio buttons for user selection */}

            <div>
              <label>Question 1: Describe your body frame</label>
              <div>
                <input
                  type="radio"
                  id="q1a"
                  name="q1"
                  value="A"
                  onChange={() => setResponses({ ...responses, q1: "A" })}
                />
                <label htmlFor="q1a">Thin</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="q1b"
                  name="q1"
                  value="B"
                  onChange={() => setResponses({ ...responses, q1: "B" })}
                />
                <label htmlFor="q1b">Medium build and musculature</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="q1c"
                  name="q1"
                  value="C"
                  onChange={() => setResponses({ ...responses, q1: "C" })}
                />
                <label htmlFor="q1c">Broad, strong, curvy</label>
              </div>
            </div>

            <button type="button" onClick={handleQuestionnaireSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default KnowYourDosha;
