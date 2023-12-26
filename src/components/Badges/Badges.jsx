import classnames from "classnames";
import "./badgeStyless.css";

export default function Badges({ children, badgeShape, variant }) {
  let badgeShapeClass;
  switch (badgeShape) {
    case "square":
      badgeShapeClass = "square";
      break;
    case "pill":
      badgeShapeClass = "pill";
      break;
    default:
      badgeShapeClass = "defaultShape";
      break;
  }

  let variantClass;
  switch (variant) {
    case "gray":
    case "red":
    case "yellow":
    case "green":
    case "blue":
    case "indigo":
    case "pink":
    case "purple":
      variantClass = variant;
      break;
    default:
      variantClass = "defaultVariant";
      break;
  }

  const allClasses = classnames(badgeShapeClass, variantClass);

  return (
    <div className={`badge ${allClasses}`}>
      <p className="badge-label">{children}</p>
    </div>
  );
}
