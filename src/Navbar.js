import { List, Heart } from "@phosphor-icons/react";

export default function Navbar({ missed, onActive, category }) {
  return (
    <div className="navbar">
      <div>
        <button className="navbar-menu-btn" onClick={onActive}>
          <List color="#fff" size={32} />
        </button>
        <p>Kategoria: {category}</p>
      </div>

      <div className="navbar-health">
        <HealthStatusBar missed={missed} />
        <Heart size={32} weight="fill" color="#f472b6" />
      </div>
    </div>
  );
}

function HealthStatusBar({ missed }) {
  return (
    <div className="health-status-bar">
      <div style={{ width: `${16 - missed * 2}rem` }}></div>
    </div>
  );
}
