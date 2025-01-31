import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import productRoutes from "./routes/product-route.js";
// import cors from "cors";
import path from "path";

const app = express();
const _dirname = path.resolve();
app.use(express.json());

const allowedOrigins = ['https://fullstack-learning-1.onrender.com']; // Replace with your frontend's URL in production
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,  // If you're sending cookies or sessions
  })
);


app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
  });
}

const PORT = process.env.PORT;

app.listen(PORT, () => {
  // console.log(process.env.MONGO_URI);
  connectDB();
  console.log(`Server started at port ${PORT}`);
});
