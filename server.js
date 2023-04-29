import app from './src/app.js'

const port = process.send.PORT || 3000; 

app.listen(port, () => { //
   console.log(`Servidor escutando em http://localhost:${port}`);
});
















/* const rotas = { // variavel com as possiveis rotas 
   '/': 'Curso de node',
   '/livros': 'Entre na pagina de livros',
   '/autores': 'Listagem de autores',
   '/editora': 'pagina de editora',
   '/sobre': 'informaçoes sobre a loja'
}

const server = http.createServer((req, res) => { // cria novo servidor
   res.writeHead(200, {'Content-type': 'text/plain'}); // configura a resposta
   res.end(rotas[req.url]) // responde a requisição
}); */