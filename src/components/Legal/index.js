import './legal.scss';

const Legal = () => (
  <div className="legal">
    <h2>Mentions Légales</h2>
    <div className="legal-div">
      <h3>Editeur</h3>
      <p>Concert'O</p>
      <p>4 rue, de la Musique</p>
      <p>24170 St Pompont</p>
      <p>Téléphone : +33 (0)5 55 66 77 88</p>
      <p>Directeur de la publication : Laure, Présidente</p>
      <p>Co-directeur de la publication : Jérémy, Secrétaire général</p>
    </div>
    <div className="legal-div">
      <h3>Hébergement</h3>
      <p>Akaza</p>
      <p>160,avenue du château</p>
      <p>20167 Villanova</p>
    </div>
    <div className="legal-div">
      <h3>Crédit</h3>
      <p>Images du site libres de droits</p>
    </div>
    <div className="legal-div">
      <h3>Objectif et qualité des contenus</h3>
      <p>Ce site a pour objectif d’informer le grand public. Les administrateurs de Concert'O s’efforcent de fournir une information de qualité et vérifiée, toutefois si une information semble inexacte ou contient une erreur typographique, vous pouvez nous le signaler sur la page <a href="/contact">Contact</a>.</p>
    </div>
  </div>
);
export default Legal;
