import React from 'react';
import HexagonGrid from '../components/HexagoneGrid';

const Home = () => {
  const images = [{ src: '' }];

  const generateGridPositions = () => {
    const gridSize = 3; // Nombre de lignes et de colonnes dans la grille
    const r = 50; // Rayon de l'hexagone
    const a = 2 * Math.PI / 6; // Angle entre les côtés adjacents de l'hexagone
    const positions = [];

    // Calcul des positions des hexagones
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const x = col * r * (1 + Math.cos(a)) + r;
        const y = row * (r * Math.sin(a) + r * Math.sin(a));
        positions.push({ x, y });
      }
    }

    return positions;
  };

  const gridPositions = generateGridPositions();

  return (
    <div>
      <h1>HexagonGrid Example</h1>
      <HexagonGrid images={images} positions={gridPositions} />
    </div>
  );
}

export default Home;
