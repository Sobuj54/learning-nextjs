import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "First Next app",
  description: "Nextjs application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>hi</nav>
        {children}
      </body>
      <footer>bye</footer>
    </html>
  );
}
