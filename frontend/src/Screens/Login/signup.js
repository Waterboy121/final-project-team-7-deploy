import styles from './signup.module.css'
import Image from 'next/image'
import splash from "../../assets/signupSplash.png";
import logo from "../../assets/logo.png";

export default function Signup() {
    return (
        <div className={styles.container}>
			<div className={styles.splash}>
				<Image
					className={styles.splashImg}
					src={splash}
					alt="signup logo"
					priority
				/>
			</div>
			<div className={styles.form}>
				<Image
					className={styles.logo}
					src={logo}
					alt="app logo"
					priority
				/>
				<h1 className={styles.title} >Sign-Up</h1>
				<div className={styles.field}>
					<label className={styles.label}>
						Email
					</label>
                    <input className={styles.input} type="text" name="email" placeholder="example@domain.com"/>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>
						Username
					</label>
                    <input className={styles.input} type="text" name="username" placeholder="user_name123"/>
				</div>
                <div className={styles.field}>
					<label className={styles.label}>
						Password
					</label>
                    <input className={styles.input} type="text" name="password" placeholder="***************"/>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>
						Confirm Password
					</label>
                    <input className={styles.input} type="text" name="confirm" placeholder="***************"/>
				</div>
                <button className={styles.submit}> Submit </button>
                <span style={{marginTop: "20px", fontSize: ".75rem"}}> Already Have An Account?  <span style={{textDecorationLine: "underline", color: "#FFB703"}}> Sign-in</span></span>
			</div>
		</div>
    )
}