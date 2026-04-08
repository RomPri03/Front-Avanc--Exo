import { useState } from 'react';

function AffichageCouleur({ estOk }) {
  return (
    <div style={{
      marginTop: '10px',
      padding: '20px',
      backgroundColor: estOk ? 'green' : 'red', 
      color: 'white',
      borderRadius: '5px'
    }}>
      {estOk ? "Félécitation : Tout est rempli gg !" : "Attention : Remplissez les deux champs Merci bien"}
    </div>
  );
}

function Exercice32() {
  const [login, setLogin] = useState("");
  const [mdp, setMdp] = useState("");

  const verification = login !== "" && mdp !== "";

  return (
    <div style={{ border: '2px solid blue', padding: '15px', marginTop: '20px' }}>
      <h3>Exercice 32</h3>
      
      <input 
        placeholder="Login" 
        onChange={(e) => setLogin(e.target.value)} 
      />
      
      <input 
        type="password" 
        placeholder="Mot de passe" 
        onChange={(e) => setMdp(e.target.value)} 
      />

      <AffichageCouleur estOk={verification} />
    </div>
  );
}

export default Exercice32;