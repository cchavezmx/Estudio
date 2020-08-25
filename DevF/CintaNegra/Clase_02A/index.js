//CONFIGURACION
const { app, PORT } = require('./src/app/app')

// EJECUCION DE LA FUNCION 

app.listen(PORT, () => console.log(`https://localhost:${PORT}`))
