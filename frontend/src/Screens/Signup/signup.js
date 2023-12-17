"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo.png";
import splash from "../../assets/signupSplash.png";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useSignupMutation } from "../../redux/slices/usersApiSlice";
import { setCredentials } from "../../redux/slices/authSlice";
import styles from "./signup.module.css";
import { useRouter } from "next/navigation";

export default function Signup() {
	const router = useRouter();
	const dispatch = useDispatch();

	const { userInfo } = useSelector((state) => state.auth);
	const [signup, { isLoading }] = useSignupMutation();

	const [registerData, setRegisterData] = React.useState({
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
	});

	React.useEffect(() => {
		if (userInfo) {
			router.push("/home");
		}
	}, [userInfo]);

	const onChange = (event) => {
		setRegisterData({
			...registerData,
			[event.target.name]: event.target.value,
		});
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		for (let field of Object.keys(registerData)) {
			if (registerData[field] === "") {
				alert(`Missing field: ${field}`);
				return;
			}
		}

		if (registerData.password != registerData.confirmPassword) {
			alert("Passwords do not match");
			return;
		}
		try {
			const res = await signup({
				userName: registerData.username,
				email: registerData.email,
				password: registerData.password,
			}).unwrap();
			dispatch(setCredentials({ ...res }));
			navigate("/");
		} catch (error) {
			toast.error(err?.data.message || err.error);
		}

		console.log("User registered:", registerData);

		router.push("/home");
	};

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
				<Image className={styles.logo} src={logo} alt="app logo" priority />
				<h1 className={styles.title}>Sign-Up</h1>
				<div className={styles.field}>
					<label className={styles.label}>Email</label>
					<input
						onChange={onChange}
						value={registerData.email}
						className={styles.input}
						type="text"
						name="email"
						placeholder="example@domain.com"
					/>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>Username</label>
					<input
						onChange={onChange}
						value={registerData.username}
						className={styles.input}
						type="text"
						name="username"
						placeholder="user_name123"
					/>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>Password</label>
					<input
						onChange={onChange}
						value={registerData.password}
						className={styles.input}
						type="password"
						name="password"
						placeholder="***************"
					/>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>Confirm Password</label>
					<input
						onChange={onChange}
						value={registerData.confirmPassword}
						className={styles.input}
						type="password"
						name="confirmPassword"
						placeholder="***************"
					/>
				</div>
				<button onClick={onSubmit} className={styles.submit}>
					{" "}
					Submit{" "}
				</button>
				<span
					style={{
						marginTop: "20px",
						fontSize: ".75rem",
						color: "#FFFFFF",
					}}
				>
					{" "}
					Already Have An Account?{" "}
					<span
						style={{
							textDecorationLine: "underline",
							color: "#FFB703",
						}}
					>
						{" "}
						<Link href="/login"> Sign in </Link>{" "}
					</span>
				</span>
			</div>
		</div>
	);
}
