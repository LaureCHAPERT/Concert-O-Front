import './notFound.scss';

const NotFound = () => (
  <div className="error">
    <h2 className="error-title">Oups!!!</h2>
    <img className="error-img " border="0" src="http://www.reactiongifs.com/wp-content/uploads/2012/12/crappy-music.gif"/>
    <div className="error-div">
      <h3> Tu t'es perdu dans les backstages ? Clique <a href="/">ici </a>pour revenir à la page d'accueil  </h3>
    </div>
  </div>
);
export default NotFound;
