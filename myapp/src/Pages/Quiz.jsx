import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import questions from "../questions.json";
import Questions from "../Component/Questions.jsx";

function Quiz() {
  const [quizStart, setQuizStart] = useState(false);
  const [currentQue, setCurrentQue] = useState(0);
  const [ans, setAns] = useState({});
  const { category } = useParams(); // getting the category

  const navigate = useNavigate();
  const quizquestion = questions[category]; // getting the questions of category

  const handleAnswer = (option) => {
    setAns({ ...ans, [currentQue]: option });
  };

  const endQuiz = () => {
    navigate("/result", { state: { answers: ans, questions: quizquestion } });
  };

  // Warm theme colors
  const warmBackground = "#FFF3E0"; // soft peach
  const warmCardBg = "#FFCCBC"; // light warm orange
  const warmText = "#4E342E"; // dark brown
  const warmBtn = "#FF8A65"; // medium warm orange
  const warmBtnHover = "#FFA726"; // lighter warm orange

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: warmBackground,
        padding: "40px",
        borderRadius: "15px",
      }}
    >
      <h1
        style={{ textAlign: "center", color: warmText, marginBottom: "25px" }}
      >
        Quiz
      </h1>

      {!quizStart ? (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setQuizStart(true)}
            style={{
              padding: "12px 25px",
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
            Start Quiz
          </button>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: warmCardBg,
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            color: warmText,
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Questions Component */}
          <Questions
            number={currentQue + 1}
            total={quizquestion.length}
            data={quizquestion[currentQue]}
            selected={ans[currentQue]}
            onSelect={handleAnswer}
          />

          {/* Navigation Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "10px", // reduced from 25px
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setCurrentQue(currentQue - 1)}
              disabled={currentQue === 0}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: currentQue === 0 ? "#e0e0e0" : warmBtn,
                color: currentQue === 0 ? "#9e9e9e" : "#fff",
                cursor: currentQue === 0 ? "not-allowed" : "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                if (currentQue !== 0)
                  e.currentTarget.style.backgroundColor = warmBtnHover;
              }}
              onMouseLeave={(e) => {
                if (currentQue !== 0)
                  e.currentTarget.style.backgroundColor = warmBtn;
              }}
            >
              Previous
            </button>

            {currentQue === quizquestion.length - 1 ? (
              <button
                onClick={endQuiz}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
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
                End Quiz
              </button>
            ) : (
              <button
                onClick={() => setCurrentQue(currentQue + 1)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
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
                Next
              </button>
            )}
          </div>

          {/* All The Best Text */}
          <h2
            style={{
              textAlign: "center",
              marginTop: "20px", // reduced gap
              color: warmText,
            }}
          >
            All The Best !!!
          </h2>
        </div>
      )}
    </div>
  );
}

export default Quiz;
