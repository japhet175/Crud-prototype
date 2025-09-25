const express = require("express");
const app = express();

// Middleware pour lire le JSON
app.use(express.json());

// Importer les routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");

// Utiliser les routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);

// Route test simple
app.get("/", (req, res) => {
  res.send("🚀 CRUD avec Auth fonctionne !");
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
