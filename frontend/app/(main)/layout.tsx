import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";

import Banner from "@/components/blocks/banner";
import Banner5 from "@/components/blocks/banner/banner5";
import { DisableDraftMode } from "@/components/disable-draft-mode";
import Footer2 from "@/components/footer/footer-2";
import Navbar1 from "@/components/header/navbar-1";
import { fetchSanityBanner } from "@/sanity/lib/fetch";
import { SanityLive } from "@/sanity/lib/live";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const banner = await fetchSanityBanner();

  return (
    <>
      <Navbar1 />
      {banner && banner.length > 0 && (
        <Banner data={banner[0]} component={Banner5} bannerId="banner5" />
      )}
      <main>{children}</main>
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
      <Footer2 />
    </>
  );
}
