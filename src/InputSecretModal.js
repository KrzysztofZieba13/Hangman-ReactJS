import { useKey } from "./useKey";
import Modal from "./Modal";
import Button from "./Button";

export default function InputSecretModal({
  newSecret,
  setNewSecret,
  inputSecretEl,
  onSubmit,
  onClose,
  setNewCategory,
  newCategory,
}) {
  useKey("enter", () => {
    if (document.activeElement === inputSecretEl.current) return;
    inputSecretEl.current.focus();
  });

  useKey("escape", () => {
    onClose();
    setNewSecret("");
    setNewCategory("");
  });

  return (
    <Modal title="Własne hasło" message="Wprowadź hasło" onClose={onClose}>
      <input
        type="text"
        className="input-own-secret"
        value={newSecret}
        onChange={(e) => setNewSecret(e.target.value)}
        ref={inputSecretEl}
        placeholder="hasło"
      />
      <input
        type="text"
        placeholder="kategoria"
        className="input-own-secret"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <Button
        bgColor={"#4c1d95"}
        color={"#fff"}
        size={"2.4rem"}
        onClick={onSubmit}
      >
        Stwórz
      </Button>
    </Modal>
  );
}
