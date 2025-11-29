"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SignupData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
  nationality: string;
}

interface SignupContextType {
  signupData: SignupData;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setContactInfo: (firstName: string, lastName: string, phone: string, nationality: string) => void;
  clearSignupData: () => void;
}

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export const SignupProvider = ({ children }: { children: ReactNode }) => {
  const [signupData, setSignupData] = useState<SignupData>({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone: '',
    nationality: '',
  });

  const setEmail = (email: string) => {
    setSignupData((prev) => ({ ...prev, email }));
  };

  const setPassword = (password: string) => {
    setSignupData((prev) => ({ ...prev, password }));
  };

  const setContactInfo = (firstName: string, lastName: string, phone: string, nationality: string) => {
    setSignupData((prev) => ({
      ...prev,
      first_name: firstName,
      last_name: lastName,
      phone,
      nationality,
    }));
  };

  const clearSignupData = () => {
    setSignupData({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      phone: '',
      nationality: '',
    });
  };

  return (
    <SignupContext.Provider
      value={{ signupData, setEmail, setPassword, setContactInfo, clearSignupData }}
    >
      {children}
    </SignupContext.Provider>
  );
};

export const useSignup = () => {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error('useSignup must be used within a SignupProvider');
  }
  return context;
};
