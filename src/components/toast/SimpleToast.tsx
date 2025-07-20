import { useState } from "react";
import "./SimpleToast.css";

type Props = {
  title: string;
  buttonText: string;
  onClick: () => void;
};

const SimpleToast = ({buttonText, title, onClick}: Props) => {
  const [show, setShow] = useState(false);

  const showToast = () => {
    debugger;
    if(onClick) {
      onClick();
    }
    setShow(true);
    setTimeout(() => setShow(false), 500); // auto-hide after 3s
  };

  return (
    <>
      <button onClick={showToast}>{buttonText}</button>
      <div className={`toast ${show ? "show" : ""}`}>
        {title}
      </div>
    </>
  );
};

export default SimpleToast;
