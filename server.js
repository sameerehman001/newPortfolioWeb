import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({})

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/send", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_NAME,
        pass: process.env.USER_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "irfannayakvade2230@gmail.com",
      subject: `Contact from ${name}`,
      text: `You have a new message from ${name} (${email}, ${phone}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
