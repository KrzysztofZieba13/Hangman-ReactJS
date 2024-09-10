import { useState } from "react";
import { X } from "@phosphor-icons/react";

const xStyle = {
  position: "absolute",
  right: "10px",
  top: "20px",
  cursor: "pointer",
};

const goBackBtnStyle = {
  position: "absolute",
  left: "20px",
  top: "20px",
  marginTop: 0,
  cursor: "pointer",
};

export default function Menu({
  isActive,
  onClose,
  onInputOwnSecret,
  hangmanData,
  onSetRandom,
}) {
  const [isSelectCategory, setIsSelectCategory] = useState(false);

  return (
    <div className="menu" style={isActive ? { left: 0 } : {}}>
      <X size={32} style={xStyle} onClick={onClose} />
      {!isSelectCategory ? (
        <>
          <div onClick={() => onInputOwnSecret(true)}>Własne hasło</div>
          <div onClick={() => setIsSelectCategory(true)}>Wybierz kategorię</div>
        </>
      ) : (
        <>
          {Object.keys(hangmanData.kategorie).map((category) => (
            <div
              key={category}
              onClick={() => {
                onSetRandom(category);
                setIsSelectCategory(false);
              }}
            >
              {category}
            </div>
          ))}
          <div
            style={goBackBtnStyle}
            onClick={() => setIsSelectCategory(false)}
          >
            &larr; Wróć
          </div>
        </>
      )}
    </div>
  );
}
