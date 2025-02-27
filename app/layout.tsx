"use client";
import "./globals.css";
import StyledJsxRegistry from "./registry";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "./../public/assets/images/pix-it-logo.svg";
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  return (
    <html lang="en">
      <body className="layout">
        {!isLoginPage ? (
          <StyledJsxRegistry>
            <header className="layout__header">
              <Image src={logo} alt="logo" />
            </header>
            <main className="layout__main">
              <div className="mainCard">{children}</div>
            </main>
          </StyledJsxRegistry>
        ) : (
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
        )}
      </body>
    </html>
  );
}
