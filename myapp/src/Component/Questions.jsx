import React from "react";

function Questions({ number, total, data, selected, onSelect }) {
  // Warm theme colors
  const warmBackground = "#FFF8E7"; // softer warm cream
  const warmCardBg = "#FFDAB9"; // peach puff
  const warmText = "#5D4037"; // deep warm brown
  const warmOptionBg = "#FFE5B4"; // soft warm orange-beige
  const warmOptionHover = "#FFCC80"; // light orange on hover
  const warmOptionSelected = "#FFB74D"; // deeper warm orange when selected
  const warmBorder = "#D2691E"; // chocolate brown for borders

  return (
    <div
      style={{
        backgroundColor: warmBackground,
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          backgroundColor: warmCardBg,
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          color: warmText,
        }}
      >
        <h2 style={{ marginBottom: "12px" }}>
          Question {number} of {total}
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
          {data.question}
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {data.options.map((option, i) => (
            <li
              key={i}
              onClick={() => onSelect(option)}
              style={{
                cursor: "pointer",
                padding: "10px 15px",
                margin: "6px 0",
                border: `1px solid ${warmBorder}`,
                borderRadius: "8px",
                backgroundColor:
                  selected === option ? warmOptionSelected : warmOptionBg,
                color: warmText,
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                if (selected !== option) {
                  e.currentTarget.style.backgroundColor = warmOptionHover;
                }
              }}
              onMouseLeave={(e) => {
                if (selected !== option) {
                  e.currentTarget.style.backgroundColor = warmOptionBg;
                }
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Questions;
