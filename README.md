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

### Step-by-Step GitHub Upload

1. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon → "New repository"
   - Name it `gas-adsorption-plots`
   - Make it **Public**
   - **Don't** initialize with README (we already have one)
   - Click "Create repository"

2. **Upload your files**:
   
   **Option A: Using GitHub Desktop (Easiest)**
   - Download [GitHub Desktop](https://desktop.github.com/)
   - Click "Clone a repository from the Internet"
   - Enter your repository URL
   - Choose local path and clone
   - Copy all your project files into the cloned folder
   - Commit and push

   **Option B: Using Web Interface**
   - On your new repository page, click "uploading an existing file"
   - Drag and drop ALL your project files
   - Write commit message: "Initial commit"
   - Click "Commit changes"

   **Option C: Using Command Line**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOURUSERNAME/gas-adsorption-plots.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: **GitHub Actions**
   - Save

4. **Your site will be live at**:
   ```
   https://YOURUSERNAME.github.io/gas-adsorption-plots/
   ```

## Troubleshooting Upload Issues

### If you can't upload all files:

1. **File size issues**: Make sure you're not uploading `node_modules` folder (it should be ignored)

2. **Too many files**: Upload in batches:
   - First: Upload `package.json`, `vite.config.js`, `index.html`, `README.md`
   - Second: Upload the `src` folder
   - Third: Upload the `.github` folder

3. **Git LFS issues**: For large files, you might need Git Large File Storage

4. **Permission issues**: Make sure the repository is public

### Alternative: Use GitHub CLI

```bash
# Install GitHub CLI first
gh repo create gas-adsorption-plots --public
git remote add origin https://github.com/YOURUSERNAME/gas-adsorption-plots.git
git push -u origin main
```

## Project Structure

```
gas-adsorption-plots/
├── .github/workflows/deploy.yml    # Auto-deployment
├── src/
│   ├── components/
│   │   └── Exercise1Plots.jsx     # Your plots
│   ├── App.jsx                    # Main app
│   ├── App.css                    # App styles
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── .gitignore                     # Git ignore
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── vite.config.js                # Build config
└── README.md                     # This file
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Recharts**: Powerful charting library for React
- **JavaScript ES6+**: Modern JavaScript features

## License

This project is open source and available under the [MIT License](LICENSE). 