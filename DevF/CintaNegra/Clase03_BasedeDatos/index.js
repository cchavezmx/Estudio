const { app, PORT } = require('./app/connection')

app.listen(PORT, () => console.log('http://localhost:3000'))