"use client"

import { useCallback, useState } from "react";
import { ActionButton } from "./buttons/ActionButton";
import Image from "next/image";
import FormImage from "../../public/support-girl.png"
import FormFigure from "../../public/FormFigure.png"

const Form = () => {
    
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [fullname, setFullName] = useState<string>("")

  const [notEmpty, setNotEmpty] = useState<boolean>(false)
  const [notValid, setNotValid] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const validateEmail = (email:string) => {
    const regex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let isValid =regex.test(email)    
    return isValid
  };

  const EmailSender = useCallback(async() => {
    try {
      if (notValid) {
        setIsLoading(true)
        // toast(`Відправлення...`)

        // await api.post(
        //     `/send`,
        //     {
        //       email,
        //       fullname,
        //       message
        //     },
        //   );
      }

      setIsLoading(false)
      setEmail("")
      setFullName("")
      setMessage("")

    } catch (error) {
      console.log(error);
    }
  }, [email, notEmpty, notValid, fullname, message, isLoading])

  const SendEmail = useCallback((e:any)  => {
    setEmail(e.target.value)
    setNotValid(validateEmail(e.target.value))
    if (e.target.value == "") {
      setNotEmpty(true)
    }
    else setNotEmpty(false)
  },[email, notEmpty, notValid])

  const SendFullName = useCallback((e:any)  => {
    setFullName(e.target.value)
  },[fullname])

  const SendMessage = useCallback((e:any)  => {
    setMessage(e.target.value)
  },[message])
  

  return (
    <section id="form" className="relative w-full m-auto sm:mt-10 lg:mt-20 sm:mb-10 lg:mb-20 sm:px-3 lg:px-0 ">
    <Image className="absolute sm:left-[-30%] lg:left-[-60px] sm:top-[512px] lg:top-[0px]" src={FormFigure} alt={""} /> 
      <div className="max-w-[1300px] mx-auto">
        <h2 className="sm:text-3xl lg:text-5xl text-secondaryColor text-center font-extrabold sm:mb-6 lg:mb-8">
          Залишайтеся з нами на зв'язку
        </h2>
        <p className="sm:text-xl lg:text-3xl text-center">Поставте запитання або внесіть пропозицію, наш менеджер дасть відповідь найближчим часом</p>
        <div className="formWrapper relative flex sm:flex-col lg:flex-row items-start justify-between sm:gap-8 lg:gap-12 sm:mt-8 lg:mt-12">
          {/* Image Section */}
          <div className="sm:w-full lg:w-[45%] flex justify-center lg:justify-start">
            <div className="relative sm:w-full sm:max-w-[400px] lg:w-full lg:max-w-[500px] rounded-[30px] overflow-hidden">
              <Image 
                className="sm:hidden lg:flex w-full h-auto rounded-[30px]" 
                src={FormImage} 
                alt="Support" 
                width={500}
                height={600}
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="sm:w-full lg:w-[65%]">
            <div className="flex flex-col sm:gap-5 lg:gap-6">
            <div className="flex sm:flex-col lg:flex-row gap-5">
            {/* Name Input */}
              <div className="flex flex-col sm:gap-2 lg:gap-3 w-full">
                <label className="sm:text-base lg:text-lg font-medium">
                  Введіть своє ім'я
                </label>
                <div className="flex items-center bg-formFieldColor backdrop-blur-sm rounded-[8px] border-2 border-formBorderColor sm:p-3 lg:p-4">
                  <svg className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-3" fill="#6A7282" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <input 
                    className="flex-1 bg-formFieldColor outline-none sm:text-base lg:text-lg text-formTextColor" 
                    type="text" 
                    placeholder="Ілля Забарний" 
                    onChange={(e) => SendFullName(e)} 
                    value={fullname}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex flex-col sm:gap-2 lg:gap-3  w-full">
                <label className="sm:text-base lg:text-lg font-medium">
                  Введіть електронну пошту
                </label>
                <div className={`flex items-center bg-formFieldColor backdrop-blur-sm rounded-[8px] sm:p-3 lg:p-4 border-2 ${notEmpty || !notValid ? 'border-error' : 'border-formBorderColor'}`}>
                  <svg className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-3" fill="#6A7282" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <input 
                    className="flex-1 bg-formFieldColor outline-none sm:text-base lg:text-lg text-formTextColor" 
                    type="email" 
                    placeholder="Zababormut@gmail.com" 
                    onChange={(e) => SendEmail(e)} 
                    value={email}
                  />
                </div>
                {notEmpty && <p className="text-error text-sm -mt-1">Поле пошти не повинно бути порожнім!</p>}
                {!notValid && !notEmpty && <p className="text-error text-sm -mt-1">Введіть коректну email адресу!</p>}
              </div>
            </div>

              {/* Message Textarea */}
              <div className="flex flex-col sm:gap-2 lg:gap-3">
                <label className="sm:text-base lg:text-lg font-medium">
                  Введіть повідомлення
                </label>
                <div className="relative">
                  <div className="flex items-start bg-formFieldColor backdrop-blur-sm rounded-[8px] sm:p-3 lg:p-4 border-2 border-formBorderColor">
                    <svg className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-3 mt-1 flex-shrink-0" fill="#6A7282" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                    </svg>
                    <textarea 
                      className="flex-1 bg-formFieldColor outline-none sm:text-base lg:text-lg text-formTextColor resize-none sm:min-h-[150px] lg:min-h-[250px]" 
                      placeholder="Введіть повідомлення..." 
                      onChange={(e) => SendMessage(e)} 
                      value={message}
                      maxLength={2500}
                    />
                  </div>
                  <p className="text-sm text-formTextColor absolute bottom-3 right-4">{message.length}/2500</p>
                </div>
              </div>

             <div className="flex gap-10 align-center">
                 {/* Submit Button */}
              <ActionButton 
                onClick={() => EmailSender()} 
                className={`${notEmpty || !notValid || message==="" || fullname==="" ? "bg-white/10 cursor-not-allowed" : "bg-thirdBtns hover:shadow-lg"} w-full rounded-[30px] font-bold sm:text-lg lg:text-xl sm:py-3 lg:py-4 text-formTextColortransition-all sm:mt-2 lg:mt-3`}
                text={"Надіслати лист"} 
                disabled={notEmpty || !notValid || message==="" || fullname===""}
              />

              {/* Checkbox */}
              <div className="flex items-start sm:gap-3 lg:gap-4 sm:mt-1 lg:mt-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="sm:w-5 sm:h-5 lg:w-8 lg:h-8 sm:mt-0.5 lg:mt-1 accent-secondaryColor cursor-pointer flex-shrink-0"
                  defaultChecked
                />
                <label htmlFor="terms" className="text-white sm:text-sm lg:text-base leading-relaxed cursor-pointer">
                  Я бажаю отримувати сповіщення про запуск платформи Azamaza
                </label>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;