"use client";

import { Footer } from "@/components/Footer";
import { NavigationManu } from "@/components/NavigationManu";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { SignupProvider } from "@/contexts/SignupContext";
import { PasswordRecoveryProvider } from "@/contexts/PasswordRecoveryContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useAuthPage } from "@/hooks/useAuthPage";
import "./globals.css";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isAuthPage } = useAuthPage();
  const { isDetecting } = useLanguage();

  // Show loading spinner while detecting location
  if (isDetecting) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {isAuthPage ? (
        <>{children}</>
      ) : (
        <div>
          <NavigationManu />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthPage } = useAuthPage();

  return (
    <html style={{scrollBehavior:'smooth'}} lang="en">
      <body className={`app ${!isAuthPage ? "bg-mainColor text-white" : "m-0 p-0"} font-onset lg:w-full`}>
        <LanguageProvider>
          <CurrencyProvider>
            <SignupProvider>
              <PasswordRecoveryProvider>
                <LayoutContent>{children}</LayoutContent>
              </PasswordRecoveryProvider>
            </SignupProvider>
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

