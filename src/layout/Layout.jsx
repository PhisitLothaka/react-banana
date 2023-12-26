import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header.jsx";
import useModal from "../hooks/useModal.js";
import Modal from "../components/Modal.jsx";

export default function Layout() {
  const { formModal } = useModal();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  return (
    <>
      {formModal.form && <Modal>{formModal.form}</Modal>}
      <Header />
      <Outlet />
    </>
  );
}
