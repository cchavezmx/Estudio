const { UserService } = require('../services/')


module.exports = {
   create: async (_, res) => {
    try {
        const newUser = await UserService.create()
        res.status(201).json(newUser)
    } catch (err) {
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
            console.log(req.params.id)
            const user = await UserService.getByID(req.params.id)
            res.status(200).json(user)
        } catch (error) {
            res.status(401).json(console.log(error))
        }
    }
}