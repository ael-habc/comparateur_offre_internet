import { useState } from "react";
import "./App.css";
import logo from "./Assests/Logo Comp 1 (1).svg";
import router from "./Assests/router.png";
import router_mobile from "./Assests/router_mobile.png";
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" className="logo" />
      </header>
      <main className="main">
        <h1 className="title">
          Trouvez la meilleure box pour une connexion internet très haut débit
        </h1>
        <p className="title_text">Demande gratuite et sans engagement.</p>
        <form className="form">
          <div className="question">
            <div className="progress_bar">
              <div className="progress_bar_fill">14%</div>
            </div>
            <div className="questionBox">
              
              {/* <div className="question2">
                <p className="question_title2">
                  Quel est votre opérateur internet actuel ?
                </p>
                <div className="ops">
                  <div className="ops1 orange"></div>
                  <div className="ops1 bouygues"></div>
                  <div className="ops1 sfr"></div>
                  <div className="ops1 free"></div>
                  <div className="ops1 autre">Autre</div>
                </div>
              </div> */}
              {/* <div className="question2">
                <p className="question_title2">
                  Combien vous payez actuellement ?
                </p>
                <div className="ops2 pay">
                  <div className="ops1 autre">- 30 €</div>
                  <div className="ops1 autre">Entre 30 € et 45 €</div>
                  <div className="ops1 autre">+ 45 €</div>
                </div>
              </div> */}
              {/* <div className="question2">
                <p className="question_title2">
                  Quelle est votre adresse postale ?
                </p>
                <div className="hint">
                  Grâce à votre adresse postale nous pourrons vérifier si vous
                  êtes éligible à la fibre très haut débit.
                </div>
                <input
                  type="text"
                  placeholder="Fezensac, 32190 OCC, France"
                  className="adresse"
                />
              </div> */}
              {/* <div className="question2">
                <p className="question_title2">
                  Quelle est votre adresse email ?
                </p>
                <div className="hint">
                   Nous avons trouvé l'offre pouvant répondre à vos besoins !
                </div>
                <input
                  type="email"
                  placeholder="Jeandupont@gmail.com"
                  className="adresse"
                />
              </div> */}
              <div className="question2">
                <div className="hint hint2">
                  <strong>Dernière étape !</strong> Remplissez vos coordonnées
                  pour recevoir le détail de l'offre par téléphone gratuitement.
                </div>
                <input type="text" placeholder="Prénom" className="adresse2" />
                <input type="text" placeholder="nom" className="adresse2" />
                <input
                  type="text"
                  placeholder="numéro de téléphone mobile"
                  className="adresse2"
                />
                <div className="check">
                  <input type="checkbox" className="checkbox" id="confirm" />
                  <label for="confirm">
                    J'accepte les{" "}
                    <a
                      href="pages/Conditions_generale_dutilisation.html"
                      target="_blank"
                    >
                      Conditions Générales d'Utilisation {" "}
                    </a>
                    et la
                    <a
                      href="pages/Protection_des_donnees_personnelles.html"
                      target="_blank"
                    >
                      {' '}Politique de Confidentialité
                    </a>
                  </label>
                </div>
              </div>
              <div className="buttons">
                <button className="previous">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="next">Continuer</button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
