import { useState } from 'react';

function ChampSaisie({ texte, type = "text", auChangement }) {
  return (
    <div style={{ marginBottom: '5px' }}>
      <label>{texte} : </label>
      <input 
        type={type} 
        onChange={(e) => auChangement(type === "checkbox" ? e.target.checked : e.target.value)} 
      />
    </div>
  );
}

function Exercice33() {
  const [age, setAge] = useState("");
  const [adresse, setAdresse] = useState("");
  const [permis, setPermis] = useState(false);
  const [marie, setMarie] = useState(false);
  const [nom, setNom] = useState("");

  const valide = age !== "" && adresse !== "" && nom !== "";

  return (
    <div style={{ 
      border: '5px solid', 
      borderColor: valide ? 'green' : 'red', 
      padding: '10px', 
      marginTop: '20px' 
    }}>
      <h3>Exercice 33</h3>
      
      <ChampSaisie texte="Nom" auChangement={(v) => setNom(v)} />
      <ChampSaisie texte="Prénom" auChangement={(v) => setPrénom(v)} />
      <ChampSaisie texte="Âge" type="number" auChangement={(v) => setAge(v)} />
      <ChampSaisie texte="Adresse" auChangement={(v) => setAdresse(v)} />
      <ChampSaisie texte="Permis" type="checkbox" auChangement={(v) => setPermis(v)} />

    </div>
  );
}

export default Exercice33;