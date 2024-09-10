import Modal from "./Modal";
import Button from "./Button";

export default function DefeatModal({ secret, onPlayAgain }) {
  return (
    <Modal
      onClose={onPlayAgain}
      title="Przegrana 😢"
      message={`Poprawne hasło: ${secret}`}
    >
      <Button className="button-play-again" onClick={onPlayAgain}>
        Graj
      </Button>
    </Modal>
  );
}
