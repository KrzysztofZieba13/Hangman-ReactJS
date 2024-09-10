import Modal from "./Modal";
import Button from "./Button";

export default function WinModal({ onPlayAgain }) {
  return (
    <Modal
      onClose={onPlayAgain}
      title="Wygrana! 🎉"
      message="Gratulacje! Hasło zostało odgadnięte 😀"
    >
      <Button className="button-play-again" onClick={onPlayAgain}>
        Graj
      </Button>
    </Modal>
  );
}
