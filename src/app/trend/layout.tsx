import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] });

type Props = { children: ReactNode; modal: ReactNode }

export const metadata: Metadata = {
  title: "프레첼",
  description: "트렌드",
};

export default function TrendLayout({ children, modal }: Props) {

  return (
    <div>
      {children}
    </div>
  );
}
