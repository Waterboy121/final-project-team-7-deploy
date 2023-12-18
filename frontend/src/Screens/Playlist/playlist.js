"use client";
import styles from './playlist.module.css'
import Image from "next/image";
import logo from "../../assets/logo.png";
import profilePic from "../../assets/profilePic.png";
import { FaBeer } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosPlayCircle, IoIosSettings, IoIosExit } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { useFetchPlaylistMutation, useLogoutMutation } from "../../redux/slices/usersApiSlice";
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

export default function Playlist() {
	const [tracks, setTracks] = useState([]);
    const [fetchPlaylist, { isLoading }] = useFetchPlaylistMutation();
	const [logoutApiCall] = useLogoutMutation();
	const dispatch = useDispatch();
		const router = useRouter();

		useEffect(() => {
			console.log("TRACKS:", tracks)
		}, [tracks])

const { userInfo } = useSelector((state) => {
        console.log(state);
        return state.auth;
    });
   
    const logoutHandler = async () => {
        await logoutApiCall()
            .then(() => {
				router.push("/");
                dispatch(logout());
            })
            .catch((err) => console.log(err));
    };

    const playlist = userInfo?.playlist || [];

    useEffect(() => {
    const fetchDataForInputs = async () => {
      try {
        const results = await fetchPlaylist({playlist: userInfo.playlist}).unwrap()
        setTracks([...results])
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataForInputs();
  }, []);

function formatMillisecondsToMinutes(milliseconds) {
		const totalSeconds = Math.floor(milliseconds / 1000);
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;

		// Use String.padStart to ensure that single-digit seconds are formatted as "0X"
		const formattedSeconds = String(seconds).padStart(2, "0");

		return `${minutes}:${formattedSeconds} mins`;
	}
/*

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



    
    

    


const processArray = async () => {
    for (const element of playlist) {
    await getTracks(element);
    }};

    const getTracks = async (element) => {
    console.log(element);

  try {
    const response = await fetch("http://localhost:8000/api/users/playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: element, // Assuming 'element' is the identifier you want to send
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};




    const getTracks = async () => {
		let input = document.getElementById("id").value;
		console.log(input);
		await fetch("http://localhost:8000/api/users/playlist", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: input,
			}),
		})
			.then((response) => response.json())
			.then((data) => {return data})
			.catch((error) => {
				console.error("Error:", error);
			});
	};*/











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
						{userInfo?.userName}
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
                        <div className={styles.songs}>
						{tracks.map((track, i) => {
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
		</div>
    )
}