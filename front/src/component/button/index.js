import "./index.css";

export function Button({ buttonName, style, link, onClick }) {
  const handleLinkClick = (link) => () => {
    if (onClick) onClick();
    window.location.assign(link);
  };

  return (
    <button
      onClick={handleLinkClick(link)}
      className="button"
      style={style}
      type="button"
    >
      {buttonName}
    </button>
  );
}
