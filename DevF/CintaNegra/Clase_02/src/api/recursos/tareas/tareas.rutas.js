const express = require('express')

const tareasRutas = express.Router() // se debe ocupar el router


let tareas = []


// METODO GET

tareasRutas.get('/', function (req, res) {
    res.status(200).json({ response: tareas}) // dentro de la estructura debemos de meter res.status(200)  <= el codigo de la respuesta. 
  }) 
  
// METODO POST   

tareasRutas.post('/', (req, res) => {
      const tarea = req.body
      tareas.push(tarea)
      res.status(201).json({response: `Se creo la tarea`})
  })

// METODO DELETE

tareasRutas.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    tareas.filter((e) => {if(e.id === id){
        tareas.pop(e)
    }})
    res.status(201).json( {messenge: `la Tarea ${id} fue eliminada`})

  })

// METODO PUT

tareasRutas.put('/:id', (req, res) => {
    const id = req.param.id
    tareas.filter((e) => {if(e.id === id)
        tareas.push({"id": id, "nombre": res})
    })
    res.send( {messenge: `Tarea ${id} modificada con exito`} )
})



  module.exports = {
    tareasRutas
  }