import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const WebcamStream = ({ onFeedback }) => {
  const webcamRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const captureFrame = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      const blob = await fetch(imageSrc).then(res => res.blob());

      const formData = new FormData();
      formData.append('frame', blob, 'frame.jpg');

      try {
        const res = await axios.post('http://localhost:8000/frame', formData);
        onFeedback(prev => [...prev, res.data]);
      } catch (err) {
        console.error('Error sending frame:', err);
      }
    }
  };

  const startCapturing = () => {
    setCapturing(true);
    const id = setInterval(captureFrame, 1000); // Capture every 1 second
    setIntervalId(id);
  };

  const stopCapturing = () => {
    setCapturing(false);
    clearInterval(intervalId);
  };

  return (
    <div className="webcam-stream">
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
        videoConstraints={{ facingMode: 'user' }}
      />
      <div>
        {capturing ? (
          <button onClick={stopCapturing}>Stop</button>
        ) : (
          <button onClick={startCapturing}>Start</button>
        )}
      </div>
    </div>
  );
};

export default WebcamStream;
// This component captures frames from the webcam at regular intervals and sends them to the backend for posture analysis.
// It uses the `react-webcam` library to access the webcam and `axios` to send HTTP requests to the backend.
// The `onFeedback` prop is a callback function that updates the feedback state in the parent component.