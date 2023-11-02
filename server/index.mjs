import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5173;

// Enable CORS
app.use(cors());

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a router instance
const router = express.Router();

// POST route
router.post("/post", async (req, res) => {
  // Destructuring response token and input field value from request body
  const { token, inputVal } = req.body;

  try {
    // Sending secret key and response token to Google Recaptcha API for authentication.
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.VITE_SECRET_KEY}&response=${token}`
    );

    // Check response status and send back to the client-side
    if (response.data.success) {
      res.send("Human 👨 👩");
    } else {
      res.send("Robot 🤖");
    }
  } catch (error) {
    // Handle any errors that occur during the reCAPTCHA verification process
    console.error(error);
    res.status(500).send("Error verifying reCAPTCHA");
  }
});

// Add router in express app
app.use("/", router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
