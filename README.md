🎯 Project Description
This is the React frontend for the Bad Posture Detection App — a modern web interface that allows users to upload videos or use their webcam to analyze posture and receive real-time or summary-based feedback.

🔗 Live App: https://bad-posture-frontend-sigma.vercel.app/
🔗 Backend API: https://bad-posture-backend-d7zu.onrender.com/
🧠 Features
- Upload posture videos or stream from webcam
- Sends frames to the Flask backend for analysis
- Displays frame-by-frame posture feedback
- Provides summary insights with total frames, bad posture counts, and issue breakdowns
- Clean, responsive UI with subtle animations
🛠 Tech Stack
| Layer       | Tech Used        |
|-------------|------------------|
| Framework   | React (Vite)     |
| HTTP Client | Axios            |
| Styling     | Custom CSS       |
| Deployment  | Vercel           |
📂 Folder Structure
/frontend
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── VideoUploader.jsx
│   │   ├── WebcamStream.jsx
│   │   └── FeedbackDisplay.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
└── README.md
⚙️ Local Setup Instructions
1. Clone the frontend repo:
   git clone https://github.com/Biden254/bad-posture-frontend.git
   cd bad-posture-frontend

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

> The app will be available at http://localhost:5173
🔧 Configure Backend URL
Ensure your backend API URL is set correctly inside:
- src/components/VideoUploader.jsx
- src/components/WebcamStream.jsx

e.g.,
const res = await axios.post('https://posture-backend.onrender.com/upload', formData);
🚀 Deployment
This project is deployed on Vercel:
1. Push this folder to a GitHub repository (as root).
2. Visit https://vercel.com, connect your GitHub, and deploy the project.
3. Vercel auto-detects React (Vite) and handles builds out-of-the-box.
📄 License
MIT License – feel free to fork or build upon this project!
🙌 Credits
Built by Loren Deklerk — https://github.com/Biden254 • www.linkedin.com/in/loren-deklerk-81a7312a5
