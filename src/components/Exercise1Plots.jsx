import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Exercise1Plots = () => {
  const [temperature, setTemperature] = useState(300);
  const [qValue, setQValue] = useState(1.0);

  // Generate data for Langmuir isotherm (coverage vs chemical potential)
  const generateLangmuirData = (T, Q) => {
    const data = [];
    const kB = 8.617e-5; // eV/K
    const beta = 1 / (kB * T);
    
    // μ range from -0.5 to 0.5 eV
    for (let mu = -0.5; mu <= 0.5; mu += 0.01) {
      const z = Math.exp(beta * mu); // fugacity
      const theta = (z * Q) / (1 + z * Q);
      data.push({
        mu: mu,
        theta: theta,
        z: z
      });
    }
    return data;
  };

  // Generate data for chemical potential vs coverage
  const generateMuVsCoverageData = (T, Q) => {
    const data = [];
    const kB = 8.617e-5; // eV/K
    
    // θ range from 0.01 to 0.99
    for (let theta = 0.01; theta <= 0.99; theta += 0.01) {
      const mu = (kB * T) * Math.log(theta / ((1 - theta) * Q));
      data.push({
        theta: theta,
        mu: mu
      });
    }
    return data;
  };

  // Generate data for different temperatures
  const generateTempComparisonData = (Q) => {
    const temperatures = [200, 300, 400, 500];
    const data = [];
    const kB = 8.617e-5;
    
    for (let mu = -0.4; mu <= 0.4; mu += 0.02) {
      const point = { mu: mu };
      temperatures.forEach(T => {
        const beta = 1 / (kB * T);
        const z = Math.exp(beta * mu);
        const theta = (z * Q) / (1 + z * Q);
        point[`T${T}K`] = theta;
      });
      data.push(point);
    }
    return data;
  };

  // Generate data for different Q values
  const generateQComparisonData = (T) => {
    const qValues = [0.1, 0.5, 1.0, 2.0, 5.0];
    const data = [];
    const kB = 8.617e-5;
    const beta = 1 / (kB * T);
    
    for (let mu = -0.4; mu <= 0.4; mu += 0.02) {
      const point = { mu: mu };
      qValues.forEach(Q => {
        const z = Math.exp(beta * mu);
        const theta = (z * Q) / (1 + z * Q);
        point[`Q${Q}`] = theta;
      });
      data.push(point);
    }
    return data;
  };

  const langmuirData = generateLangmuirData(temperature, qValue);
  const muVsCoverageData = generateMuVsCoverageData(temperature, qValue);
  const tempComparisonData = generateTempComparisonData(qValue);
  const qComparisonData = generateQComparisonData(temperature);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#1e293b' }}>
          Exercise 1: Gas Adsorption Visualizations
        </h1>
        
        {/* Interactive Controls */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '10px', 
          marginBottom: '30px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '15px', color: '#374151' }}>Interactive Parameters</h3>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Temperature: {temperature} K
              </label>
              <input
                type="range"
                min="200"
                max="600"
                value={temperature}
                onChange={(e) => setTemperature(parseInt(e.target.value))}
                style={{ width: '200px' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Q(T): {qValue}
              </label>
              <input
                type="range"
                min="0.1"
                max="5.0"
                step="0.1"
                value={qValue}
                onChange={(e) => setQValue(parseFloat(e.target.value))}
                style={{ width: '200px' }}
              />
            </div>
          </div>
        </div>

        {/* Main Langmuir Isotherm Plot */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '10px', 
          marginBottom: '30px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '15px', color: '#374151' }}>
            Langmuir Isotherm: Surface Coverage vs Chemical Potential
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={langmuirData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="mu" 
                label={{ value: 'Chemical Potential μ (eV)', position: 'insideBottom', offset: -10 }}
              />
              <YAxis 
                label={{ value: 'Surface Coverage θ', angle: -90, position: 'insideLeft' }}
                domain={[0, 1]}
              />
              <Tooltip 
                formatter={(value, name) => [
                  name === 'theta' ? value.toFixed(3) : value.toExponential(2),
                  name === 'theta' ? 'Coverage θ' : 'Fugacity z'
                ]}
                labelFormatter={(mu) => `μ = ${mu} eV`}
              />
              <Legend />
              <Line type="monotone" dataKey="theta" stroke="#2563eb" strokeWidth={3} name="Coverage θ" dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '10px' }}>
            <strong>Physics:</strong> The S-shaped curve shows how surface coverage increases with chemical potential. 
            At low μ, few sites are occupied. At high μ, the surface approaches saturation (θ → 1).
          </p>
        </div>

        {/* Chemical Potential vs Coverage */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '10px', 
          marginBottom: '30px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '15px', color: '#374151' }}>
            Chemical Potential vs Surface Coverage (Part c)
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={muVsCoverageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="theta" 
                label={{ value: 'Surface Coverage θ', position: 'insideBottom', offset: -10 }}
                domain={[0, 1]}
              />
              <YAxis 
                label={{ value: 'Chemical Potential μ (eV)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value) => [value.toFixed(3), 'μ (eV)']}
                labelFormatter={(theta) => `θ = ${theta.toFixed(3)}`}
              />
              <Legend />
              <Line type="monotone" dataKey="mu" stroke="#dc2626" strokeWidth={3} name="μ(θ)" dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '10px' }}>
            <strong>Physics:</strong> This shows μ = k_B T ln[θ/(1-θ)Q(T)]. The logarithmic divergence at θ → 0 and θ → 1 
            reflects the thermodynamic cost of forcing very low or very high coverage.
          </p>
        </div>

        {/* Temperature Comparison */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '10px', 
          marginBottom: '30px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '15px', color: '#374151' }}>
            Temperature Effects on Adsorption
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={tempComparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="mu" 
                label={{ value: 'Chemical Potential μ (eV)', position: 'insideBottom', offset: -10 }}
              />
              <YAxis 
                label={{ value: 'Surface Coverage θ', angle: -90, position: 'insideLeft' }}
                domain={[0, 1]}
              />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="T200K" stroke="#7c3aed" strokeWidth={2} name="200 K" dot={false} />
              <Line type="monotone" dataKey="T300K" stroke="#2563eb" strokeWidth={2} name="300 K" dot={false} />
              <Line type="monotone" dataKey="T400K" stroke="#059669" strokeWidth={2} name="400 K" dot={false} />
              <Line type="monotone" dataKey="T500K" stroke="#dc2626" strokeWidth={2} name="500 K" dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '10px' }}>
            <strong>Physics:</strong> Higher temperatures make the transition more gradual. At low T, the adsorption 
            is sharper (more step-like), while at high T, thermal energy competes with binding energy.
          </p>
        </div>

        {/* Q(T) Parameter Effects */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '10px', 
          marginBottom: '30px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '15px', color: '#374151' }}>
            Effect of Partition Function Q(T)
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={qComparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="mu" 
                label={{ value: 'Chemical Potential μ (eV)', position: 'insideBottom', offset: -10 }}
              />
              <YAxis 
                label={{ value: 'Surface Coverage θ', angle: -90, position: 'insideLeft' }}
                domain={[0, 1]}
              />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Q0.1" stroke="#7c3aed" strokeWidth={2} name="Q = 0.1" dot={false} />
              <Line type="monotone" dataKey="Q0.5" stroke="#2563eb" strokeWidth={2} name="Q = 0.5" dot={false} />
              <Line type="monotone" dataKey="Q1" stroke="#059669" strokeWidth={2} name="Q = 1.0" dot={false} />
              <Line type="monotone" dataKey="Q2" stroke="#ea580c" strokeWidth={2} name="Q = 2.0" dot={false} />
              <Line type="monotone" dataKey="Q5" stroke="#dc2626" strokeWidth={2} name="Q = 5.0" dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '10px' }}>
            <strong>Physics:</strong> Larger Q(T) values (more internal degrees of freedom or stronger binding) 
            shift the adsorption curve to lower chemical potentials. This reflects enhanced adsorption probability.
          </p>
        </div>

        {/* Physical Interpretation Summary */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '15px', color: '#374151' }}>
            Key Physical Insights
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ color: '#2563eb', marginBottom: '10px' }}>Langmuir Isotherm</h4>
              <ul style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <li>θ = zQ(T)/(1 + zQ(T)) with z = e^(βμ)</li>
                <li>Saturation behavior: θ → 1 as μ → ∞</li>
                <li>Low coverage limit: θ ≈ zQ(T) for small z</li>
                <li>Describes non-interacting adsorption</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#dc2626', marginBottom: '10px' }}>Chemical Potential</h4>
              <ul style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <li>μ = k_B T ln[θ/((1-θ)Q(T))]</li>
                <li>Logarithmic divergences at θ = 0 and θ = 1</li>
                <li>Temperature-dependent scaling</li>
                <li>Q(T) sets the energy scale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise1Plots; 