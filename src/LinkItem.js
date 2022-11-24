import { MdIosShare } from "react-icons/md";
import { useCallback } from "react";

export default function LinkItem(props) {
  const onClick = useCallback(() => {
    window.open(props.link);
  });
  return (
    <div onClick={onClick} className="subitem">
      {props.label}{" "}
      <div className="icon">
        <MdIosShare />
      </div>
    </div>
  );
}
