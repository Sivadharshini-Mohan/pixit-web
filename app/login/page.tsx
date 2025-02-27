"use client";
import Image from "next/image";
import styles from "./page.module.css";
import google from "./../../public/assets/images/Social media logo.svg";
import { loginWithGoogle } from "@/service/auth.service";
import { useEffect } from "react";

const Login = () => {

  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if(token){
      localStorage.setItem("token", token);
      window.location.href = "/projects";
    }
  },[])
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardContainer}>
          <h1 className={styles.cardHeading}>Hello Ideator 👋</h1>
          <h2 className={styles.cardSubHeading}>Welcome to Pix-it</h2>
          <p className={styles.cardContent}>
            Built by Ideators, for Ideators - our in-house solution that converts Figma designs
            into pixel-perfect, code-ready components, eliminating the design-to-development gap that we've all experienced in our projects.
          </p>
          <button className={styles.googleButton} onClick={loginWithGoogle}>
            <Image src={google} alt="google icon" />
            <p className={styles.googleTxt}>Continue with Ideas2it Google Account</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
