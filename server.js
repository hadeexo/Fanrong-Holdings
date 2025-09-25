import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Configure Nodemailer (cPanel SMTP)
const transporter = nodemailer.createTransport({
  host: "admin@fanrongholdings.com", // cPanel SMTP host
  port: 465, // SSL
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // your cPanel email
    pass: process.env.EMAIL_PASS, // your cPanel password
  },
});

// ==================== NEWSLETTER ROUTE ====================
app.post("/subscribe", async (req, res) => {
  const { email, name } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  try {
    await transporter.sendMail({
      from: `"Newsletter Signup" <admin@fanrongholdings.com>`,
      to: "admin@fanrongholdings.com",
      subject: "New Newsletter Subscription",
      html: `
        <h3>New Newsletter Subscription</h3>
        <p><b>Name:</b> ${name || "N/A"}</p>
        <p><b>Email:</b> ${email}</p>
      `,
    });

    res
      .status(200)
      .json({ success: true, message: "Subscription successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to subscribe." });
  }
});

// ==================== CONTACT FORM ROUTE ====================
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields required" });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "admin@fanrongholdings.com",
      subject: "New Contact Form Message",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send message." });
  }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
