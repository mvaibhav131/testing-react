import "./button.css";

export const Button = ({ variant, colorScheme, children, onClick }) => {
  return (
    <button
      data-testid="cButton"
      onClick={onClick}
      className={`btn ${colorScheme || "red"} ${variant || "ghost"}`}
    >
      {children}
    </button>
  );
};
