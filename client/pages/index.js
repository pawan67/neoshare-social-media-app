import Head from "next/head";
import Image from "next/image";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Homepage from "../components/Home/Homepage";
import UserPage from "../components/user/UserPage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      {/* <UserPage /> */}
      {/* <SignUp/> */}
      {/* <Login /> */}


      <Homepage />
    </div>
  );
}
