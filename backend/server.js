import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'; // For password hashing
import { connectDB } from './config/db.js';
import User from './models/user.model.js';
import Hackathon from './models/hackathon.model.js';
import Datathon from './models/datathon.model.js';
import CTF from './models/CTF.model.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parses application/x-www-form-urlencoded

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY; // Replace with your secret key in .env

//get all the hackathons
app.get('/api/hackathons', async (req, res) => {
    try {
        const hackathons = await Hackathon.find({});
        res.status(200).json({hackathons});
    } catch (error) {
        console.log("error in fetching hackathons:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// Route to fetch the first three hackathons
app.get('/api/hackathons3', async (req, res) => {
    try {
      const hackathons = await Hackathon.find().limit(3);
      res.json(hackathons);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
});

//Create Hackathon
app.post('/api/createHack', async (req, res) => {
    const { name, description, date, location, Organization, URL, team_members } = req.body;
  
    // Validate input
    if (!name || !description || !date || !location || !Organization || !URL || !team_members) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        // Create a new hackathon
        const newHackathon = new Hackathon({ name, description, date, location, Organization, URL, team_members });

        await newHackathon.save();
        res.status(201).json({ success: true, data: newHackathon });
    } catch (error) {
        console.error("Error in Register:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

//get all the datathons
app.get('/api/datathons', async (req, res) => {
    try {
        const datathons = await Datathon.find({});
        res.status(200).json({datathons});
    } catch (error) {
        console.log("error in fetching datathons:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// Route to fetch the first three datathons
app.get('/api/datathons3', async (req, res) => {
    try {
      const datathons = await Datathon.find().limit(3);
      res.json(datathons);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
});

//Create datathon
app.post('/api/createData', async (req, res) => {
    const { name, description, date, location, Organization, URL, team_members } = req.body;
  
    // Validate input
    if (!name || !description || !date || !location || !Organization || !URL || !team_members) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        // Create a new hackathon
        const newDatathon = new Datathon({ name, description, date, location, Organization, URL, team_members });

        await newDatathon.save();
        res.status(201).json({ success: true, data: newDatathon });
    } catch (error) {
        console.error("Error in Register:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

//get all the CTFs
app.get('/api/CTFs', async (req, res) => {
    try {
        const CTFs = await CTF.find({});
        res.status(200).json({CTFs});
    } catch (error) {
        console.log("error in fetching CTFs:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// Route to fetch the first three CTFs
app.get('/api/CTFs3', async (req, res) => {
    try {
      const CTFs = await CTF.find().limit(3);
      res.json(CTFs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
});


//Create CTF
app.post('/api/createCTF', async (req, res) => {
    const { name, description, date, location, Organization, URL, team_members } = req.body;
  
    // Validate input
    if (!name || !description || !date || !location || !Organization || !URL || !team_members) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        // Create a new hackathon
        const newCTF = new CTF({ name, description, date, location, Organization, URL, team_members });

        await newCTF.save();
        res.status(201).json({ success: true, data: newCTF });
    } catch (error) {
        console.error("Error in Register:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// Register API
app.post('/api/register', async (req, res) => {
    const { fullName, profession, email, password } = req.body;

    // Validate input
    if (!fullName || !profession || !email || !password) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email is already in use" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ fullName, profession, email, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.error("Error in Register:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// Login API
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Please provide both email and password" });
    }

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "Email not found" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Incorrect password" });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user._id, email: user.email },
            JWT_SECRET_KEY,
            { expiresIn: "1h" } // Token expires in 1 hour
        );

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                profession: user.profession,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Error in Login:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});


// Test Route
app.get("/", (req, res) => {
    res.send("Server is ready");
});

// Start Server
app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});
