import classes from "./NavigationButton.module.scss";
import { Link } from "react-router-dom";

function NavigationButton({ to, text, id, activeId, setActiveId }) {
  const buttonClass =
    id === activeId || activeId === -1
      ? `${classes.active} ${classes.button}`
      : `${classes.hidden} ${classes.button}`;

  const gClefIconClass =
    id !== activeId
      ? `${classes.gClefIcon} ${classes.transparent} `
      : `${classes.gClefIcon} ${classes.active}`;
  return (
    <div className={classes.buttonWrapper}>
      <div
        className={gClefIconClass}
        style={{
          maskImage: "url('/Icons/gclefIcon.png')",
          webkitMaskImage: "url('/Icons/gclefIcon.png')",
        }}
      />
      <div
        className={buttonClass}
        onMouseEnter={() => setActiveId(id)}
        onMouseLeave={() => setActiveId(-1)}
      >
        <Link to={to}>{text}</Link>
      </div>
    </div>
  );
}

export default NavigationButton;
