import React, { useState } from 'react';
import VideoUploader from '../components/VideoUploader';
import WebcamStream from '../components/WebcamStream';
import FeedbackDisplay from '../components/FeedbackDisplay';

const Home = () => {
  const [feedback, setFeedback] = useState([]);

  return (
    <div className="container">
      <h1>Bad Posture Detection</h1>

      <section>
        <h2>Upload Video</h2>
        <VideoUploader onFeedback={setFeedback} />
      </section>

      <section>
        <h2>Live Webcam</h2>
        <WebcamStream onFeedback={setFeedback} />
      </section>

      <section>
        <FeedbackDisplay feedback={feedback} />
      </section>
    </div>
  );
};

export default Home;

// This is the main page of the application.
// It allows users to upload a video for analysis or use their webcam for live posture detection.