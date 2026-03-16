import { useState } from "react";
import "./CodeReviewFeedback.css";

const feedbackCategories = [
  "Readability",
  "Performance",
  "Security",
  "Documentation",
  "Testing"
];

function CodeReviewFeedbackSystem({ onNext })  {
  const [votes, setVotes] = useState(
    feedbackCategories.reduce((acc, category) => {
      acc[category] = { up: 0, down: 0 };
      return acc;
    }, {})
  );

  const handleFeedback = (operation, category) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [category]: {
        ...prevVotes[category],
        up: operation === "+" ? prevVotes[category].up + 1 : prevVotes[category].up,
        down: operation === "-" ? prevVotes[category].down + 1 : prevVotes[category].down,
      },
    }));
  };

  return (
    <div className="feedback-container">
      <div className="feedback-grid">
        {feedbackCategories.map((category, index) => (
          <div className="feedback-card" key={category}>
            <h2>{category}</h2>
            <div className="feedback-buttons">
              <button
                className="btn upvote"
                onClick={() => handleFeedback("+", category)}
                data-testid={`upvote-btn-${index}`}
              >
                👍 Upvote
              </button>
              <button
                className="btn downvote"
                onClick={() => handleFeedback("-", category)}
                data-testid={`downvote-btn-${index}`}
              >
                👎 Downvote
              </button>
            </div>
            <p data-testid={`upvote-count-${index}`}>
              Upvotes: <strong>{votes[category].up}</strong>
            </p>
            <p data-testid={`downvote-count-${index}`}>
              Downvotes: <strong>{votes[category].down}</strong>
            </p>
          </div>
        ))}

        <div className="feedback-card next-task-card">
          <button className="btn next-task-btn" onClick={onNext}>
            Next Assignment
          </button>
        </div>
      </div>
    </div>
  );
}

export default CodeReviewFeedbackSystem;
