import { useState } from "react";
import Modal from "../Modal";
export default function Register() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
  };
  return (
    <>
      <div onClick={handleClick} className="cursor-pointer">
        เข้าสู่ระบบ
      </div>
      {isClick && <Modal>body</Modal>}
    </>
  );
}
