"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo.png";
import splash from "../../assets/signinSplash.png";
import styles from "./signin.module.css";
import { useRouter } from 'next/navigation'

export default function Signin() {
	const router = useRouter()

	const [loginData, setLoginData] = React.useState({
		email: "",
		password: "",
	});

	const onChange = (event) => {
		setLoginData({
			...loginData,
			[event.target.name]: event.target.value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log("User submitted:", loginData);
		router.push('/home')
	};

	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<Image
					className={styles.logo}
					src={logo}
					alt="app logo"
					priority
				/>
				<h1 className={styles.title}>Sign-In</h1>
				<div className={styles.field}>
					<label className={styles.label}>Email</label>
					<input
						onChange={onChange}
						value={loginData.email}
						className={styles.input}
						type="text"
						name="email"
						placeholder="example@domain.com"
					/>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>Password</label>
					<input
						onChange={onChange}
						value={loginData.password}
						className={styles.input}
						type="password"
						name="password"
						placeholder="***************"
					/>
				</div>
				<p onClick={() => alert("too bad")} className={styles.forgot}> Forgot Password? </p>
				<button onClick={onSubmit} className={styles.submit}> Submit </button>
				<span style={{ marginTop: "20px", fontSize: ".75rem" }}>
					{" "}
					Don't Have An Account?{" "}
					<span
						style={{
							textDecorationLine: "underline",
							color: "#FFB703",
						}}
					>
						{" "}
						<Link href="/signup"> Create an Account </Link>{" "}
					</span>
				</span>
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
