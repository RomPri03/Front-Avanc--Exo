import Exercice30 from './Exercice30';
import Exercice31 from './Exercice31';
import Exercice32 from './Exercice32';
import Exercice33 from './Exercice33';

function App() {

  const login = "RomainPrieur";
  const mdp = "1234";


  const utilisateur = {
    login: "Romain_PrieurObjet",
    mdp: "2810"
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>TP React - Tous les Exercices</h1>

      <div style={{ border: '1px solid grey', padding: '15px', marginBottom: '10px' }}>
        <h2>Exercice 29 - Données</h2>
        

        <p><strong>Variables :</strong> Login: {login} / Mot de Passe: {mdp}</p>
        

        <p><strong>Objet :</strong> Login: {utilisateur.login} / Mot de Passe: {utilisateur.mdp}</p>
      </div>

      <Exercice30 />
      <Exercice31 />
      <Exercice32 />
      <Exercice33 />
    </div>
  );
}

export default App;