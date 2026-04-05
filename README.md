1. Listar todos os livros(GET)
Endpoint: http://localhost:3000/api/livros
Resposta:
[
    {
        "id": 1,
        "titulo": "Dom Casmurro",
        "autor": "Machado de Assis",
        "ano": 1899
    },
    {
        "id": 2,
        "titulo": "1984",
        "autor": "George Orwell",
        "ano": 1949
    },
    {
        "id": 3,
        "titulo": "O Hobbit",
        "autor": "J.R.R. Tolkien",
        "ano": 1937
    },
    {
        "id": 4,
        "titulo": "A Revolução dos Bichos",
        "autor": "George Orwell",
        "ano": 1945
    },
    {
        "id": 5,
        "titulo": "Capitães da Areia",
        "autor": "Jorge Amado",
        "ano": 1937
    },
    {
        "id": 6,
        "titulo": "O Pequeno Príncipe",
        "autor": "Saint-Exupéry",
        "ano": 1943
    },
    {
        "id": 7,
        "titulo": "Harry Potter",
        "autor": "J.K. Rowling",
        "ano": 1997
    },
    {
        "id": 8,
        "titulo": "Senhor dos Anéis",
        "autor": "Tolkien",
        "ano": 1954
    },
    {
        "id": 9,
        "titulo": "It",
        "autor": "Stephen King",
        "ano": 1986
    },
    {
        "id": 10,
        "titulo": "Drácula",
        "autor": "Bram Stoker",
        "ano": 1897
    }
]

2. Buscar por id(GET)
Endpoint: http://localhost:3000/api/livros/1
Resposta:
{
    "id": 1,
    "titulo": "Dom Casmurro",
    "autor": "Machado de Assis",
    "ano": 1899
}

3. Criar livro(POST)
Endpoint: http://localhost:3000/api/livros
Body:
{
  "titulo": "Novo Livro",
  "autor": "Autor Teste",
  "ano": 2026
}

Resposta:
{
    "id": 11,
    "titulo": "Novo Livro",
    "autor": "Autor Teste",
    "ano": 2026
}

4. Atualizar livro(PUT)
Endpoint: http://localhost:3000/api/livros/5
Body:
{
  "titulo": "O Alquimista",
  "autor": "Paulo Coelho",
  "ano": 1988
}

Resposta:
{
    "id": 5,
    "titulo": "O Alquimista",
    "autor": "Paulo Coelho",
    "ano": 1988
}

5. Deletar livro(DELETE)
Endpoint: http://localhost:3000/api/livros/10
Resposta:
{
    "mensagem": "Livro removido",
    "livro": {
        "id": 10,
        "titulo": "Drácula",
        "autor": "Bram Stoker",
        "ano": 1897
    }
}


Tratamentos de erros:
1. Dados inválidos:
Exemplo:
{
  "titulo": "",
  "autor": "Teste",
  "ano": "abc"
}

Resposta:
{
  "erro": "Título inválido"
}

2. Não encontrado:
Exemplo:
http://localhost:3000/api/livros/999

Resposta:
{
  "erro": "Livro não encontrado"
}

3. Erro interno:
Exemplo:
-bug no código
-variável undefined
-erro interno

Resposta:
{
  "erro": "Erro interno do servidor"
}
