import ButtonForm from "../../components/accessory/ButtonForm";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/userSlice";
import useModal from "../../hooks/useModal";

export default function LoginForm() {
  const { dispatch: modal } = useModal();
  const { register, handleSubmit } = useForm();
  const { loading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    console.log("🚀 ~ file: LoginForm.jsx:15 ~ handleLogin ~ data:", data);
    dispatch(login(data));
    modal({ type: "close" });
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 bg-white  p-10 min-w-[400px] justify-center items-center rounded-md"
        onSubmit={handleSubmit(handleLogin)}
      >
        <img
          src="https://www.bnn.in.th/_nuxt/img/banana-logo.49e2019.svg"
          alt="logo"
        />
        <p className="font-light">Welcome to BNN Banana Online Store</p>
        <p>เข้าสู่ระบบ</p>

        <input
          {...register("email")}
          placeholder="อีเมล"
          className="border-b-2 px-2 focus:outline-none focus:border-b-2 focus:border-b-[#fd0] font-light w-full"
        />
        <input
          type="password"
          {...register("password")}
          placeholder="รหัสผ่าน"
          className="border-b-2 px-2 focus:outline-none focus:border-b-2 focus:border-b-[#fd0] font-light w-full"
        />

        <p className="font-light text-xs text-center">
          เนื่องจากทางเว็บไซต์มีปัญหาระหว่างการเชื่อมต่อบัญชี Facebook ลูกค้า{" "}
          <br /> ที่ทำการสั่งซื้อผ่านบัญชี Facebook
          สามารถติดตามสถานะการสั่งซื้อสินค้า <br /> ได้ที่ แผนกลูกค้าออนไลน์
          02-017-7788 ทางทีมงาน ฯ จะเร่งแก้ปัญหาโดย <br />
          เร็วที่สุด
        </p>
        <ButtonForm
          color={"bg-[#FFDD00]"}
          width={"w-full"}
          text={"เข้าสู่ระบบ"}
        />
      </form>
    </div>
  );
}
