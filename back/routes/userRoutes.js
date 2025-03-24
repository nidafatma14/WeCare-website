import express from "express";
import dotenv from "dotenv";
import User from "../models/userModel.js";
import nodemailer from "nodemailer";

// Load environment variables
dotenv.config();

const router = express.Router();

// Debugging: Check if env variables are loaded
console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER.trim(), // Remove extra spaces
    pass: process.env.EMAIL_PASS.trim(),
  },
});

// Create a new user and send confirmation email
router.post("/register", async (req, res) => {
  try {
    console.log("Received Data:", req.body);

    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Checking if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Creating new user
    const newUser = new User({ name, email, phone });
    await newUser.save();

    // Sending Confirmation Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Appointment Confirmation - WeCare",
      html: `
        <h2>Hi ${name},</h2>

<p>We are pleased to inform you that your appointment with <strong>WeCare</strong> has been successfully booked.</p>

<p><strong>Appointment Details:</strong></p>
<ul>
  <li><strong>Service:</strong> Mental Health Consultation</li>
  <li><strong>Date:</strong> April 03, 2025</li>
  <li><strong>Time:</strong> 3:00 PM - 4:00 PM</li>
  <li><strong>Location:</strong> Online (Google Meet)</li>
</ul>

<p><strong>Contact Information:</strong></p>
<ul>
  <li><strong>Registered Email:</strong> ${email}</li>
  <li><strong>Registered Phone:</strong> ${phone}</li>
</ul>

<p>We will send you a confirmation email with the meeting link 24 hours before your appointment. If you have any questions or need to reschedule, feel free to contact us.</p>

<p>We appreciate your trust in <strong>WeCare</strong> and look forward to assisting you.</p>

<br />
<p>Best regards,</p>
<strong>The WeCare Team</strong>

<p><a href="#" style="padding:10px 20px; background:#4CAF50; color:white; text-decoration:none; border-radius:5px;">Confirm Appointment</a></p>

      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Appointment booked successfully, email sent!",
      user: newUser,
    });
  } catch (error) {
    console.error("Error in /register:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
