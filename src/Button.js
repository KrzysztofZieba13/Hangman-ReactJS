export default function Button({
  size = "24px",
  bgColor,
  color,
  marginTop = "32px",
  className,
  onClick,
  children,
}) {
  const btnStyle = { fontSize: size, marginTop };

  if (bgColor) btnStyle.backgroundColor = bgColor;
  if (color) btnStyle.color = color;

  return (
    <button
      className={`button ${className}`}
      style={btnStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
