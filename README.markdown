# Personal Portfolio

A modern, responsive personal portfolio app built with React, TypeScript, Tailwind CSS, and Firebase. Features include authentication (Email, Phone OTP, Google), file uploads, a contact form, and PWA support.

## Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication (Email/Password, Phone, Google), Firestore, and Storage.
   - Add your Firebase config to `src/firebase.ts`.

3. **Set Environment Variables**:
   Create a `.env` file in the root directory:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run Locally**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

6. **Deploy to Vercel**:
   See deployment instructions below.

## Firebase Rules

**Firestore**:
```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /uploads/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /messages/{messageId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

**Storage**:
```firestore
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /uploads/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Notes
- Replace placeholder images and resume links with your own assets.
- Ensure reCAPTCHA is configured for phone authentication in Firebase Console.