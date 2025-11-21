import { Footer } from "@/components/Footer";
import { NavigationManu } from "@/components/NavigationManu";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{scrollBehavior:'smooth'}} lang="en">
      <body className="app bg-mainColor text-white font-onset lg:w-full">
        <LanguageProvider>
          <div className="tutor">
            <div>
              <NavigationManu />
              {children}
              <Footer />
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

