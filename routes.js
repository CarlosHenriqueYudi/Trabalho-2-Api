const express = require("express");
const router = express.Router();
const data = require("./data");

function validarLivro({ titulo, autor, ano }) {
  if (!titulo || typeof titulo !== "string") return "Título inválido";
  if (!autor || typeof autor !== "string") return "Autor inválido";
  if (!ano || typeof ano !== "number") return "Ano inválido";
  return null;
}

router.get("/livros", (req, res) => {
  res.json(data.livros);
});

router.get("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const livro = data.livros.find(l => l.id === id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }

  res.json(livro);
});

router.post("/livros", (req, res) => {
  const erro = validarLivro(req.body);
  if (erro) {
    return res.status(400).json({ erro });
  }

  const novoLivro = {
    id: data.proximoId++,
    ...req.body
  };

  data.livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

router.put("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.livros.findIndex(l => l.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }

  const erro = validarLivro(req.body);
  if (erro) {
    return res.status(400).json({ erro });
  }

  data.livros[index] = { id, ...req.body };

  res.json(data.livros[index]);
});

router.delete("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.livros.findIndex(l => l.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }

  const removido = data.livros.splice(index, 1);

  res.json({ mensagem: "Livro removido", livro: removido[0] });
});

module.exports = router;
