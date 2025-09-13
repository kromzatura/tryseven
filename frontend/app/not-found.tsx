import type { Metadata } from "next";

import Custom404 from "@/components/404";
import Footer2 from "@/components/footer/footer-2";
import Navbar1 from "@/components/header/navbar-1";


export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundPage() {
  return (
    <>
      <Navbar1 />
      <Custom404 />
      <Footer2 />
    </>
  );
}
