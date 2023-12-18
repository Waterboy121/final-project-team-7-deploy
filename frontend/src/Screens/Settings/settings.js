"use client";
import styles from "./settings.module.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
import profilePic from "../../assets/profilePic.png";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosPlayCircle, IoIosSettings, IoIosExit } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/slices/usersApiSlice";

//import { logout } from "../../redux/slices/authSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { logout, home } from "../../redux/slices/authSlice";

export default function Settings() {
	const { userInfo } = useSelector((state) => {
		console.log(state);
		return state.auth;
	});
	const router = useRouter();
	const dispatch = useDispatch();
	const [logoutApiCall, { isLoading }] = useLogoutMutation();

	const logoutHandler = async () => {
		await logoutApiCall()
			.then(() => {
				dispatch(logout());
				router.push("/");
			})
			.catch((err) => console.log(err));
	};

	const homeHandler = async () => {
		router.push("/home");
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Image className={styles.logo} src={logo} alt="app logo" priority />
				<span
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "row",
						gap: "20px",
					}}
				>
					<Image
						className={styles.profile}
						src={profilePic}
						alt="profile pic"
						priority
					/>
					<p style={{ fontWeight: "bold", color: "#FFFFFF" }}>
						{" "}
						{userInfo?.userName ? userInfo.userName : "Username not found"}
					</p>
				</span>
			</div>
			<div className={styles.body}>
				<div className={styles.toolbar}>
					<div className={styles.toolbarGroup1}>
						<h3 className={styles.optionHeader}> Menu </h3>
						<p className={styles.option} onClick={homeHandler}>
							<HiOutlineHome /> Home
						</p>
						<p className={styles.option}>
							{" "}
							<IoIosPlayCircle /> Playlists{" "}
						</p>
					</div>
					<div className={styles.toolbarGroup2}>
						<h3 className={styles.optionHeader}> Other </h3>
						<p className={styles.option}>
							{" "}
							<IoIosSettings /> Settings{" "}
						</p>
						<p
							onClick={logoutHandler}
							className={styles.option}
							style={{ color: "#FF0000" }}
						>
							{" "}
							<IoIosExit /> Log out
						</p>
					</div>
				</div>
				<div className={styles.main}>
					<div className={styles.settingsPane}>
						<Image
							className={styles.settingsPicture}
							src={profilePic}
							alt="profile pic"
							priority
						/>
						<div className={styles.settingsText}>
							<p style={{ gridColumn: "1", gridRow: "1" }}>Username: </p>
							<p style={{ gridColumn: "2", gridRow: "1" }}>
								{userInfo.userName}
							</p>
							<p style={{ gridColumn: "1", gridRow: "2" }}>Email:</p>
							<p style={{ gridColumn: "2", gridRow: "2" }}>{userInfo.email}</p>
							<label
								htmlFor="password"
								style={{ gridColumn: "1", gridRow: "3" }}
							>
								Password:
							</label>
							<input
								type="password"
								id="password"
								placeholder="Enter Password"
								//value={password}
								onChange={(e) => setPassword(e.target.value)}
								style={{ gridColumn: "2", gridRow: "3", fontSize: "1.5rem" }}
							/>
							<label
								htmlFor="newPassword"
								style={{ gridColumn: "1", gridRow: "4" }}
							>
								New Password:
							</label>
							<input
								type="password"
								id="newPassword"
								placeholder="New password"
								//value={confirmPassword}
								onChange={(e) => setNewPassword(e.target.value)}
								style={{ gridColumn: "2", gridRow: "4", fontSize: "1.5rem" }}
							/>
							<button
								className={styles.settingsButton}
								style={{ gridColumn: "2", gridRow: "5" }}
								onClick={() => alert("Write it down next time")}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
