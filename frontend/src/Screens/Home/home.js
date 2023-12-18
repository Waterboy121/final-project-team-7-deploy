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
import { toast } from "react-toastify";
import {
	useLogoutMutation,
	useUpdateUserMutation,
} from "../../redux/slices/usersApiSlice";
import { useState, useEffect } from "react";
import {
	Container,
	InputGroup,
	FormControl,
	Button,
	ListGroup,
} from "react-bootstrap";
//import { logout } from "../../redux/slices/authSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { logout } from "../../redux/slices/authSlice";

export default function Home() {
	const [updateUser] = useUpdateUserMutation();
	const [track, setTrack] = useState([]);
	const { userInfo } = useSelector((state) => {
		console.log(state);
		return state.auth;
	});
	const router = useRouter();
	const dispatch = useDispatch();
	const [logoutApiCall, { isLoading }] = useLogoutMutation();

	async function addSongToPlaylist(songId) {
		try {
			console.log(songId);
			const res = await updateUser({
				songId: songId,
				_id: userInfo._id,
				email: userInfo.email,
				userName: userInfo.userName,
			}).unwrap();
		} catch (err) {
			console.log(err);
			toast.error(err?.data.message || err.error);
		}
		console.log("Song ID ${songId} added to the playlist for user ${userId}.");
	}

	//const [signin, { isLoading }] = useSigninMutation();

	React.useEffect(() => {
		console.log(track);
	}, [track]);

	const logoutHandler = async () => {
		await logoutApiCall()
			.then(() => {
				dispatch(logout());
				router.push("/");
			})
			.catch((err) => console.log(err));
	};

	const settingsHandler = async () => {
		router.push("/settings");
	};
	const search = async () => {
		let input = document.getElementById("search").value;
		console.log(input);
		await fetch("http://localhost:8000/api/users/search", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				searchInput: input,
			}),
		})
			.then((response) => response.json())
			.then((data) => setTrack(data))
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	function formatMillisecondsToMinutes(milliseconds) {
		const totalSeconds = Math.floor(milliseconds / 1000);
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;

		// Use String.padStart to ensure that single-digit seconds are formatted as "0X"
		const formattedSeconds = String(seconds).padStart(2, "0");

		return `${minutes}:${formattedSeconds} mins`;
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Image className={styles.logo} src={logo} alt="app logo" priority />
				<div
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
					<div style={{ fontWeight: "bold", color: "#FFFFFF" }}>
						{" "}
						{userInfo.userName ? userInfo.userName : "Username not found"}
					</div>
				</div>
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
						<p className={styles.option} onClick={settingsHandler}>
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
							<HiMagnifyingGlass
								size={"1.5em"}
								color="gray"
								onClick={search}
							/>{" "}
						</p>
						<input
							id="search"
							className={styles.search}
							placeholder="Search"
							onKeyPress={(e) => {
								if (e.key == "Enter") {
									search();
								}
							}}
						/>
					</div>
					<div className={styles.songs}>
						{track.map((track, i) => {
							return (
								console.log(track.name, track.id),
								(
									<div className={styles.song}>
										<Image
											className={styles.songImg}
											src={track.album.images[2].url}
											alt="app logo"
											priority
											width={70}
											height={70}
										/>
										{track.name} by {track.artists[0].name}
										{" — "}
										{track.album.name} (
										{formatMillisecondsToMinutes(track.duration_ms)})
										<button
											className={styles.button}
											size="sm"
											variant="outline-dark"
											onClick={function () {
												addSongToPlaylist(track.id);
												return track.id;
											}}
										>
											Add
										</button>
									</div>
								)
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
