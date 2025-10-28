//Index.js
const express = require("express");
const path = require('path');
const dbConnect = require("./src/config/dbConnect.js");
const authRoutes = require("./src/routes/authRoutes.js");
const userRoutes = require("./src/routes/userRoutes.js");
const crudRoutes = require("./src/routes/crudRoutes.js");
const cartRoutes = require("./src/routes/cartRoutes.js");
const orderRoutes = require("./src/routes/orderRoutes.js");
const reviewRoutes = require("./src/routes/reviewRoutes.js");
const wishlistRoutes = require("./src/routes/wishlistRoutes.js");
const addressRoutes = require("./src/routes/addressRoutes.js");

require("dotenv").config();
dbConnect();
const app = express();
const cors = require('cors/lib/index.js');

app.use(cors({
  origin: [
    "https://ecommerceappfrontend-beryl.vercel.app",
    "https://e-commerce-app-mern-23m730mw6-om7sonwane-gmailcoms-projects.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use('/Uploads', express.static(path.join(__dirname, 'src/Uploads')));
app.get("/api/health", (req, res) => {
  res.send("✅ Server is awake and running!");
});

// Middleware
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/crud", crudRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/address", addressRoutes);


// Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server started at :${PORT}`);

});




