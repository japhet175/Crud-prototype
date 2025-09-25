const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

let products = []; // DB temporaire en mémoire

// Create
router.post("/", auth, (req, res) => {
  const product = { id: Date.now(), name: req.body.name };
  products.push(product);
  res.json({ message: "Produit ajouté ✅", product });
});

// Read
router.get("/", auth, (req, res) => {
  res.json(products);
});

// Update
router.put("/:id", auth, (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Produit non trouvé ❌" });

  product.name = req.body.name;
  res.json({ message: "Produit mis à jour ✅", product });
});

// Delete
router.delete("/:id", auth, (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.json({ message: "Produit supprimé ✅" });
});

module.exports = router;
