const express = require("express");
const db = require("../models/index");
const router = express.Router();

// Obtener todas las entradas
router.get("/", async (req, res) => {
  try {
    const results = await db.sequelize.query(
      "SELECT * FROM Entradas ORDER BY fecha_publicacion DESC"
    );
    res.status(200).json(results);
  } catch (err) {
    throw err;
  }
});

// Crear una nueva entrada
router.post("/", async (req, res) => {
  const { titulo, contenido, imagen_destacada, autor, fecha_publicacion } =
    req.body;
  try {
    const result = await db.sequelize.query(
      "INSERT INTO Entradas (titulo, contenido, imagen_destacada, autor, fecha_publicacion) VALUES (?, ?, ?, ?, ?)",
      [titulo, contenido, imagen_destacada, autor, fecha_publicacion]
    );
    res.status(201).send(`Entrada agregada con ID: ${results.insertId}`);
  } catch (err) {
    throw err;
  }
});

// Actualizar una entrada
router.put("/:id", async (req, res) => {
  const { titulo, contenido, imagen_destacada, autor, fecha_publicacion } =
    req.body;
  const { id } = req.params;

  try {
    const result = await db.sequelize.query(
      "UPDATE Entradas SET titulo = ?, contenido = ?, imagen_destacada = ?, autor = ?, fecha_publicacion = ? WHERE id = ?",
      [titulo, contenido, imagen_destacada, autor, fecha_publicacion, id]
    );
    res.status(200).send(`Entrada con ID: ${id} actualizada`);
  } catch (err) {
    throw err;
  }
});

// Eliminar una entrada
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reslut = await db.sequelize.query("DELETE FROM Entradas WHERE id = ?", [
      id,
    ]);
    res.status(200).send(`Entrada eliminada con ID: ${id}`);
  } catch (error) {}
});

module.exports = router;
