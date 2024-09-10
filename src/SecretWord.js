export default function SecretWord({ secret, guess }) {
  return (
    <div className="secret">
      {secret.split(" ").map((word, wordIndex) => (
        <Word key={wordIndex} word={word} guess={guess} />
      ))}
    </div>
  );
}

function Word({ word, guess }) {
  return (
    <div className="secret-word">
      {word
        .split("")
        .map((letter, letterIndex) =>
          guess.includes(letter) ? (
            <Letter key={letterIndex} letter={letter} />
          ) : (
            <EmptyLetter key={letterIndex} />
          )
        )}
    </div>
  );
}

function Letter({ letter }) {
  return <span className="letter">{letter}</span>;
}

function EmptyLetter() {
  return <span className="empty-letter">-</span>;
}
