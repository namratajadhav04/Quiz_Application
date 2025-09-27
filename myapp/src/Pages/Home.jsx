import React from "react";
import { Link } from "react-router-dom";

function Home() {
  // Warm theme colors
  const warmBackground = "#FFF3E0"; // soft peach
  const warmCardBg = "#FFCCBC"; // light warm orange
  const warmText = "#4E342E"; // dark brown
  const warmBtnPrimary = "#FF8A65"; // medium warm orange
  const warmBtnSecondary = "#FFA726"; // lighter warm orange
  const warmBtnTertiary = "#FF7043"; // deeper warm orange

  return (
    <>
      <div
        className="container text-center my-5"
        style={{
          backgroundColor: warmBackground,
          minHeight: "100vh",
          padding: "50px",
          borderRadius: "15px",
          fontFamily: "'serif', Georgia",
        }}
      >
        <h1 className="mb-3" style={{ color: warmText }}>
          Welcome to Quiz Application
        </h1>

        <div
          className="card shadow p-4"
          style={{
            backgroundColor: warmCardBg,
            color: warmText,
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
        >
          <p className="lead" style={{ fontSize: "1.1rem" }}>
            🚀 Welcome to the Quiz Application – your interactive learning
            companion! Test your knowledge across different domains like Python,
            AI & ML, MERN Stack, and Java. Each quiz is carefully designed with
            beginner to advanced level questions to challenge your skills.
            Compete, learn, and improve with every attempt – whether you’re
            preparing for interviews or just having fun!
          </p>
          <h3 className="mt-3" style={{ color: warmText }}>
            👉 Select a category and start your quiz journey today.
          </h3>
        </div>

        <div className="d-flex flex-column gap-3 mt-5">
          <Link
            to="/quiz/PY_AI_ML"
            className="btn btn-lg"
            style={{
              backgroundColor: warmBtnPrimary,
              color: "#fff",
              border: "none",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = warmBtnSecondary)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = warmBtnPrimary)
            }
          >
            Python, AI, ML
          </Link>
          <Link
            to="/quiz/MERN"
            className="btn btn-lg"
            style={{
              backgroundColor: warmBtnSecondary,
              color: "#fff",
              border: "none",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = warmBtnTertiary)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = warmBtnSecondary)
            }
          >
            MERN Full Stack
          </Link>
          <Link
            to="/quiz/JAVA"
            className="btn btn-lg"
            style={{
              backgroundColor: warmBtnTertiary,
              color: "#fff",
              border: "none",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = warmBtnPrimary)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = warmBtnTertiary)
            }
          >
            Java
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
