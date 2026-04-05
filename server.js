const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());

app.use("/api", routes);

app.use((err, req, res, next) => {
  res.status(500).json({ erro: "Erro interno do servidor" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
