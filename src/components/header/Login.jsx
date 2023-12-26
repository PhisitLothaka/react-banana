import { useSelector } from "react-redux";
import useModal from "../../hooks/useModal";
import { FiUser } from "react-icons/fi";

export default function Login() {
  const { user } = useSelector((store) => store.user);
  const { dispatch: modal } = useModal();

  return (
    <>
      {user ? (
        <div onClick={() => {}} className="cursor-pointer flex">
          <FiUser /> {user?.firstName + " " + user?.lastName}
        </div>
      ) : (
        <div
          onClick={() => {
            modal({ type: "login" });
          }}
          className="cursor-pointer flex gap-1 items-baseline hover:text-[#FFDD00]"
        >
          <FiUser />
          เข้าสู่ระบบ
        </div>
      )}
    </>
  );
}
