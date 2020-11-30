1. Acesse o diretorio do projeto e instale as dependencias com "npm install"
2. Inicie o projeto com "npm start"
3. O porjeto estará disponivel em http://localhost:3001/

As rotas disponiveis são

1. Para listar todos os planetas:

metodo: GET
url: http://localhost:3001/

2. Para adicionar um planeta:

metodo: POST
url: http://localhost:3001/star

payload = {
    "name":"Example",
    "idPlanet":"0",
    "aparicao":"0",
    "clima":"Example Clima",
    "terreno":"Example Terrain"
}

3. Localizar planeta por nome/id:

metodo: GET
url: http://localhost:3001/star/planet/{string}

Onde {string} pode ser substituido por "idPlanet" ou "name" que foram incluidos na rota anterior.

4. Deletar planeta:

metodo: DELETE
url: http://localhost:3001/star/planet/{idPlanet}

Onde {idPlanet} deve ser substituido pelo id do planeta que deseja deletar.

5. Deletar todos os planetas:

metodo: DELETE
url: http://localhost:3001/star/planets/

6. Inserir planetas na base de dados de acordo com a API https://swapi.dev/

metodo: GET
url: http://localhost:3001/update
