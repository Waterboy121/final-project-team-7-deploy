import styles from "./signin.module.css";
import Image from "next/image";
import splash from "../../assets/signinSplash.png";
import logo from "../../assets/logo.png";

export default function Signin() {
	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<Image
					className={styles.logo}
					src={logo}
					alt="app logo"
					priority
				/>
				<h1 className={styles.title} >Sign-In</h1>
				<div className={styles.field}>
					<label className={styles.label}>
						Email
					</label>
                    <input className={styles.input} type="text" name="email" placeholder="example@domain.com"/>
				</div>
                <div className={styles.field}>
					<label className={styles.label}>
						Password
					</label>
                    <input className={styles.input} type="text" name="password" placeholder="***************"/>
				</div>
                <p className={styles.forgot}> Forgot Password? </p>
                <button className={styles.submit}> Submit </button>
                <span style={{marginTop: "20px", fontSize: ".75rem"}}> Don't Have An Account?  <span style={{textDecorationLine: "underline", color: "#FFB703"}}> Create an Account</span></span>
			</div>
			<div className={styles.splash}>
				<Image
					className={styles.splashImg}
					src={splash}
					alt="signup logo"
					priority
				/>
			</div>
		</div>
	);
}
