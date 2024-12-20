const express = require("express");
const dotenv = require("dotenv").config();
const contactsRoutes = require("./contactsRoutes");
const userRoutes = require("./userRoutes");
const errorHandler = require("./midleware/errorhandler");
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
const commentRouter = require("./routes/commentRoutes");
const likeRouter = require("./routes/likeRoutes");
const forumPost = require("./routes/postRoutes");
const notification = require("./routes/notificationRoutes");
const refreshToken = require("./routes/refreshTokenRoutes");

// Connect to the database
connectDb();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
// app.use(cors());
const cors = require("cors");

app.use(
  cors({
    origin: ["https://comicplane.site"], // Allowed origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // If you're using cookies or sessions
  })
);

const port = process.env.PORT || 5000;

// Route middlewares
app.use("/api/contacts", contactsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/comments", commentRouter);
app.use("/api/like", likeRouter);
app.use("/api/posts", forumPost);
app.use("/api/notification", notification);
app.use("/api/refresh-token", refreshToken);
app.use(errorHandler);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
