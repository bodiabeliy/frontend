"use client";

import { Footer } from "@/components/Footer";
import { NavigationManu } from "@/components/NavigationManu";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { SignupProvider } from "@/contexts/SignupContext";
import { PasswordRecoveryProvider } from "@/contexts/PasswordRecoveryContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import "./globals.css";
import { usePathname } from "next/navigation";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isDetecting } = useLanguage();
  
  // Pages without navigation and footer
  const authPages = [
    '/create-account',
    '/create-password',
    '/login',
    '/recovery-password',
    '/recovery-success',
    '/sms-confirmation',
    '/new-password',
    '/contact-info'
  ];
  
  const isAuthPage = authPages.some(page => pathname?.startsWith(page));

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
  return (
    <html style={{scrollBehavior:'smooth'}} lang="en">
      <body className={`app bg-mainColor text-white font-onset lg:w-full`}>
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

