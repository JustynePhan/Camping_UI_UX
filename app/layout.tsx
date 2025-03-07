import Navbar from './components/Navbar';
import Footer from './components/footer';

import './globals.css'
import type { Metadata } from "next";


const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
       <main className="relative overflow-hidden">
         {children}
       </main>
        <Footer/>
      </body>
    </html>
  )
}
