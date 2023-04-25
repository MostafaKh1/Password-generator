"use client";

import React, { useEffect, useState } from "react";
import { characters } from "../data/characters";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(0);
  const [Password, setPassword] = useState<any>("");
  const [maxNumber, setMaxNumber] = useState<boolean>(false);
  const [isInputValid, setIsInputValid] = useState<boolean>(false);

  function GenThePassword(): void {
    // let password = [];
    // for (let i = 0; i <= passwordLength; i++) {
    //   const randomCharIndex = Math.floor(Math.random() * characters.length);
    //   const RandomChar = characters[randomCharIndex];
    //   password.push(RandomChar);
    // join("")
    // }
    const password: string = Array.from({ length: passwordLength }, () => {
      const randomIndex = Math.floor(Math.random() * characters.length);
      return characters[randomIndex];
    })
      .map((char: string) => char.toString())
      .join("");

    if (password.length <= 20) {
      setPassword(password);
    } else {
      setMaxNumber(true);
    }
    if (passwordLength <= 0) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  }

  useEffect(() => {
    setInputValue(passwordLength);
  }, [passwordLength]);
  useEffect(() => {
    if (maxNumber) {
      alert("the maximum Number is 20 characters");
      setMaxNumber(false);
    }
  }, [maxNumber]);

  function InputUpdateLength(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    if (value === "" && typeof value === "string") {
      setPasswordLength(0);
    } else {
      setPasswordLength(parseInt(value));
    }
  }

  const maxLengthValue: number = 2;

  const Button = "generator password";
  const p =
    "Fortify Your Online Security with SecurePass: The Most Advanced Random Password Generator for Unbreakable Protection";
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#111111] p-6 flex flex-col rounded-md gap-y-4">
        <p className="text-white max-w-[500px] text-lg text-center pb-4">{p}</p>
        <div className="flex justify-between bg-[#222222] py-2 px-[15px]">
          <div className="text-white    text-2xl">
            {Password.length <= 0 ? "Generate Password" : Password}
          </div>
          <CopyToClipboard text={Password}>
            <AiOutlineCopy className="w-10 h-10 cursor-pointer text-stone-300 hover:text-blue-400 ease-in-out duration-200" />
          </CopyToClipboard>
        </div>
        {isInputValid && passwordLength <= 0 ? (
          <p className="text-red-500">Please Select Numbers of Your Password</p>
        ) : null}

        <div className="flex items-center py-4 ">
          <p className="text-stone-300 text-xl mr-6">Numbers of Characters: </p>
          <input
            className={`w-16 h-10 rounded-md text-center   text-lg  border-red-500 shadow-lg focus:outline-blue-400`}
            type="number"
            onChange={InputUpdateLength}
            onClick={(
              e: React.FocusEvent<HTMLInputElement> &
                React.MouseEvent<HTMLInputElement>
            ) => e.target.select()}
            maxLength={maxLengthValue}
            value={inputValue}
          />
        </div>
        <button
          className="text-red-500 bg-[#222222] py-4 hover:text-gray-300 ease-in-out duration-200"
          onClick={GenThePassword}
        >
          {Button.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
