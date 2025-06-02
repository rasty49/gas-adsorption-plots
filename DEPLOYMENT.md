# Deployment Guide for Physics Visualizations

This project now contains two interactive physics visualization pages:

## 🔬 What's Available

### 1. Gas Adsorption Plots (React App)
- **Location**: Main React application at `/`
- **Content**: Interactive Langmuir isotherms and gas adsorption visualizations
- **Framework**: React with Recharts
- **File**: `src/components/Exercise1Plots.jsx`

### 2. Statistical Physics Visualizations (Standalone HTML)
- **Location**: `/statistical-physics.html`
- **Content**: 
  - Exercise 1: Superfluid Helium - Roton Dispersion
  - Exercise 2: d-Dimensional Bose-Einstein Gas
- **Framework**: Pure HTML/JavaScript with Plotly.js
- **File**: `public/statistical-physics.html`

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Enable PowerShell Scripts** (if needed):
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select "gh-pages" branch (or set up GitHub Actions)
   - Your site will be available at: `https://yourusername.github.io/gas-adsorption-plots`

4. **Navigation**:
   - Main page: Gas Adsorption visualizations
   - Statistical Physics: `yourdomain.com/statistical-physics.html`

### Option 2: Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### Option 3: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

### Option 4: Local Development

1. **Start development server**:
   ```bash
   npm run dev
   ```

2. **Access**:
   - Main app: `http://localhost:5173`
   - Statistical physics: `http://localhost:5173/statistical-physics.html`

## 📁 File Structure

```
gas-adsorption-plots/
├── public/
│   ├── statistical-physics.html    # Statistical Physics visualizations
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Exercise1Plots.jsx      # Gas adsorption plots
│   ├── App.jsx                     # Main app with navigation
│   ├── main.jsx
│   └── index.css
├── index.html                      # Main HTML template
├── package.json
└── vite.config.js
```

## 🔗 Navigation Features

- **Header Navigation**: Added to main React app with links between sections
- **Back Button**: Statistical physics page has a back button to gas adsorption
- **Responsive Design**: Both pages work well on mobile and desktop

## 🎯 Key Features

### Gas Adsorption (React)
- Interactive temperature and Q(T) controls
- Real-time plot updates
- Multiple visualization types
- Physics explanations

### Statistical Physics (HTML)
- **Exercise 1**: Superfluid Helium
  - Roton dispersion relation
  - Heat capacity vs temperature
  - Roton population analysis
- **Exercise 2**: Bose-Einstein Gas
  - d-dimensional convergence analysis
  - Bose-Einstein distribution
  - Critical temperature behavior
- Interactive controls for all parameters
- Real-time physics insights

## 🛠 Troubleshooting

### PowerShell Execution Policy
If you get execution policy errors:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Build Issues
If npm commands fail, try:
```bash
node_modules/.bin/vite build
```

### Missing Dependencies
```bash
npm install
```

## 📱 Mobile Compatibility

Both visualizations are fully responsive and work well on:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## 🎨 Styling

- **Gas Adsorption**: Clean, modern React styling with interactive controls
- **Statistical Physics**: Beautiful gradient backgrounds with physics-themed design
- **Consistent Branding**: Both pages share similar color schemes and navigation

Your physics visualizations are now ready for deployment! 🚀 