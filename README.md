# Modern Portfolio Application

A modern, responsive personal portfolio application built with React, TypeScript, and Tailwind CSS featuring an elegant orange and dark gray theme.

## Features

✨ **Modern Design**
- Clean, professional layout with orange + dark gray theme
- Fully responsive design (mobile, tablet, desktop)
- Dark/light mode toggle with persistent preferences
- Smooth animations and transitions

🔐 **Authentication**
- Email & Password login/signup
- Phone OTP authentication (mock implementation)
- Protected routes for authenticated users
- Admin dashboard for privileged users

📄 **Portfolio Pages**
- Homepage with hero section and social links
- About page with skills, experience timeline, and personal info
- Projects showcase with filtering and categorization
- Contact form with validation and status feedback

📁 **File Management**
- Upload page with drag-and-drop functionality
- File categorization (images, documents, resume)
- File preview and management interface
- Admin dashboard for file oversight

⚡ **Technical Features**
- Built with React 18 and TypeScript
- Styled with Tailwind CSS v4
- Client-side routing with React Router
- Component-based architecture
- Mock API calls (ready for backend integration)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Download and extract the project files**

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── figma/             # Figma-specific components
│   ├── AboutPage.tsx      # About page with timeline
│   ├── AdminDashboard.tsx # Admin interface
│   ├── AuthPage.tsx       # Authentication flows
│   ├── ContactPage.tsx    # Contact form
│   ├── HomePage.tsx       # Landing page
│   ├── Navbar.tsx         # Navigation component
│   ├── ProjectsPage.tsx   # Portfolio showcase
│   ├── ThemeProvider.tsx  # Theme management
│   └── UploadPage.tsx     # File upload interface
├── styles/
│   └── globals.css        # Global styles and CSS variables
├── App.tsx                # Main application component
└── main.tsx              # Application entry point
```

## Demo Credentials

For testing the authentication system:

**Regular User:**
- Email: `demo@example.com`
- Password: `demo123`

**Admin User:**
- Email: `admin@example.com` 
- Password: `admin123`

**Phone Authentication:**
- Any phone number + any 6-digit OTP

## Customization

### Theme Colors

The application uses CSS custom properties for theming. You can customize colors in `/src/styles/globals.css`:

```css
:root {
  --primary: #f97316;     /* Orange theme color */
  --background: #ffffff;   /* Light background */
  --foreground: #1f2937;   /* Dark text */
  /* ... other variables */
}
```

### Content Updates

1. **Personal Information**: Update `HomePage.tsx` and `AboutPage.tsx`
2. **Projects**: Modify the projects array in `ProjectsPage.tsx`
3. **Skills & Experience**: Update the timeline and skills in `AboutPage.tsx`
4. **Contact Information**: Update contact details in `ContactPage.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration and deploy

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to [Netlify](https://netlify.com)
3. Configure redirects for SPA routing

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the contents of `dist/` to your web server
3. Configure your web server to serve `index.html` for all routes

## Adding Backend Integration

This portfolio is currently frontend-only with mock data. To add real backend functionality:

1. **Database Integration**
   - Replace mock data with API calls
   - Set up databases for users, messages, and files

2. **Authentication**
   - Integrate with Firebase Auth, Auth0, or similar
   - Replace mock login functions with real authentication

3. **File Storage**
   - Connect to cloud storage (AWS S3, Cloudinary, etc.)
   - Implement real file upload/download functionality

4. **Contact Form**
   - Add email service integration (EmailJS, Sendgrid, etc.)
   - Store form submissions in database

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **React Router** - Routing
- **Vite** - Build tool
- **Lucide React** - Icons

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please contact:
- Email: alex@example.com
- GitHub: [@alexjohnson](https://github.com/alexjohnson)

---

**Happy coding! 🚀**