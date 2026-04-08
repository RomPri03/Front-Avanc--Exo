import { useState } from 'react';

function Exercice31() {
  const [mdpSaisi, setMdpSaisi] = useState("");
  
  const estErreur = mdpSaisi !== "" && mdpSaisi !== "1234";

  return (
    <div style={{ 
      border: '3px solid', 
      borderColor: estErreur ? 'red' : 'green', 
      padding: '20px', 
      marginTop: '20px',
      borderRadius: '10px'
    }}>
      <h2>Exercice 31 - Formulaire</h2>
      <input 
        type="text" 
        placeholder="Login" 
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <input 
        type="password" 
        placeholder="Mot de passe"
        value={mdpSaisi}
        onChange={(e) => setMdpSaisi(e.target.value)}
      />
      
      {estErreur && <p style={{ color: 'red' }}>Accès refusé : mauvais MDP</p>}
      {mdpSaisi === "1234" && <p style={{ color: 'green' }}>Accès accordé !</p>}
    </div>
  );
}
export default Exercice31;