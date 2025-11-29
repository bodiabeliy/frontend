"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PasswordRecoveryContextType {
  emailOrPhone: string;
  verificationCode: string;
  setEmailOrPhone: (emailOrPhone: string) => void;
  setVerificationCode: (code: string) => void;
  clearRecoveryData: () => void;
}

const PasswordRecoveryContext = createContext<PasswordRecoveryContextType | undefined>(undefined);

export const PasswordRecoveryProvider = ({ children }: { children: ReactNode }) => {
  const [emailOrPhone, setEmailOrPhoneState] = useState("");
  const [verificationCode, setVerificationCodeState] = useState("");

  const setEmailOrPhone = (value: string) => {
    setEmailOrPhoneState(value);
  };

  const setVerificationCode = (code: string) => {
    setVerificationCodeState(code);
  };

  const clearRecoveryData = () => {
    setEmailOrPhoneState("");
    setVerificationCodeState("");
  };

  return (
    <PasswordRecoveryContext.Provider
      value={{
        emailOrPhone,
        verificationCode,
        setEmailOrPhone,
        setVerificationCode,
        clearRecoveryData,
      }}
    >
      {children}
    </PasswordRecoveryContext.Provider>
  );
};

export const usePasswordRecovery = () => {
  const context = useContext(PasswordRecoveryContext);
  if (context === undefined) {
    throw new Error('usePasswordRecovery must be used within a PasswordRecoveryProvider');
  }
  return context;
};
