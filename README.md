# 🕌 Sharia Compliance Analyzer

An advanced Islamic contract analysis tool featuring AI-powered Sharia compliance scoring, multiple jurisprudence perspectives, and intelligent rephrasing capabilities.

## ✨ Features

- **📊 Sharia Compliance Scoring**: Religion, Law, and Ethics compliance metrics
- **🤖 AI Islamic Doctrine Agents**: Support for Hanafi, Maliki, Shafi'i, Hanbali, and Ja'fari schools
- **📝 Interactive Contract Analysis**: Click-through bullet points with detailed explanations
- **🔄 AI-Powered Rephrasing**: Multiple Islamic perspective-based content suggestions
- **💬 Chat Heads Interface**: Messenger-style floating chat heads for perspective reviews
- **📱 Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **🎨 Glassmorphic UI**: Modern glass-like design with backdrop blur effects

## 🚀 Deployment & CI/CD

This project is configured for automatic deployment to Netlify using GitHub Actions.

### Netlify Setup Instructions

1. **Connect Repository to Netlify**:
   - Go to [Netlify](https://netlify.com) and sign in
   - Click "New site from Git"
   - Connect your GitHub account and select this repository
   - Set build settings:
     - Build command: `npm ci && npm run build`
     - Publish directory: `dist`
     - Node version: `18`

2. **Get Netlify Credentials**:
   - Go to your Netlify site settings
   - Copy your Site ID from "Site details"
   - Generate a new auth token from "User settings" > "Applications"

3. **Configure GitHub Secrets**:
   - Go to your GitHub repository settings
   - Navigate to "Secrets and variables" > "Actions"
   - Add these secrets:
     - `NETLIFY_AUTH_TOKEN`: Your Netlify auth token
     - `NETLIFY_SITE_ID`: Your Netlify site ID

4. **Automatic Deployment**:
   - Push to `main` branch triggers automatic deployment
   - Pull requests get deploy previews
   - Build status appears in GitHub commits

### Manual Deployment

```bash
# Install dependencies
npm ci

# Build for production
npm run build

# Preview build locally
npm run preview
```

## 🛠️ Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Local Development
```bash
# Clone repository
git clone <repository-url>
cd sharia

# Install dependencies
npm install

# Start development server
npm run dev

# Run type checking
npm run type-check

# Run linting
npm run lint
```

### Project Structure
```
src/
├── app/           # Main app component
├── features/      # Feature-specific components
├── shared/        # Shared utilities and components
├── styles/        # Global styles and CSS
└── ui/           # Atomic design components
    ├── atoms/     # Basic building blocks
    ├── molecules/ # Component combinations
    ├── organisms/ # Complex UI sections
    ├── pages/     # Full page components
    └── templates/ # Page layouts
```

## 🔧 Configuration Files

- `netlify.toml`: Netlify deployment configuration
- `public/_headers`: HTTP headers for proper MIME types
- `public/_redirects`: SPA routing configuration
- `vite.config.ts`: Build tool configuration
- `.github/workflows/deploy.yml`: CI/CD pipeline

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with Glassmorphism
- **Icons**: Material UI Icons
- **Animations**: Motion (Framer Motion)
- **Deployment**: Netlify with GitHub Actions CI/CD

## 🔒 Security Features

- Content Security Policy headers
- XSS protection
- Frame options for clickjacking prevention
- Secure MIME type handling
- Referrer policy configuration

## 📄 License

This project is licensed under the MIT License.
- **🎨 Glassmorphic UI**: Modern, elegant interface with smooth animations
- **📱 Responsive Design**: Works seamlessly across all device sizes

## 🚀 Live Demo

[View Live Demo](https://your-site-name.netlify.app) *(Replace with your actual Netlify URL)*

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Material-UI Icons** - Professional icon library
- **Framer Motion** - Smooth animations and transitions
- **Atomic Design** - Scalable component architecture

## 📁 Project Structure

```
src/
├── ui/
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Simple combinations
│   ├── organisms/      # Complex components
│   ├── pages/          # Full page components
│   └── templates/      # Page layouts
├── features/           # Feature-specific logic
├── shared/             # Shared utilities
└── styles/             # Global styles
```

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sharia-compliance-analyzer.git
   cd sharia-compliance-analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build & Deploy

### Local Build
```bash
npm run build
npm run preview
```

### Deploy to Netlify

#### Option 1: Manual Deploy
1. Run the deployment preparation script:
   - **Windows**: Double-click `deploy.bat`
   - **Mac/Linux**: Run `./deploy.sh`
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder

#### Option 2: Git Integration
1. Push to GitHub/GitLab
2. Connect repository to Netlify
3. Use these build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:production` - Build with production optimizations
- `npm run preview` - Preview production build locally
- `npm run serve` - Serve build on network
- `npm run lint` - Run ESLint

## 🎯 Usage Guide

### 1. **Score Analysis**
- View current Sharia compliance scores
- Toggle Islamic doctrine AI agents
- Click "Calculate Scores" to recalculate based on selected agents

### 2. **Contract Review**
- Click any contract summary point to view details
- Use "Rephrase" to get Islamic perspective-based alternatives
- Use "Analyze" to trigger score recalculation

### 3. **Islamic Perspectives**
- Select from 7 different Islamic schools and approaches
- Each perspective provides unique rephrasing suggestions
- Review suggestions in floating chat heads
- Accept preferred rephrasing to update content

## 🔧 Configuration

### Environment Variables
- `VITE_APP_TITLE` - Application title
- `VITE_APP_DESCRIPTION` - Application description
- `VITE_NODE_ENV` - Environment (development/production)

### Netlify Configuration
The project includes `netlify.toml` with:
- Automatic SPA routing
- Security headers
- Asset caching
- Build optimization

## 🎨 Design System

### Colors
- Primary: `#bad6b8` (Islamic Green)
- Secondary: `#597362` (Dark Green)
- Background: Form texture with glassmorphism

### Typography
- Primary: System fonts for optimal performance
- Weights: Light (300), Medium (500), Bold (700)

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Islamic scholarship for jurisprudence guidance
- Material-UI for comprehensive icon library
- Tailwind CSS for utility-first styling
- React community for excellent tooling

---

Built with ❤️ for the Islamic finance community

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
