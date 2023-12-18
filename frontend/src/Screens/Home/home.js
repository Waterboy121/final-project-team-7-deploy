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

export default function Home() {
  const [updateUser] = useUpdateUserMutation();

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
  const [track, setTrack] = useState([
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
            },
            href: "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
            id: "3TVXtAsR1Inumwj472S9r4",
            name: "Drake",
            type: "artist",
            uri: "spotify:artist:3TVXtAsR1Inumwj472S9r4",
          },
        ],
        available_markets: [
          "AR",
          "AU",
          "AT",
          "BE",
          "BO",
          "BR",
          "BG",
          "CA",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DK",
          "DO",
          "DE",
          "EC",
          "EE",
          "SV",
          "FI",
          "FR",
          "GR",
          "GT",
          "HN",
          "HK",
          "HU",
          "IS",
          "IE",
          "IT",
          "LV",
          "LT",
          "LU",
          "MY",
          "MT",
          "MX",
          "NL",
          "NZ",
          "NI",
          "NO",
          "PA",
          "PY",
          "PE",
          "PH",
          "PL",
          "PT",
          "SG",
          "SK",
          "ES",
          "SE",
          "CH",
          "TW",
          "TR",
          "UY",
          "US",
          "GB",
          "AD",
          "LI",
          "MC",
          "ID",
          "JP",
          "TH",
          "VN",
          "RO",
          "IL",
          "ZA",
          "SA",
          "AE",
          "BH",
          "QA",
          "OM",
          "KW",
          "EG",
          "MA",
          "DZ",
          "TN",
          "LB",
          "JO",
          "PS",
          "IN",
          "BY",
          "KZ",
          "MD",
          "UA",
          "AL",
          "BA",
          "HR",
          "ME",
          "MK",
          "RS",
          "SI",
          "KR",
          "BD",
          "PK",
          "LK",
          "GH",
          "KE",
          "NG",
          "TZ",
          "UG",
          "AG",
          "AM",
          "BS",
          "BB",
          "BZ",
          "BT",
          "BW",
          "BF",
          "CV",
          "CW",
          "DM",
          "FJ",
          "GM",
          "GE",
          "GD",
          "GW",
          "GY",
          "HT",
          "JM",
          "KI",
          "LS",
          "LR",
          "MW",
          "MV",
          "ML",
          "MH",
          "FM",
          "NA",
          "NR",
          "NE",
          "PW",
          "PG",
          "WS",
          "SM",
          "ST",
          "SN",
          "SC",
          "SL",
          "SB",
          "KN",
          "LC",
          "VC",
          "SR",
          "TL",
          "TO",
          "TT",
          "TV",
          "VU",
          "AZ",
          "BN",
          "BI",
          "KH",
          "CM",
          "TD",
          "KM",
          "GQ",
          "SZ",
          "GA",
          "GN",
          "KG",
          "LA",
          "MO",
          "MR",
          "MN",
          "NP",
          "RW",
          "TG",
          "UZ",
          "ZW",
          "BJ",
          "MG",
          "MU",
          "MZ",
          "AO",
          "CI",
          "DJ",
          "ZM",
          "CD",
          "CG",
          "IQ",
          "LY",
          "TJ",
          "VE",
          "ET",
          "XK",
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/6X1x82kppWZmDzlXXK3y3q",
        },
        href: "https://api.spotify.com/v1/albums/6X1x82kppWZmDzlXXK3y3q",
        id: "6X1x82kppWZmDzlXXK3y3q",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02c7ea04a9b455e3f68ef82550",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851c7ea04a9b455e3f68ef82550",
            width: 64,
          },
        ],
        name: "Take Care (Deluxe)",
        release_date: "2011-11-15",
        release_date_precision: "day",
        total_tracks: 19,
        type: "album",
        uri: "spotify:album:6X1x82kppWZmDzlXXK3y3q",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
          },
          href: "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
          id: "3TVXtAsR1Inumwj472S9r4",
          name: "Drake",
          type: "artist",
          uri: "spotify:artist:3TVXtAsR1Inumwj472S9r4",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H",
          },
          href: "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H",
          id: "5pKCCKE2ajJHZ9KAiaK11H",
          name: "Rihanna",
          type: "artist",
          uri: "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H",
        },
      ],
      available_markets: [
        "AR",
        "AU",
        "AT",
        "BE",
        "BO",
        "BR",
        "BG",
        "CA",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DK",
        "DO",
        "DE",
        "EC",
        "EE",
        "SV",
        "FI",
        "FR",
        "GR",
        "GT",
        "HN",
        "HK",
        "HU",
        "IS",
        "IE",
        "IT",
        "LV",
        "LT",
        "LU",
        "MY",
        "MT",
        "MX",
        "NL",
        "NZ",
        "NI",
        "NO",
        "PA",
        "PY",
        "PE",
        "PH",
        "PL",
        "PT",
        "SG",
        "SK",
        "ES",
        "SE",
        "CH",
        "TW",
        "TR",
        "UY",
        "US",
        "GB",
        "AD",
        "LI",
        "MC",
        "ID",
        "JP",
        "TH",
        "VN",
        "RO",
        "IL",
        "ZA",
        "SA",
        "AE",
        "BH",
        "QA",
        "OM",
        "KW",
        "EG",
        "MA",
        "DZ",
        "TN",
        "LB",
        "JO",
        "PS",
        "IN",
        "BY",
        "KZ",
        "MD",
        "UA",
        "AL",
        "BA",
        "HR",
        "ME",
        "MK",
        "RS",
        "SI",
        "KR",
        "BD",
        "PK",
        "LK",
        "GH",
        "KE",
        "NG",
        "TZ",
        "UG",
        "AG",
        "AM",
        "BS",
        "BB",
        "BZ",
        "BT",
        "BW",
        "BF",
        "CV",
        "CW",
        "DM",
        "FJ",
        "GM",
        "GE",
        "GD",
        "GW",
        "GY",
        "HT",
        "JM",
        "KI",
        "LS",
        "LR",
        "MW",
        "MV",
        "ML",
        "MH",
        "FM",
        "NA",
        "NR",
        "NE",
        "PW",
        "PG",
        "WS",
        "SM",
        "ST",
        "SN",
        "SC",
        "SL",
        "SB",
        "KN",
        "LC",
        "VC",
        "SR",
        "TL",
        "TO",
        "TT",
        "TV",
        "VU",
        "AZ",
        "BN",
        "BI",
        "KH",
        "CM",
        "TD",
        "KM",
        "GQ",
        "SZ",
        "GA",
        "GN",
        "KG",
        "LA",
        "MO",
        "MR",
        "MN",
        "NP",
        "RW",
        "TG",
        "UZ",
        "ZW",
        "BJ",
        "MG",
        "MU",
        "MZ",
        "AO",
        "CI",
        "DJ",
        "ZM",
        "CD",
        "CG",
        "IQ",
        "LY",
        "TJ",
        "VE",
        "ET",
        "XK",
      ],
      disc_number: 1,
      duration_ms: 277386,
      explicit: true,
      external_ids: {
        isrc: "USCM51100547",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/124NFj84ppZ5pAxTuVQYCQ",
      },
      href: "https://api.spotify.com/v1/tracks/124NFj84ppZ5pAxTuVQYCQ",
      id: "124NFj84ppZ5pAxTuVQYCQ",
      is_local: false,
      name: "Take Care",
      popularity: 79,
      preview_url: null,
      track_number: 5,
      type: "track",
      uri: "spotify:track:124NFj84ppZ5pAxTuVQYCQ",
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
            },
            href: "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
            id: "3TVXtAsR1Inumwj472S9r4",
            name: "Drake",
            type: "artist",
            uri: "spotify:artist:3TVXtAsR1Inumwj472S9r4",
          },
        ],
        available_markets: [
          "AR",
          "AU",
          "AT",
          "BE",
          "BO",
          "BR",
          "BG",
          "CA",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DK",
          "DO",
          "DE",
          "EC",
          "EE",
          "SV",
          "FI",
          "FR",
          "GR",
          "GT",
          "HN",
          "HK",
          "HU",
          "IS",
          "IE",
          "IT",
          "LV",
          "LT",
          "LU",
          "MY",
          "MT",
          "MX",
          "NL",
          "NZ",
          "NI",
          "NO",
          "PA",
          "PY",
          "PE",
          "PH",
          "PL",
          "PT",
          "SG",
          "SK",
          "ES",
          "SE",
          "CH",
          "TW",
          "TR",
          "UY",
          "US",
          "GB",
          "AD",
          "LI",
          "MC",
          "ID",
          "JP",
          "TH",
          "VN",
          "RO",
          "IL",
          "ZA",
          "SA",
          "AE",
          "BH",
          "QA",
          "OM",
          "KW",
          "EG",
          "MA",
          "DZ",
          "TN",
          "LB",
          "JO",
          "PS",
          "IN",
          "BY",
          "KZ",
          "MD",
          "UA",
          "AL",
          "BA",
          "HR",
          "ME",
          "MK",
          "RS",
          "SI",
          "KR",
          "BD",
          "PK",
          "LK",
          "GH",
          "KE",
          "NG",
          "TZ",
          "UG",
          "AG",
          "AM",
          "BS",
          "BB",
          "BZ",
          "BT",
          "BW",
          "BF",
          "CV",
          "CW",
          "DM",
          "FJ",
          "GM",
          "GE",
          "GD",
          "GW",
          "GY",
          "HT",
          "JM",
          "KI",
          "LS",
          "LR",
          "MW",
          "MV",
          "ML",
          "MH",
          "FM",
          "NA",
          "NR",
          "NE",
          "PW",
          "PG",
          "WS",
          "SM",
          "ST",
          "SN",
          "SC",
          "SL",
          "SB",
          "KN",
          "LC",
          "VC",
          "SR",
          "TL",
          "TO",
          "TT",
          "TV",
          "VU",
          "AZ",
          "BN",
          "BI",
          "KH",
          "CM",
          "TD",
          "KM",
          "GQ",
          "SZ",
          "GA",
          "GN",
          "KG",
          "LA",
          "MO",
          "MR",
          "MN",
          "NP",
          "RW",
          "TG",
          "UZ",
          "ZW",
          "BJ",
          "MG",
          "MU",
          "MZ",
          "AO",
          "CI",
          "DJ",
          "ZM",
          "CD",
          "CG",
          "IQ",
          "LY",
          "TJ",
          "VE",
          "ET",
          "XK",
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/6X1x82kppWZmDzlXXK3y3q",
        },
        href: "https://api.spotify.com/v1/albums/6X1x82kppWZmDzlXXK3y3q",
        id: "6X1x82kppWZmDzlXXK3y3q",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02c7ea04a9b455e3f68ef82550",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851c7ea04a9b455e3f68ef82550",
            width: 64,
          },
        ],
        name: "Take Care (Deluxe)",
        release_date: "2011-11-15",
        release_date_precision: "day",
        total_tracks: 19,
        type: "album",
        uri: "spotify:album:6X1x82kppWZmDzlXXK3y3q",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
          },
          href: "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
          id: "3TVXtAsR1Inumwj472S9r4",
          name: "Drake",
          type: "artist",
          uri: "spotify:artist:3TVXtAsR1Inumwj472S9r4",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H",
          },
          href: "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H",
          id: "5pKCCKE2ajJHZ9KAiaK11H",
          name: "Rihanna",
          type: "artist",
          uri: "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H",
        },
      ],
      available_markets: [
        "AR",
        "AU",
        "AT",
        "BE",
        "BO",
        "BR",
        "BG",
        "CA",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DK",
        "DO",
        "DE",
        "EC",
        "EE",
        "SV",
        "FI",
        "FR",
        "GR",
        "GT",
        "HN",
        "HK",
        "HU",
        "IS",
        "IE",
        "IT",
        "LV",
        "LT",
        "LU",
        "MY",
        "MT",
        "MX",
        "NL",
        "NZ",
        "NI",
        "NO",
        "PA",
        "PY",
        "PE",
        "PH",
        "PL",
        "PT",
        "SG",
        "SK",
        "ES",
        "SE",
        "CH",
        "TW",
        "TR",
        "UY",
        "US",
        "GB",
        "AD",
        "LI",
        "MC",
        "ID",
        "JP",
        "TH",
        "VN",
        "RO",
        "IL",
        "ZA",
        "SA",
        "AE",
        "BH",
        "QA",
        "OM",
        "KW",
        "EG",
        "MA",
        "DZ",
        "TN",
        "LB",
        "JO",
        "PS",
        "IN",
        "BY",
        "KZ",
        "MD",
        "UA",
        "AL",
        "BA",
        "HR",
        "ME",
        "MK",
        "RS",
        "SI",
        "KR",
        "BD",
        "PK",
        "LK",
        "GH",
        "KE",
        "NG",
        "TZ",
        "UG",
        "AG",
        "AM",
        "BS",
        "BB",
        "BZ",
        "BT",
        "BW",
        "BF",
        "CV",
        "CW",
        "DM",
        "FJ",
        "GM",
        "GE",
        "GD",
        "GW",
        "GY",
        "HT",
        "JM",
        "KI",
        "LS",
        "LR",
        "MW",
        "MV",
        "ML",
        "MH",
        "FM",
        "NA",
        "NR",
        "NE",
        "PW",
        "PG",
        "WS",
        "SM",
        "ST",
        "SN",
        "SC",
        "SL",
        "SB",
        "KN",
        "LC",
        "VC",
        "SR",
        "TL",
        "TO",
        "TT",
        "TV",
        "VU",
        "AZ",
        "BN",
        "BI",
        "KH",
        "CM",
        "TD",
        "KM",
        "GQ",
        "SZ",
        "GA",
        "GN",
        "KG",
        "LA",
        "MO",
        "MR",
        "MN",
        "NP",
        "RW",
        "TG",
        "UZ",
        "ZW",
        "BJ",
        "MG",
        "MU",
        "MZ",
        "AO",
        "CI",
        "DJ",
        "ZM",
        "CD",
        "CG",
        "IQ",
        "LY",
        "TJ",
        "VE",
        "ET",
        "XK",
      ],
      disc_number: 1,
      duration_ms: 277386,
      explicit: true,
      external_ids: {
        isrc: "USCM51100547",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/124NFj84ppZ5pAxTuVQYCQ",
      },
      href: "https://api.spotify.com/v1/tracks/124NFj84ppZ5pAxTuVQYCQ",
      id: "124NFj84ppZ5pAxTuVQYCQ",
      is_local: false,
      name: "Take Care",
      popularity: 79,
      preview_url: null,
      track_number: 5,
      type: "track",
      uri: "spotify:track:124NFj84ppZ5pAxTuVQYCQ",
    },
  ]);
  const { userInfo } = useSelector((state) => {
    console.log(state);
    return state.auth;
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const [logout, { isLoading }] = useLogoutMutation();
  //const [signin, { isLoading }] = useSigninMutation();

  React.useEffect(() => {
    console.log(track);
  }, [track]);

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
            {userInfo?.userName}
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
