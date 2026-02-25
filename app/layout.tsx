import type { Metadata } from "next";
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus AI — Next-Generation AI Platform",
  description:
    "Nexus AI delivers cutting-edge artificial intelligence solutions that transform how businesses operate, create, and grow.",
  keywords: ["AI", "artificial intelligence", "machine learning", "Nexus AI"],
  openGraph: {
    title: "Nexus AI — Next-Generation AI Platform",
    description: "Cutting-edge AI solutions that transform businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-[Space_Grotesk,Inter,system-ui,sans-serif]">
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
