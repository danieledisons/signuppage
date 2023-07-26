import Image from "next/image";
import Link from "next/link";
import image from "../public/images/image.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.login}>
        {/* <div className={styles.logo}>NFT Market</div> */}
        <div className={styles.container}>
          <h1 className={styles.header}>NFT Access</h1>
          <p className={styles.secondaryText}>
            Please fill your detail to access your account.
          </p>
          <label for="email" className={styles.label}>
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            size="30"
            placeholder=" Email Address"
            required
            className={styles.input}
          ></input>
          <br />
          <label for="password" className={styles.label}>
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
            size="30"
            placeholder=" Password"
            required
            className={styles.input}
          ></input>
          <br />
          <div className={styles.btmpart}>
            <div className={styles.rmberme}>
              <input type="checkbox" id="remember-me"></input>
              <label for="remember-me">Remember Me</label>
            </div>
            <div className={styles.fgtpwd}>
              <Link href="/">Forgot Password?</Link>
            </div>
          </div>
          <br />
          <div className={styles.btngroup}>
            <button className={styles.mybutton1}>Sign In</button>
            {/* <br /> */}
            <button className={styles.mybutton}>Sign In with Google</button>
            {/* <br /> */}
            <p className={styles.signupbtn}>
              Don’t have an account?{" "}
              <Link href="/">
                <span>Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.startupimg}>
        {/* <img src={image} alt="Startup" /> */}
        <Image
          // src="/../public/images/image.png"
          src={image}
          // sizes="(max-width:1200) 400"
          width={736}
          height={856}
          alt="image of three cartoons"
        />
      </div>
    </main>
  );
}
