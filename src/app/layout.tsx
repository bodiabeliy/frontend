import { Footer } from "@/components/Footer";
import { NavigationManu } from "@/components/NavigationManu";
import "./globals.css";



export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{scrollBehavior:'smooth'}} lang="en">
       
      <body className="app bg-mainColor text-white font-onset lg:w-full">
      <div className="tutor ">
          <div>
          <NavigationManu />
          {children}
          {/* <Footer /> */}
          </div>
        </div>
        
      </body>
    </html>
  );
}
