import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import axios from "axios";
import bodyParser from "body-parser";

// Auth user/set token
// route: POST/API/users/Auth
// Public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		generateToken(res, user._id);

		res.json({
			_id: user._id,
			userName: user.userName,
			email: user.email,
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
});

// Register new user
// route: POST/API/users/Auth
// Public
const registerUser = asyncHandler(async (req, res) => {
	const { userName, email, password } = req.body;
	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}

	const user = await User.create({ userName, email, password });

	if (user) {
		generateToken(res, user._id);
		res.status(201).json({
			_id: user._id,
			userName: user.userName,
			email: user.email,
		});
	} else {
		res.status(400);
		throw new Error("Invalid username");
	}
});

// Logout new user
// route: POST/API/users/Auth
// Public
const logoutUser = asyncHandler(async (req, res) => {
	res.cookie("jwt", "", {
		httpOnly: true,
		expires: new Date(0),
	});
	res.status(200).json({ message: " User logged out" });
});

// Get User Profile
// route: GET/API/users/Auth
// Private
const getUserProfile = asyncHandler(async (req, res) => {
	const user = {
		_id: req.user._id,
		userName: req.user.userName,
		email: req.user.email,
	};
	res.status(200).json({ user });
});

// Update User Profile
// route: PUT/API/users/Auth
// Private
const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		user.userName = req.body.userName || user.userName;
		user.email = req.body.email || user.userName;
		if (req.body.password) {
			user.password = req.body.password;
		}
		const updatedUser = await user.save();

		res.status(200).json({
			_id: updatedUser._id,
			userName: updatedUser.userName,
			email: updatedUser.email,
		});
	} else {
		res.status(404);
		throw new Error("Username not found");
	}
});

const searchHandler = asyncHandler(async (req, res) => {
	const { searchInput, accessToken } = req.body;

	// Check if the required parameters are provided
	if (!searchInput || !accessToken) {
		return res.status(400).json({ error: "Invalid request" });
	}

	try {
		const searchParameters = {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + accessToken,
			},
		};

		// Make the Spotify API search request
		const response = await axios.get(
			`https://api.spotify.com/v1/search?q=${searchInput}&type=track`,
			searchParameters
		);

		// Send the response back to the client
		res.json(response.data.tracks.items);
	} catch (error) {
		console.error("Error making Spotify API call:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

// app.listen(PORT, () => {
// 	console.log(`Server is running on http://localhost:${PORT}`);
// });

export {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	searchHandler,
};
