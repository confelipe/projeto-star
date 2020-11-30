const Star = require("../model/Star");

class StarController {
  async store(req, res) {
    const data = await Star.create(req.body);

    return res.status(201).json(data);
  }
  async update(req, res) {
    const planetUpdate = req.params
  }
  async index(req, res) {
    const data = await Star.find({}); 

    return res.json(data);
  }
  async search(req, res) {
    const searchId = req.params
    const search = await Star.find({ $or : [{idPlanet : searchId.id}, {name : searchId.id}]});

    if(search.length == 0) {
      return res.status(404).json({error : 404, message : 'Não foram encontrados planetas com o termo informado.'})
    } else {
      return res.json(search)
    }
  }
  async delete(req, res) {
    const planetId = req.params
    const findPlanet = await Star.find({idPlanet : planetId.planetId})
    var data = ''
    if(findPlanet.length != 0) {
      data = await Star.deleteOne({idPlanet : planetId.planetId}, function (err) {
        if(err) console.log(err);
      });
    }
    if(data.deletedCount >= 1) {
      return res.json("Planeta deletado com sucesso!")
    } else {
      return res.json("Houve um erro ao deletar, planeta não encontrado.") 
    }
  }
  async drop(req, res) {
    const data = await Star.deleteMany({});

    return res.json(data)
  }
  atualizar(req, res) {
    const requestPlanet = require('swapi-node');
    var id = 0;
    for(var count = 1; count <= 60; count++) {
      requestPlanet.getPlanets(count).then(((result)=> {
        id++
        var payload = JSON.stringify ({
          name : result.name,
          idPlanet : id,
          aparicao : result.films.length,
          clima : result.climate,
          terreno : result.terrain
        })
        const options = {
          hostname: 'localhost',
          port: 3001,
          path: '/star',
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
            'Content-Lenght' : payload.length
          }
        }
        const insert = require('http');
        var post = insert.request(options, (res) => {
          res.setEncoding('utf8');
          res.on('data', function (chunk) {
              console.log('Response: ' + chunk);
          });
        })
        post.write(payload);
        post.end();
      }))
    }
    return res.json('Planetas atualizados')

  }
}

module.exports = new StarController();