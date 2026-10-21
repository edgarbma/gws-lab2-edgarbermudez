const express = require("express");
const app = express();
const PORT = 9095;

app.get("/api/saludo", (req, res) => {
  const nombre = req.query.nombre || "mundo";
  res.json({ mensaje: "Hola, " + nombre, desde: "dulcehogar:9095" });
});

app.get("/api/pedido", (req, res) => {
  const producto = req.query.producto || "sin_producto";
  const cantidad = req.query.cantidad || 1;
  res.json({
    pedidoId: "PED-" + Date.now(),
    producto: producto,
    cantidad: cantidad,
    estado: "recibido"
  });
});

app.listen(PORT, () => {
  console.log("[dulcehogar.api] Servidor corriendo en http://localhost:" + PORT);
});
