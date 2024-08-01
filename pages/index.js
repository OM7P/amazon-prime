import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarPage from "./navbar";
import MiddleCom from "./middlecom";
import NewComponent from "./newcom";
import ForthCom from "./forthcom";
import FooterCom from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <NavbarPage/>
    <MiddleCom/>
    <NewComponent/>
    <ForthCom/>
    <FooterCom/>
    </>
  );
}
