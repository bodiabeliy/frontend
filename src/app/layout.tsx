"use client";

import { Footer } from "@/components/Footer";
import { NavigationManu } from "@/components/NavigationManu";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
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

  return (
    <html style={{scrollBehavior:'smooth'}} lang="en">
      <body className={`app ${!isAuthPage?"bg-mainColor":""} text-white font-onset lg:w-full`}>
        <LanguageProvider>
          {isAuthPage ? (
            <>{children}</>
          ) : (
              <div>
                <NavigationManu />
                {children}
                <Footer />
              </div>
          )}
        </LanguageProvider>
      </body>
    </html>
  );
}

