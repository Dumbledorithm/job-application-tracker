# AI Job Application Tracker + Resume–JD Fit Analyzer

An AI-powered job application tracking platform that helps users organize their job search and evaluate how well their resume matches a job description.

The application allows users to track job applications, upload resumes, analyze job descriptions, detect missing skills, and receive AI-generated suggestions to improve their resume.

This project demonstrates full-stack development with the MERN stack along with AI integration using large language models.

---

## Features

### Job Application Tracking

* Add and manage job applications
* Track application status (Applied, Interview, Offer, Rejected)
* Store company, role, location, and notes
* Update and delete applications

### Resume Management

* Upload multiple resumes
* Extract text from PDF/DOCX files
* Store parsed resume content for AI analysis

### AI Resume–JD Fit Analyzer

* Compare resume with job description
* Generate compatibility score
* Identify missing skills
* Highlight strengths

### Skill Gap Detection

* Extract required skills from job description
* Compare with resume content
* Provide a list of missing skills

### Resume Improvement Suggestions

* AI-generated suggestions to improve resume wording
* Suggestions for highlighting relevant experience

### Authentication & Security

* User registration and login
* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### AI Integration

* Groq SDK
* LLaMA / Mixtral models

### Other Tools

* JWT Authentication
* Multer for file uploads
* pdf-parse / mammoth for resume parsing

---

## Project Architecture

```
Frontend (React)
       │
       │ REST API
       ▼
Backend (Node + Express)
       │
       ├── MongoDB (User, Jobs, Resumes)
       │
       └── AI Layer
            ├── Resume parsing
            ├── Skill extraction
            └── Resume–JD analysis
```

---

## Folder Structure

```
ai-job-tracker
│
├── backend
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── jobController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── JobApplication.js
│   │   └── Resume.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── jobRoutes.js
│   │
│   ├── services
│   │   └── groqService.js
│   │
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Installation

### 1. Clone the repository

```
git clone https://github.com/yourusername/ai-job-tracker.git
cd ai-job-tracker
```

---

### 2. Setup Backend

```
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
GROQ_API_KEY=your_groq_key
```

Run the backend:

```
npm run dev
```

---

### 3. Setup Frontend

```
cd ../frontend
npm install
npm run dev
```

---

## API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Job Applications

```
GET    /api/jobs
POST   /api/jobs
PUT    /api/jobs/:id
DELETE /api/jobs/:id
```

All job routes require JWT authentication.

---

## Future Improvements

* Chrome extension to save jobs directly from LinkedIn
* Resume version comparison
* Automatic job description scraping
* AI cover letter generator
* Application analytics dashboard
* Email reminders for follow-ups

---

## Author

Shardendu Mishra
Computer Science Engineering Student
Frontend Developer | MERN Stack Developer

---

## License

This project is open source and available under the MIT License.
