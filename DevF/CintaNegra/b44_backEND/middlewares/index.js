const moment = require('moment')

module.exports = {
    showDate: (req, res, next) => {
        req.date = moment().format('MMM Do YYY, h:mm:ss a');
        console.log(`🎡 Middlewares de fecha ${req.date}`)
        next()
    }
}