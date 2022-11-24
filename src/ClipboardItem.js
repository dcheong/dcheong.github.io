import { MdContentCopy } from "react-icons/md";
import { useCallback } from "react";
import toast from "react-hot-toast";

export default function ClipboardItem(props) {
  const onClick = useCallback(() => {
    navigator.clipboard.writeText(props.text);
    toast("Copied!");
  });
  return (
    <div onClick={onClick} className="subitem">
      {props.label}{" "}
      <div className="icon">
        <MdContentCopy />
      </div>
    </div>
  );
}
