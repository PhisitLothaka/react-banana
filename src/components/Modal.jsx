import { useSearchParams } from "react-router-dom";
import useModal from "../hooks/useModal";
import useClickOutside from "../hooks/useClickOutside";

function Modal({ children }) {
  const { dispatch } = useModal();
  const [searchParams] = useSearchParams();
  const dropRef = useClickOutside(() =>
    searchParams.get("biding") ? () => {} : dispatch({ type: "close" })
  );
  return (
    <div className="w-full h-full  flex justify-center items-center  z-50 fixed ">
      <div
        className="w-fit h-fit bg-white shadow-lg border-none rounded-md absolute z-30 animate-modal-appear"
        ref={dropRef}
      >
        {children}
      </div>
      <div className="w-full h-full bg-[#d3d3d3] opacity-60"></div>
    </div>
  );
}

export default Modal;
