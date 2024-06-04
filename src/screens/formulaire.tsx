import React from 'react';
import '../index.css';

const Formulaire: React.FC =  () => {
  return (
    <div> 
      <h1>Formulaire de Mise à jour de votre CV</h1>
    <p> Remplissez ce formulaire avec vos informations les plus récentes.</p>
    <form id="cvForm" noValidate>
      <fieldset className="box">
        
        <label htmlFor="email">Changer votre Email: <input id="email" name="email" type="email"   /></label>
        <label htmlFor="new-number">Changer votre numéro de téléphone:<input id="new-number" name="new-number"   /></label>
        <label htmlFor="profile-picture">Importer une nouvelle photo de profil: <input id="profile-picture" type="file" name="file" /></label>
        <label htmlFor="age">Changer votre âge (années): <input id="age" type="number" name="age" /></label>
      </fieldset>
      
      
      <fieldset className="box">
        <label htmlFor="New-certification">Ajouter une nouvelle Certification: 
          <select id="New-certification" name="New-certification">
          	<option value="">(selectionner une option)</option>
            <option value="1">Coding</option>
            <option value="2">CyberSecurity</option>
            <option value="3">Networking</option>
            <option value="4">Project Mangamenent</option>
            <option value="5">Autre</option>
          </select>
        </label>
        <label htmlFor="desc">(Autre) donner une description:
          <textarea id="desc" name="desc" placeholder="Cloud (AWS, Azure)..."></textarea>
        </label>
      </fieldset>

      <fieldset >
        <legend>Avez-vous apprécié la plateforme ?</legend>
        <label htmlFor="Yes"><input id="Yes" type="radio" name="radioBut" className="inline" checked /> Oui</label>
        <label htmlFor="No"><input id="No" type="radio" name="radioBut" className="inline" /> Non</label>
        <label htmlFor="Maybe"><input id="Maybe" type="radio" name="radioBut" className="inline" /> Elle peut être améliorée</label>
      </fieldset>

      <label htmlFor="confirmation">
        <input className="inline" id="confirmation" type="checkbox" required name="confirmation" /> Je confirme tous mes changements
      </label>
      <input type="submit" value="Submit" />

    </form>
    </div>
  );
}

export default Formulaire;