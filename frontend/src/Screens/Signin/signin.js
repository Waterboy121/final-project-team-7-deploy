"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useSigninMutation } from "../../redux/slices/usersApiSlice";
import { setCredentials } from "../../redux/slices/authSlice";
import splash from "../../assets/signinSplash.png";
import styles from "./signin.module.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Signin() {
	const router = useRouter();
	const dispatch = useDispatch();
	const [signin, { isLoading }] = useSigninMutation();

	const [loginData, setLoginData] = React.useState({
		email: "",
		password: "",
	});

	const userInfo = useSelector((state) => {
		return state.auth.userInfo; // Return the userInfo property
	});

	// React.useEffect(() => {
	// 	if (userInfo) {
	// 		router.push("/home");
	// 	}
	// }, [userInfo]);

	const onChange = (event) => {
		setLoginData({
			...loginData,
			[event.target.name]: event.target.value,
		});
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			const res = await signin({
				email: loginData.email,
				password: loginData.password,
			}).unwrap();
			dispatch(setCredentials({ ...res }));
			router.push("/home");
		} catch (err) {
			console.log("yo");
			console.log(err);
			toast.error(err?.data.message || err.error);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<Image className={styles.logo} src={logo} alt="app logo" priority />
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
				<p onClick={() => alert("too bad")} className={styles.forgot}>
					{" "}
					Forgot Password?{" "}
				</p>
				<button onClick={onSubmit} className={styles.submit}>
					{" "}
					Submit{" "}
				</button>
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
