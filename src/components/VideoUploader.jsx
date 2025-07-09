import React, { useState } from 'react';
import axios from 'axios';

const VideoUploader = ({ onFeedback }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('video', file);

    try {
      const res = await axios.post(
        'https://bad-posture-backend-d7zu.onrender.com/upload',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      onFeedback(res.data);
    } catch (err) {
      console.error(err);
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="uploader" style={{ marginBottom: '1.5rem' }}>
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? 'Uploading...' : 'Upload & Analyze'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default VideoUploader;

// This component allows users to upload a video file for posture analysis.
// It handles file selection, sends the video to the backend, and passes results back via onFeedback.
