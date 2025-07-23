# Setup Instructions for Modern Portfolio

## File Structure Setup

To set up this project correctly, organize your files as follows:

```
modern-portfolio/
├── components/                 # All React components
│   ├── ui/                    # Shadcn UI components
│   ├── figma/                 # Figma-specific components
│   ├── AboutPage.tsx
│   ├── AdminDashboard.tsx
│   ├── AuthPage.tsx
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   ├── Navbar.tsx
│   ├── ProjectsPage.tsx
│   ├── ThemeProvider.tsx
│   └── UploadPage.tsx
├── src/                       # Source files
│   ├── components/            # UI utilities only
│   │   └── ui/
│   │       ├── use-mobile.ts
│   │       └── utils.ts
│   ├── App.tsx               # Main app component (moved here)
│   └── main.tsx              # Entry point
├── styles/
│   └── globals.css           # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── index.html
└── [other config files]
```

## Key Changes Made

1. **Moved App.tsx**: From root to `src/App.tsx`
2. **Updated imports**: Changed component imports to use relative paths (`../components/`)
3. **Fixed CSS import**: Updated globals.css path in main.tsx
4. **Updated Vite config**: Added path aliases for better imports

## Installation Steps

1. **Create the project folder structure** as shown above
2. **Copy all files** into their correct locations
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start development server**:
   ```bash
   npm run dev
   ```

## Important Notes

- The `components/` folder at root level contains all page components
- The `src/components/ui/` folder only contains utility files (utils.ts, use-mobile.ts)
- All Shadcn UI components remain in `components/ui/` at root level
- Make sure App.tsx is in the `src/` directory, not at root level

## Build Commands

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`

If you encounter any import errors, double-check that files are in the correct directories as shown in the structure above.