import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joonas Vaija",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className={inter.className}>  
            <ThemeProvider defaultTheme="dark" attribute="class">
            <div className="loadingScreen">
              <h1>Joonas Vaija</h1>
            </div>
            <Nav/>
                {children}
            </ThemeProvider> 
          </body>
      </html>
  );
}
