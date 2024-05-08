import { TopMenu } from "@/components/TopMenu";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Project Apollo Coffee",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div id="root">
          <div className="content">
            <Header />
            <TopMenu />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}