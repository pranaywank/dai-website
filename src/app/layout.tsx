import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Digital Agents — XR Studio | AR VR MR Development Company",
  description:
    "XR studio building AR, VR & MR training simulators, digital twins and 3D product experiences for manufacturing, defence, healthcare, automotive and retail.",
  keywords: ["XR studio", "AR VR development", "VR training simulator", "digital twin", "Unity Unreal development", "metaverse"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1F2A2E]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
