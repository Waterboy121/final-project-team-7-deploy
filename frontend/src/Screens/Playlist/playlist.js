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
import { useFetchPlaylistMutation } from "../../redux/slices/usersApiSlice";
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

export default function Playlist() {
    const [fetchPlaylist, { isLoading }] = useFetchPlaylistMutation();

const { userInfo } = useSelector((state) => {
        console.log(state);
        return state.auth;
    });
   
    const logoutHandler = async () => {
        await logoutApiCall()
            .then(() => {
                dispatch(logout());
                router.push("/");
            })
            .catch((err) => console.log(err));
    };

    const [data, setData] = useState([]);
    const playlist = userInfo?.playlist || [];

    useEffect(() => {
    const fetchDataForInputs = async () => {
      try {
        const results = await fetchPlaylist({playlist: userInfo.playlist}).unwrap()
        dispatch(setData([...results.data]))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataForInputs();
  }, [playlist]);

    
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
                        <Container>
							<ListGroup variant="flush">
								<ul>
                        {data.map((item, index) => (
                        <li key={index}>{/* Render your data here, adjust accordingly */}</li>
                        ))}
                    </ul>
							</ListGroup>
						</Container>
						












					</div>
				</div>
			</div>
		</div>
    )
}