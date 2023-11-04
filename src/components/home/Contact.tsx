import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Image from "next/image";
import { Nunito } from "next/font/google";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineWarning } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import { BiErrorAlt } from "react-icons/bi";
import Link from "next/link";
import { cn } from "@/lib/utils";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "200",
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email().required("Email is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, {
      excludeEmptyString: true,
      message: "Not a valid phone number",
    })
    .required("Phone is required"),
  message: yup.string().required("Message is required"),
});

export interface FormInputs {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const [msgStatus, setMsgStatus] = useState<boolean>();
  const [open, setOpen] = useState<boolean>(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [responseMsg, setResponseMsg] = useState<string>("");

  const submitForm = useCallback(
    (data: FormInputs) => {
      if (!executeRecaptcha) {
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        submitInquiry(gReCaptchaToken, data);
      });
    },
    [executeRecaptcha]
  );

  const submitInquiry = async (gReCaptchaToken: any, data: FormInputs) => {
    fetch("/api/mail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
        gRecaptchaToken: gReCaptchaToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        reset();
        setResponseMsg(res.message);
        if (res?.status === "Ok") {
          setMsgStatus(true);
          setOpen(true);
        } else {
          setMsgStatus(false);
          setOpen(false);
        }
      });
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 10000);
    }
  }, [open, setOpen]);

  return (
    <section id="section-contact" className="relative w-full">
      <div className="absolute top-0 w-full gradient_top h-[30%] text-2xl"></div>
      <Image
        src={"/contact.jpg"}
        alt={"contact"}
        fill
        className="object-cover -z-10"
      />
      <div className="max-w-[51.666rem] min-h-[963px] px-8 m-auto flex flex-col justify-center">
        <h2 className="text-center text-4xl text-white font-bold z-10">
          Contact Me
        </h2>
        <div className="text-center mb-10">
          <span className="mx-1 text-[#515356]">_____</span>
          <span className="mx-1 text-[#cf1f1f]">_____</span>
          <span className="mx-1 text-[#515356]">_____</span>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-3 gap-5 z-10"
          // onSubmit={handleSubmit(submitForm)}
          // onSubmit={handleSubmit(submitForm)}
          onSubmit={handleSubmit(submitForm)}
        >
          <div>
            <input
              type="text"
              {...register("fullName")}
              name="fullName"
              placeholder="Your Name"
              className="text-[#ffffff] focus:bg-[#251415] focus:bg-opacity-40 placeholder:text-[#ffffff33] border border-[#ffffff33] bg-transparent outline-none h-10 p-2 w-full"
            />
            {errors.fullName?.message ? (
              <span className="flex items-center bg-[#cf1f1f] opacity-60 p-2 text-[#ffffff] text-base">
                <AiOutlineWarning /> {errors.fullName?.message}
              </span>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              {...register("email")}
              name="email"
              placeholder="Your Email"
              className="text-[#ffffff] focus:bg-[#251415] focus:bg-opacity-40 placeholder:text-[#ffffff33] border border-[#ffffff33] bg-transparent outline-none h-10 p-2 w-full"
            />
            {errors.email?.message ? (
              <span className="flex items-center bg-[#cf1f1f] opacity-60 p-2 text-[#ffffff] text-base">
                <AiOutlineWarning /> {errors.email?.message}
              </span>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              {...register("phone")}
              name="phone"
              placeholder="Your Phone"
              className="text-[#ffffff] focus:bg-[#251415] focus:bg-opacity-40 placeholder:text-[#ffffff33] border border-[#ffffff33] bg-transparent outline-none h-10 p-2 w-full"
            />
            {errors.phone?.message ? (
              <span className="flex items-center bg-[#cf1f1f] opacity-60 p-2 text-[#ffffff] text-base">
                <AiOutlineWarning /> {errors.phone?.message}
              </span>
            ) : null}
          </div>

          <div className="md:col-span-3">
            <textarea
              {...register("message")}
              name="message"
              placeholder="Your Message"
              className="text-[#ffffff] placeholder:text-[#ffffff33] border border-[#ffffff33] bg-transparent outline-none h-40 p-2 focus:bg-[#251415] focus:bg-opacity-40 w-full"
            />
            {errors.message?.message ? (
              <span className="flex items-center bg-[#cf1f1f] opacity-60 p-2 text-[#ffffff] text-base">
                <AiOutlineWarning /> {errors.message?.message}
              </span>
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-[#cf1f1f] py-3 px-7 text-[#fff] text-sm font-bold cursor-pointer mx-auto md:col-start-2 hover:shadow-[2px_2px_20px_0px_rgba(207,31,31,0.5)]"
          >
            Send Message
          </button>
        </form>

        <h5 className="mt-14 text-center text-base text-[#ffffff] font-bold mb-2 z-10">
          Email Me
        </h5>

        <span
          className={`text-center text-base text-[#aaaaaa] font-normal ${nunito.variable} font-nunito z-10`}
        >
          <Link href={"mailto:support@alfredojdominguez.com"}>
            support@alfredojdominguez.com
          </Link>
        </span>

        {msgStatus === true ? (
          <div
            className={cn(
              "text-base flex flex-col items-center border border-[#96c346] w-full p-5 mx-auto bg-[#96c3461a] mt-10 transition-opacity delay-150 duration-500 z-10",
              {
                "opacity-100  ease-in": open,
              },
              {
                "opacity-0  ease-out": !open,
              }
            )}
          >
            <span className="bg-[#96c3461a] border border-[#5c8858] w-10 h-10 rounded-full flex flex-col items-center justify-evenly p-5">
              <span>
                <FcCheckmark />
              </span>
            </span>
            <span className="my-5 text-[#96c346]">{responseMsg}</span>
          </div>
        ) : msgStatus === false ? (
          <div
            className={cn(
              "text-base flex flex-col items-center border border-[#e7505a] w-full p-5 mx-auto bg-[#e7505a1a] mt-10 transition-opacity delay-150 duration-500 z-10",
              {
                "opacity-100  ease-in": open,
              },
              {
                "opacity-0  ease-out": !open,
              }
            )}
          >
            <span className="bg-[#96c3461a] border border-[#e7505a] w-10 h-10 rounded-full flex flex-col items-center justify-evenly p-5">
              <span>
                <BiErrorAlt />
              </span>
            </span>
            <span className="my-5 text-[#e7505a]">{responseMsg}</span>
          </div>
        ) : null}
      </div>
      <div className="absolute bottom-0 w-full gradient_bottom h-[30%]  text-2xl "></div>
    </section>
  );
};

export default Contact;
