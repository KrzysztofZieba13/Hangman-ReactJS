const letter_array = [
  "a",
  "ą",
  "b",
  "c",
  "ć",
  "d",
  "e",
  "ę",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "ł",
  "m",
  "n",
  "ń",
  "o",
  "ó",
  "p",
  "q",
  "r",
  "s",
  "ś",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ź",
  "ż",
];

export default function Keyboard({ onGuess, guess }) {
  return (
    <div className="keyboard">
      {letter_array.map((letter, i) =>
        guess.includes(letter.toUpperCase()) ? (
          <div className="selected" key={i}>
            {letter.toUpperCase()}
          </div>
        ) : (
          <div key={i} onClick={() => onGuess(letter.toUpperCase())}>
            {letter.toUpperCase()}
          </div>
        )
      )}
    </div>
  );
}
