# Signup Page - Atomic Design & Feature-Based Architecture

This signup page has been implemented following **Atomic Design Pattern** and **Feature-Based Architecture** with beautiful animations using **Framer Motion** and **React Spring**.

## 🏗️ Architecture

### Atomic Design Structure
```
src/
├── ui/
│   ├── atoms/          # Basic building blocks
│   │   ├── Button/     # Reusable button component
│   │   ├── Input/      # Input field component
│   │   └── Image/      # Image component
│   ├── molecules/      # Combinations of atoms
│   │   ├── FormField/  # Input + Label + Validation
│   │   └── ImageCard/  # Image with styling
│   ├── organisms/      # Complex UI components
│   │   ├── SignupForm/ # Complete signup form
│   │   └── AnimatedSignupCard/ # Card with animations
│   ├── templates/      # Page layouts
│   │   └── SignupPageTemplate/ # Main signup page layout
│   └── pages/          # Complete pages
│       └── SignupPage/
└── features/           # Feature-based organization
    └── signup/         # Signup feature module
```

## ✨ Features

### Form Fields
- ✅ First Name & Last Name (side by side)
- ✅ Phone Number with validation
- ✅ Email with format validation
- ✅ Password with strength requirements
- ✅ Confirm Password with matching validation

### Animations
- 🎬 **Entrance animations** - Card slides in with scale and opacity
- 🎭 **Form animations** - Each field animates in sequence
- 🔄 **Interactive animations** - Button hover/click effects
- 📱 **Swipe animations** - Image swipes left, form swipes right
- 🌟 **Background effects** - Floating particles and geometric shapes
- 🎨 **Color gradients** - Dynamic background overlays

## 🎨 Design Theme

### Color Palette
- **Primary**: Turquoise (`teal-500` to `teal-700`)
- **Secondary**: Black (`black` to `gray-900`)
- **Accent**: Light turquoise (`teal-300` to `teal-400`)
- **Background**: Gradient overlays with turquoise and black tones
- **Text**: Dark grays and black for readability

### Visual Elements
- 🖼️ Background image: `signup-page-bg.jpg`
- 🎨 Form card image: `signup-form.jpg` (left side)
- 📝 Form inputs on the right side
- 💫 Glassmorphism effects with turquoise accents
- 🌈 Turquoise to black gradient overlays
- 🎯 Turquoise focus states and hover effects

## 🎮 Animation Controls

The page includes a **"Toggle Animation"** button in the top-right corner of the signup card that demonstrates the swipe animations:
- **Image swipes left** (translateX: -100%)
- **Form swipes right** (translateX: 100%)
- Smooth spring-based transitions

## 🛠️ Technologies Used

- **React 19** with TypeScript
- **Framer Motion** for declarative animations
- **React Spring** for physics-based animations
- **Tailwind CSS** for styling
- **Vite** for development

## 🚀 Running the Project

```bash
npm run dev
```

The signup page will be available at `http://localhost:5174/`

## 🎨 Animation Details

### Framer Motion Animations
- Page entrance with staggered effects
- Form field sequential animations
- Button micro-interactions
- Background particle system

### React Spring Animations
- Smooth swipe transitions
- Physics-based spring effects
- Card entrance animation
- Interactive toggle functionality

## 📝 Form Validation

- **Required fields**: All fields are mandatory
- **Email validation**: Proper email format required
- **Password strength**: Minimum 8 characters
- **Password matching**: Confirm password must match
- **Phone validation**: Basic phone number format
- **Real-time feedback**: Errors clear as user types

## 🎯 Next Steps

- Add form submission handling
- Implement success/error states
- Add loading animations
- Connect to authentication API
- Add social login options
- Implement progressive form validation
