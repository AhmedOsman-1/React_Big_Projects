import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const buttonClass = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-8"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button onClick={onClick} className={buttonClass}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={buttonClass}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : onClick ? renderButton() : renderButton();
};

export default Button;
