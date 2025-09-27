import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { answers, questions } = location.state || {
    answers: {},
    questions: [],
  };

  const score = questions.reduce((acc, q, index) => {
    if (answers[index] === q.answer) return acc + 1;
    return acc;
  }, 0);

  // Warm theme colors
  const warmBackground = "#FFF3E0"; // soft peach
  const warmCardBg = "#FFCCBC"; // light warm orange
  const warmText = "#4E342E"; // dark brown
  const warmBtn = "#FF8A65"; // medium warm orange
  const warmBtnHover = "#FFA726"; // lighter warm orange
  const warmBorder = "#D2691E"; // chocolate brown

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: warmBackground,
        padding: "40px",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          backgroundColor: warmCardBg,
          color: warmText,
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Quiz Results
        </h1>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Your Score: {score} / {questions.length}
        </h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {questions.map((q, i) => (
            <li
              key={i}
              style={{
                marginBottom: "15px",
                padding: "12px",
                borderRadius: "10px",
                backgroundColor: "#FFE0B2", // light warm yellow
                border: `1px solid ${warmBorder}`,
              }}
            >
              <strong>Q {i + 1}:</strong> {q.question} <br />
              <strong>✅ Correct Answer:</strong> {q.answer} <br />
              <strong>📝 Your Answer:</strong> {answers[i] || "Not Answered"}
            </li>
          ))}
        </ul>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h3>Thanks for attending the Quiz!!</h3>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 25px",
              marginTop: "15px",
              fontSize: "1.1rem",
              borderRadius: "10px",
              border: "none",
              backgroundColor: warmBtn,
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = warmBtnHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = warmBtn)
            }
          >
            Go to 🏠 Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
