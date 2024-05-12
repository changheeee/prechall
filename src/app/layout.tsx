import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Nav from "./_components/Nav";
import LeftMenu from "./_components/LeftMenu";


export const metadata: Metadata = {
  title: "프레첼",
  description: "프레첼",
};
type Props = { children: ReactNode, modal: ReactNode };

export default function RootLayout({
  children, modal
}: Props) {

  const defaultLayout = 'w-full pt-[25px] px-[50px]'

  return (
    <html lang="en">
      <body>
        {/* 상단 네비게이션 */}
        <header>
          <Nav />
        </header>
        <div className="flex">
          {/* 좌측 메뉴 */}
          <section>
            <LeftMenu />
          </section>
          <section className={defaultLayout}>
            {children}
          </section>
          {modal}
        </div>
      </body>
    </html>
  );
}
