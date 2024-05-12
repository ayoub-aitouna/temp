const express = require("express");
const db = require("../models/index");
const router = express.Router();

// Obtener todas las entradas
router.get("/", async (req, res) => {
  try {
    const results = await db.sequelize.query(
      "SELECT * FROM Entradas ORDER BY fecha_publicacion DESC"
    );
    res.status(200).json(results[0]);
  } catch (err) {
    return res.status(500).send(err);
  }
});

// Crear una nueva entrada
router.post("/", async (req, res) => {
  const { titulo, sub_titulo, contenido, imagen_destacada, autor, fecha_publicacion } =
    req.body;
  try {
    const result = await db.Entradas.create({
      titulo,
      sub_titulo,
      contenido,
      imagen_destacada,
      autor,
      fecha_publicacion,
    });
    return res.status(201).send(`Entrada agregada con ID: ${result.id}`);
  } catch (err) {
    return res.status(500).send(err);
  }
});

// Actualizar una entrada
router.put("/:id", async (req, res) => {
  const { titulo,
    sub_titulo, contenido, imagen_destacada, autor, fecha_publicacion } =
    req.body;
  const { id } = req.params;

  try {
    const result = await db.Entradas.update(
      {
        titulo,
        sub_titulo,
        contenido,
        imagen_destacada,
        autor,
        fecha_publicacion,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).send(`Entrada con ID: ${id} actualizada`);
  } catch (err) {
    return res.status(500).send(err);
  }
});

// Eliminar una entrada
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.Entradas.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send(`Entrada eliminada con ID: ${id}`);
  } catch (error) { }
});

module.exports = router;
