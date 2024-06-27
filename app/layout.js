import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import { ViewTransitions } from 'next-view-transitions'
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joonas Vaija",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
          <body className={inter.className}>  
            <ThemeProvider>
            <Nav/>
                {children}
            </ThemeProvider> 
          </body>
      </html>
    </ViewTransitions>
  );
}
