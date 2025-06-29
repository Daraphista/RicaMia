import localFont from "next/font/local";
import "./globals.css";

const garet = localFont({
  src: [
    {
      path: "../public/fonts/Garet-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Garet-Heavy.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

const brittany = localFont({
  src: "../public/fonts/BrittanySignature.ttf",
});

export const metadata = {
  title: "Rica Mia - Social Media Manager & Graphic Designer",
  description:
    "Half a decade of experience managing four social media pages simultaneously for various local government offices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${garet.className} antialiased bg-primary`}>
        {children}
      </body>
    </html>
  );
}
