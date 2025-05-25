# Gas Adsorption Interactive Plots

Interactive visualizations of gas adsorption isotherms and Langmuir equations for educational purposes.

## Features

- **Interactive Langmuir Isotherm**: Visualize surface coverage vs chemical potential
- **Chemical Potential Analysis**: Explore the relationship between μ and θ
- **Temperature Effects**: Compare adsorption behavior at different temperatures
- **Partition Function Impact**: See how Q(T) affects adsorption curves
- **Real-time Parameter Control**: Adjust temperature and Q(T) with sliders

## Live Demo

🌐 **[View Live Demo](https://yourusername.github.io/gas-adsorption-plots/)**

## Physics Background

This application demonstrates the Langmuir adsorption model:

- **Langmuir Isotherm**: θ = zQ(T)/(1 + zQ(T)) where z = e^(βμ)
- **Chemical Potential**: μ = k_B T ln[θ/((1-θ)Q(T))]
- **Temperature dependence**: β = 1/(k_B T)
- **Partition function**: Q(T) represents internal degrees of freedom

## Setup Instructions

### Prerequisites

1. **Install Node.js**: Download from [nodejs.org](https://nodejs.org/)
   - Choose the LTS version (recommended)
   - This will also install npm (Node Package Manager)

### Local Development

1. **Clone or download this repository**
2. **Open terminal/command prompt** and navigate to the project folder:
   ```bash
   cd gas-adsorption-plots
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deployment to GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `gas-adsorption-plots` (or any name you prefer)
   - Make it public

2. **Upload your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/gas-adsorption-plots.git
   git push -u origin main
   ```

3. **Create GitHub Actions workflow**:
   - Create `.github/workflows/deploy.yml` in your repository
   - Copy the workflow configuration (see below)

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Your site will be available at: `https://yourusername.github.io/gas-adsorption-plots/`

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Method 2: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script** to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

## Project Structure

```
gas-adsorption-plots/
├── public/
├── src/
│   ├── components/
│   │   └── Exercise1Plots.jsx    # Main plotting component
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styles
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Recharts**: Powerful charting library for React
- **JavaScript ES6+**: Modern JavaScript features

## Customization

You can easily modify the plots by editing `src/components/Exercise1Plots.jsx`:

- **Add new parameters**: Create new state variables and sliders
- **Modify equations**: Update the calculation functions
- **Change styling**: Adjust the inline styles or add CSS classes
- **Add new plots**: Create additional chart components

## Contributing

Feel free to fork this project and submit pull requests for improvements!

## License

This project is open source and available under the [MIT License](LICENSE). 