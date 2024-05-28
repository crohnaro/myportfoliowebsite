'use client'

import styles from "./page.module.css";
import Header from "../components/Header/header";
import "./globals.css";

import HeroPage from "./pages/HeroPage";



export default function Home() {

  
  return (
    <main>
      <HeroPage />
    </main>
  );
}
