import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-sky-300 p-4 text-white gap-2 flex justify-between">
          <div>
          <Link className="hover:text-orange-300  sm:mr-16" href="/">Home</Link>
          </div>
          <div>
          <Link className="hover:text-orange-300 mx-2" href="/About">About</Link>
          <Link className="hover:text-orange-300 mx-2" href="/Page1">Page1</Link>
          <Link className="hover:text-orange-300 mx-2" href="/Page2">Page2</Link>
          <Link className="hover:text-orange-300 mx-2" href="/Page3">Page3</Link>
          <Link className="hover:text-orange-300 mx-2" href="/Page4">Page4</Link>
          <Link className="hover:text-orange-300 mx-2" href="/Page5">Page5</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
