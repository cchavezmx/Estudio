const { UserService } = require('../services/')


module.exports = {
   create: async (req, res) => {
    try {
        const newUser = await UserService.create(req.body)
        res.status(201).json(newUser)
    } catch (err) {
        console.log(err)
        res.status(401).json({message: err})
    }
},
    get: async (_, res) => {
        try {
            const allUser = await UserService.get()
            res.status(200).json(allUser)
        } catch (err) {
            res.status(400).json(err)
        }
    },
    getByID: async (req, res) =>{
        try {
            const user = await UserService.getByID(req.params.id)
            res.status(200).json(user)
        } catch (error) {
            res.status(401).json(console.log(error))
        }
    },
    patch: async (req, res) => {
        try {
            const userPatch = await UserService.patch(req.params.id, req.body)
            res.status(200).json(userPatch)
        } catch (error) {
            res.status(401).json(error)
        }
    },
    delete: async (req, res) => {
        try {
            const delUser = await UserService.delete(req.params.id)
            res.status(201).json(delUser)
        } catch (error) {
            res.status(404).json(error)
        }
    }
}