import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BackgroundLines } from "./ui/background-lines";
import "./globals.css";
import About from "./Components/About/About";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  {children}
   <Header/>
   <About/>
   <Contact/>
   <Footer/>
      </body>
    </html>
  );
}
