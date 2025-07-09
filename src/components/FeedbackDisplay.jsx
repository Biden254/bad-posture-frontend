import React from 'react';

const FeedbackDisplay = ({ feedback }) => {
  if (!feedback || Object.keys(feedback).length === 0) return null;

  // Support both types: summary (video) or flat list (webcam)
  const frameFeedback = Array.isArray(feedback)
    ? feedback
    : feedback.feedback || [];

  const totalFrames = feedback.total_frames;
  const badFrames = feedback.bad_posture_frames;
  const issues = feedback.issues_breakdown;

  return (
    <div className="feedback">
      {/* Summary Block */}
      {totalFrames !== undefined && (
        <>
          <h3>📋 Posture Summary:</h3>
          <p><strong>Total frames:</strong> {totalFrames}</p>
          <p><strong>Bad posture frames:</strong> {badFrames}</p>
          {issues && (
            <ul>
              {Object.entries(issues).map(([issue, count]) => (
                <li key={issue}>
                  <strong>{issue}</strong>: {count}
                </li>
              ))}
            </ul>
          )}
          <hr />
        </>
      )}

      {/* Frame-by-frame feedback */}
      <h4>🧠 Frame-by-Frame Feedback:</h4>
      <ul>
        {frameFeedback.map((item, idx) => (
          <li key={idx}>
            Frame {item.frame}: {item.issue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackDisplay;
// This component displays feedback from the posture detection analysis.
// It shows a summary of the analysis and detailed frame-by-frame feedback.