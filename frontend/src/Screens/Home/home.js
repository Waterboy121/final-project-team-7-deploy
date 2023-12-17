"use client";
import styles from "./home.module.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
import profilePic from "../../assets/profilePic.png";
import { FaBeer } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosPlayCircle, IoIosSettings, IoIosExit } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/slices/usersApiSlice";
//import { logout } from "../../redux/slices/authSlice";
import { useRouter } from "next/navigation";

export default function Home() {
	const { userInfo } = useSelector((state) => {
		console.log(state);
		return state.auth;
	});
	const router = useRouter();
	const dispatch = useDispatch();
	const [logout, { isLoading }] = useLogoutMutation();
	//const [signin, { isLoading }] = useSigninMutation();

	const logoutHandler = async () => {
		// try {
		// 	//await logout().unwrap();
		// 	await dispatch(logout()).unwrap();
		// 	router.push("/");
		// 	console.log("kill me");
		// } catch (err) {
		// 	console.log(err);
		// }
		await logout()
			.then(() => {
				router.push("/");
			})
			.catch((err) => console.log(err));
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
						{userInfo.userName}
					</p>
				</span>
			</div>
			<div className={styles.body}>
				<div className={styles.toolbar}>
					<div className={styles.toolbarGroup1}>
						<h3 className={styles.optionHeader}> Menu </h3>
						<p className={styles.option}>
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
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<p className={styles.icon}>
							{" "}
							<HiMagnifyingGlass size={"1.5em"} color="gray" />{" "}
						</p>
						<input className={styles.search} placeholder="Search" />
					</div>
				</div>
			</div>
		</div>
	);
}
