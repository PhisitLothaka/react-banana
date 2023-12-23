import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        navigate("/");
      }}
    >
      <img
        src="	https://www.bnn.in.th/_nuxt/img/site-logo.9ca15bd.svg"
        alt="logo"
      />
    </div>
  );
}
