import React from 'react';

function App() {

  const loginSimple = "RomainPrieur";
  const mdpSimple = "1234";


  const utilisateur = {
    login: "Romain_PrieurObjet",
    mdp: "2810"
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Exercice 29 - Version React</h1>


      <section style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
        <h2>1) Affichage par variables</h2>
        <p>Login : {loginSimple}</p>
        <p>Pass : {mdpSimple}</p>
      </section>

      <section style={{ border: '1px solid #007bff', padding: '10px' }}>
        <h2>2) Affichage par Objet</h2>
        <p>Login : {utilisateur.login}</p>
        <p>Pass : {utilisateur.mdp}</p>
      </section>
    </div>
  );
}

export default App;