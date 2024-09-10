import { useRef, useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";
import Navbar from "./Navbar";
import GamePanel from "./GamePanel";
import SecretWord from "./SecretWord";
import Keyboard from "./Keyboard";
import Menu from "./Menu";
import DefeatModal from "./DefeatModal";
import WinModal from "./WinModal";
import InputSecretModal from "./InputSecretModal";

const hangmanData = {
  kategorie: {
    zwierzęta: [
      "ornitorhynchus",
      "aksolotl",
      "długoszpar",
      "fenek",
      "szczurzyca",
      "niedźwiedzica",
      "dziobak",
      "mantokora",
      "mrówkojad",
      "koati",
    ],
    rośliny: [
      "strelicja",
      "nepenthes",
      "wawrzyniec",
      "dzbanecznik",
      "rojniki",
      "rzodkiewnik",
      "welwiczja",
      "tasmannia",
      "rozchodnik",
      "narcyzowce",
    ],
    kraje: [
      "Madagaskar",
      "Kazachstan",
      "Uzbekistan",
      "Turkmenistan",
      "Papua-Nowa Gwinea",
      "Sri Lanka",
      "Kirgistan",
      "Tadżykistan",
      "Surinam",
      "Mikronezja",
    ],
    filmy: [
      "Antychryst",
      "Wyspa Tajemnic",
      "Requiem dla snu",
      "Drabina Jakubowa",
      "Pamiętnik",
      "Władca Pierścieni",
      "Nietykalni",
      "Młody Frankenstein",
      "Siedem samurajów",
      "Człowiek-słoń",
    ],
    technologia: [
      "superkomputer",
      "kwantowa kryptografia",
      "nanotechnologia",
      "sztuczna inteligencja",
      "cyberbezpieczeństwo",
      "elektromagnetyzm",
      "fotowoltaika",
      "biomimetyka",
      "synteza molekularna",
      "robot chirurgiczny",
    ],
  },
};

const maxMistakes = 8;

function App() {
  const [secret, setSecret] = useLocalStorageState(
    "secret",
    "CZEKOLADA MLECZNA"
  );
  const [newSecret, setNewSecret] = useState("");
  const [category, setCategory] = useLocalStorageState("category", "jedzenie");
  const [newCategory, setNewCategory] = useState("");
  const [guess, setGuess] = useLocalStorageState("guess", []);
  const [missed, setMissed] = useState(0);
  const [isDefeated, setIsDefeated] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isInputSecret, setIsInputSecret] = useState(false);
  const inputSecretEl = useRef(null);

  function handleGuess(letter) {
    setGuess((letters) => [...letters, letter]);

    if (!secret.includes(letter)) {
      setMissed((missed) => missed + 1);
      if (missed + 1 === maxMistakes) return setIsDefeated(true);
    } else {
      const allGuessed = secret
        .split("")
        .filter((char) => char !== " ")
        .every((char) => guess.includes(char) || char === letter);

      if (allGuessed) {
        setIsWin(true);
      }
    }
  }

  function handlePlayAgain() {
    setIsDefeated(false);
    setIsWin(false);
    setGuess([]);
    setMissed(0);
  }

  function handleActivateMenu() {
    setIsMenuActive((is) => !is);
  }

  function handleSetSecret() {
    setSecret(newSecret.toUpperCase());
    setCategory(newCategory);
    setIsMenuActive(false);
    setIsInputSecret(false);
    setNewSecret("");
    setNewCategory("");
    setGuess([]);
  }

  function handleSetRandomSecret(category) {
    const secret =
      hangmanData.kategorie[category][
        Math.floor(Math.random() * hangmanData.kategorie[category].length)
      ];

    setSecret(secret.toUpperCase());
    setCategory(category);
    setIsMenuActive(false);
    setGuess([]);
  }

  return (
    <>
      {isDefeated && (
        <DefeatModal secret={secret} onPlayAgain={handlePlayAgain} />
      )}
      {isWin && <WinModal onPlayAgain={handlePlayAgain} />}

      {isInputSecret && (
        <InputSecretModal
          onClose={() => setIsInputSecret(false)}
          newSecret={newSecret}
          setNewSecret={setNewSecret}
          inputSecretEl={inputSecretEl}
          onSubmit={handleSetSecret}
          setNewCategory={setNewCategory}
          newCategory={newCategory}
        />
      )}

      <div className="app">
        <Menu
          isActive={isMenuActive}
          onClose={handleActivateMenu}
          onInputOwnSecret={setIsInputSecret}
          hangmanData={hangmanData}
          onSetRandom={handleSetRandomSecret}
        />
        <Navbar
          missed={missed}
          category={category}
          onActive={handleActivateMenu}
        />
        <GamePanel>
          <SecretWord secret={secret} guess={guess} />
          <Keyboard onGuess={handleGuess} guess={guess} />
        </GamePanel>
      </div>
    </>
  );
}

export default App;
