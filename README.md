# File Management App

A modern, responsive web application built with React, TypeScript, and Tailwind CSS, featuring Firebase Authentication and Google Drive file storage.

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Firebase**:
   - Replace the `firebaseConfig` object in `src/contexts/AuthContext.tsx` with your Firebase project credentials.

3. **Configure Google Apps Script**:
   - Deploy a Google Apps Script to handle Google Drive file operations.
   - Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` in `src/components/files/FileDashboard.tsx` with your script's URL.

4. **Run Locally**:
   ```bash
   npm run dev
   ```

5. **Deploy to Vercel**:
   - Push the code to a GitHub repository.
   - Connect the repository to Vercel and deploy.

## Project Structure
- `src/`: Contains all source code
  - `components/`: Reusable React components
  - `contexts/`: Context providers for theme and authentication
  - `index.tsx`: Main entry point
  - `index.css`: Global styles with Tailwind
- `package.json`: Project dependencies and scripts
- `vite.config.ts`: Vite configuration for development and build
- `tailwind.config.js`: Tailwind CSS configuration
- `vercel.json`: Vercel deployment configuration

## Features
- Firebase Authentication (Google Sign-In, Phone OTP)
- Google Drive file storage and categorization
- Responsive design with dark/light mode toggle
- File previews for images, videos, and documents
- Modern UI with Tailwind CSS
