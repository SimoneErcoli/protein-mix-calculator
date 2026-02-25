'use client';

import { useState, useMemo } from 'react';
import { ingredients, Ingredient } from '@/data/ingredients';

export default function Home() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [search, setSearch] = useState('');

  const filteredIngredients = useMemo(() => {
    return ingredients.filter(ing => 
      ing.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleQuantityChange = (id: string, value: string) => {
    const numValue = parseFloat(value);
    setQuantities(prev => ({
      ...prev,
      [id]: isNaN(numValue) ? 0 : numValue
    }));
  };

  const totals = useMemo(() => {
    let totalWeight = 0;
    let totalProteinWeight = 0;
    
    Object.entries(quantities).forEach(([id, grams]) => {
      const ingredient = ingredients.find(ing => ing.id === id);
      if (ingredient && grams > 0) {
        totalWeight += grams;
        // protein is per 100g
        totalProteinWeight += (grams * ingredient.protein) / 100;
      }
    });

    const proteinPercentage = totalWeight > 0 ? (totalProteinWeight / totalWeight) * 100 : 0;
    
    // Special calculation for eggs if needed, based on the excel it says 1.3 protein per egg?
    // In our data we added 'eggs' with 1.3 protein. 
    // Usually eggs are counted in numbers, each egg ~50g? 
    // Let's assume the user enters number of eggs and we treat it as units.
    
    return {
      totalWeight,
      totalProteinWeight,
      proteinPercentage
    };
  }, [quantities]);

  const getDigestibilityBadge = (text: string) => {
    if (text.includes('OTTIMA') || text.includes('MOLTO')) return 'badge-high';
    if (text.includes('BUONA')) return 'badge-medium';
    return 'badge-low';
  };

  return (
    <div className="container">
      <header>
        <h1>MixMaster Pro</h1>
        <p className="subtitle">Calcolatore Proteico Avanzato per Mix e Boilies</p>
      </header>

      <div className="calculator-grid">
        <section className="card">
          <h2>
            <span style={{ fontSize: '1.5rem' }}>🧪</span> Ingredienti
          </h2>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Cerca ingrediente..." 
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="scroll-area">
            <table className="ingredient-table">
              <thead>
                <tr>
                  <th>Componente</th>
                  <th>Proteine (100g)</th>
                  <th>Digeribilità</th>
                  <th>Grammi</th>
                </tr>
              </thead>
              <tbody>
                {filteredIngredients.map((ing) => (
                  <tr key={ing.id} className="ingredient-row">
                    <td>
                      <div style={{ fontWeight: 600 }}>{ing.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{ing.binding}</div>
                    </td>
                    <td>{ing.protein > 0 ? `${ing.protein}%` : '-'}</td>
                    <td>
                      <span className={`badge ${getDigestibilityBadge(ing.digestibility)}`}>
                        {ing.digestibility || 'N/A'}
                      </span>
                    </td>
                    <td>
                      <input 
                        type="number" 
                        placeholder="0"
                        min="0"
                        value={quantities[ing.id] || ''}
                        onChange={(e) => handleQuantityChange(ing.id, e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="summary-section">
          <div className="card" style={{ position: 'sticky', top: '2rem' }}>
            <h2>
              <span style={{ fontSize: '1.5rem' }}>📊</span> Risultati Mix
            </h2>
            
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-label">Peso Totale Mix</span>
                <span className="stat-value">{totals.totalWeight.toFixed(1)} g</span>
              </div>
              
              <div className="stat-item">
                <span className="stat-label">Proteine Totali</span>
                <span className="stat-value">{totals.totalProteinWeight.toFixed(2)} g</span>
              </div>

              <div className="stat-item" style={{ flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
                <span className="stat-label" style={{ marginBottom: '0.5rem' }}>Percentuale Proteica</span>
                <span className="stat-value large">{totals.proteinPercentage.toFixed(1)}%</span>
                <div style={{ 
                  marginTop: '1rem', 
                  width: '100%', 
                  height: '8px', 
                  background: 'rgba(255,255,255,0.1)', 
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    width: `${Math.min(totals.proteinPercentage, 100)}%`, 
                    height: '100%', 
                    background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                    transition: 'width 0.5s ease-out'
                  }} />
                </div>
              </div>

              <button className="btn" onClick={() => setQuantities({})}>
                Resetta Mix
              </button>
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(56, 189, 248, 0.05)', borderRadius: '1rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <strong>Suggerimento:</strong> Per un mix bilanciato, punta a una percentuale proteica tra il 30% e il 45% a seconda della stagione.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>&copy; 2024 MixMaster Pro - Ispirato da Charlie & Enrico</p>
        <p style={{ marginTop: '0.5rem' }}>I valori (▼) sono riferiti a temperature dell'acqua &gt;= 18°</p>
      </footer>
    </div>
  );
}
