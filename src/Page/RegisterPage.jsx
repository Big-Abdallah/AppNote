import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Select, SelectItem, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../Schemas/RegisterSchema";
import { registerApi } from "../services/authServices";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/mainRegister.svg";
import img2 from "../assets/note.svg";
import styles from "../pageCss/RegisterPage.module.css";
export default function RegisterPage() {
  const [Isloding, setIsloding] = useState(false);
  const [errMsg, seterrMsg] = useState(false);
  const [successMsg, setsuccessMsg] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: "", // خليها age مش dateOfBirth
      phone: "",
    },
    mode: "all",
  });

  async function handleRegister(formdata) {
    setIsloding(true);

    const payload = {
      ...formdata,
      age: Number(formdata.age), // تحويل age من string لرقم
    };

    const data = await registerApi(payload);
    setIsloding(false);

    if (data.error) {
      seterrMsg(data.error);
      setsuccessMsg("");
    } else {
      seterrMsg("");
      setsuccessMsg(data.message || "Registered successfully ✅");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <div
        className={`min-h-screen bg-[var(--brand-light)]  flex items-center justify-center p-5 `}
      >
        {/* الكونتينر الأساسي */}
        <div
          className={`max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-[var(--brand-bg)]  rounded-3xl shadow-2xl overflow-hidden border-2 border-[var(--brand-border)] p-7 ${styles["scale-up-center"]}`}
        >
          {/* 👈 القسم الشمال */}
          <div className={`flex-1 flex flex-col items-center justify-center `}>
            {/* عنوان + لوجو صغير */}
            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-3xl font-bold">
                Note
                <span className="text-[var(--brand-green)]"> Ap</span>p
              </h1>
              <img src={img2} alt="logo" className="w-10 h-10 object-contain" />
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
              onSubmit={handleSubmit(handleRegister)}
            >
              <div className="w-full">
                <h1 className="text-3xl font-bold text-gray-800 pt-3 text-center">
                  Create
                  <span className="text-[var(--brand-green)]"> Account</span>
                </h1>
              </div>

              <Input
                isRequired
                {...register("name")}
                label="Name"
                variant="bordered"
                isInvalid={!!errors.name}
                errorMessage={errors.name?.message}
              />

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
              <Controller
                name="age"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    label="Age"
                    variant="bordered"
                    isInvalid={!!errors.age}
                    errorMessage={errors.age?.message}
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="tel"
                    variant="bordered"
                    placeholder="Phone Number"
                    isInvalid={!!errors.phone}
                    errorMessage={errors.phone?.message}
                  />
                )}
              />

              <Button
                isLoading={Isloding}
                className="w-full border-2 border-[var(--brand-green)] text-[var(--brand-green)] hover:bg-green-400 hover:text-white transition-colors duration-300"
                variant="bordered"
                type="submit"
              >
                Logout
              </Button>

              {errMsg && (
                <p className="text-sm bg-red-200 rounded-md p-2 text-red-800 text-center w-full">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="text-sm bg-green-200 rounded-md p-2 text-green-800 text-center w-full">
                  {successMsg}
                </p>
              )}

              <p className="text-gray-600 pb-1">
                Already have an account?{" "}
                <Link to={"/login"} className="text-green-400 font-medium">
                  Login
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
