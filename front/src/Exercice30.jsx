function Exercice30() {
    
  const estConnecte = true;
  const utilisateurs = ["Romain", "Eloi", "Fred", "Raphaël", "Jonas"];

  return (
    <div style={{ border: '2px solid #fc048c', padding: '15px', marginTop: '20px', borderRadius: '8px' }}>
      <h2>Exercice 30 - Logique</h2>

      <div style={{ marginBottom: '15px' }}>
        <strong>Test Ternaire :</strong>
        {estConnecte ? <p>Utilisateur en ligne</p> : <p>Utilisateur déconnecté</p>}
      </div>

      <div>
        <strong>Test Mapping (Liste) :</strong>
        <ul>
          {utilisateurs.map((nom, index) => (
            <li key={index}>{nom}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Exercice30;