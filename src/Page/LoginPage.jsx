import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loginschema } from "../Schemas/LoginSchema";
import { LoginApi } from "../services/authServices";
import styles from "../pageCss/RegisterPage.module.css";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import img1 from "../assets/mainLogin.svg";
import img2 from "../assets/note.svg";
export default function LoginPage() {
  const [Isloding, setIsloding] = useState(false);
  const [errMsg, seterrMsg] = useState(false);
  const navigate = useNavigate();
  const {  setIsLoggedIn }=useContext(AuthContext)

  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(Loginschema),

    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

async function handleLogin(formdata) {
  seterrMsg("");
  setIsloding(true);
  const data = await LoginApi(formdata);
  setIsloding(false);

  console.log("Login response:", data);

  if (data.msg === "done") {
    localStorage.setItem("token", data.token);
    setIsLoggedIn(true);
    navigate("/");
  } else {
    seterrMsg(data.error || data.msg || "Login failed ❌");
  }
}
  

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

    return (
      <>
        <div className="min-h-screen bg-[var(--brand-light)]  flex items-center justify-center p-5 ">
          {/* الكونتينر الأساسي */}
          <div className={`max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-[var(--brand-bg)]  rounded-3xl shadow-2xl overflow-hidden border-2 border-[var(--brand-border)] p-7 ${styles["scale-up-center"]}`}>
            {/* 👈 القسم الشمال */}
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* عنوان + لوجو صغير */}
              <div className="flex items-center gap-3 mb-6">
                <h1 className="text-3xl font-bold">
                  Note
                  <span className="text-[var(--brand-green)]"> Ap</span>p
                </h1>
                <img
                  src={img2}
                  alt="logo"
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* صورة كبيرة تحت */}
              <img
                src={img1}
                alt="illustration"
                className="w-full max-w-md object-contain"
              />
            </div>

            {/* اليمين: الفورم */}
            <div className="flex items-center justify-center  px-8 lg:border-2 lg:border-[var(--brand-border)] rounded-xl">
              <Form
                className="flex flex-col gap-6 w-full max-w-md text-center"
                onSubmit={handleSubmit(handleLogin)}
              >
                <div className="w-full">
                  <h1 className="text-3xl font-bold text-gray-800 pt-3 text-center">
                    Log<span className="text-[var(--brand-green)]">in</span>
                  </h1>
                </div>

                <Input
                  type="email"
                  {...register("email")}
                  label="Email"
                  variant="bordered"
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                />

                <Input
                  label="Password"
                  variant="bordered"
                  {...register("password")}
                  type={isVisible ? "text" : "password"}
                  isInvalid={!!errors.password}
                  errorMessage={errors.password?.message}
                  endContent={
                    <button
                      type="button"
                      onClick={toggleVisibility}
                      className="flex items-center justify-center w-8 h-8 rounded-full 
                  hover:bg-green-100 transition-colors duration-200"
                    >
                      {isVisible ? (
                        <EyeOff className="w-5 h-5 text-green-500" />
                      ) : (
                        <Eye className="w-5 h-5 text-green-500" />
                      )}
                    </button>
                  }
                />
                <Button
                  isLoading={Isloding}
                  className="w-full border-2 border-[var(--brand-green)] text-[var(--brand-green)] hover:bg-green-400 hover:text-white transition-colors duration-300"
                  variant="bordered"
                  type="submit"
                >
                  Login
                </Button>

                {errMsg && (
                  <p className="text-sm bg-red-200 rounded-md p-2 text-red-800 text-center w-full">
                    {errMsg}
                  </p>
                )}

                <p className="text-gray-600">
                  Don’t have an account?{" "}
                  <Link to={"/register"} className="text-green-400 font-medium">
                    Sign Up
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
}
