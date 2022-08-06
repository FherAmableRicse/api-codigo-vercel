const express = require('express');
const {config} = require('./config');
const cors = require('cors');

const alumnoApi = require('./routes/alumno.routes');
const cursoApi = require('./routes/curso.routes');

const {errorHandler,boomErrorHandler} = require('./middlewares/error.handler');

const app = express();

app.use(cors());
//para recibir data en json
app.use(express.json());

app.get('/',(req,res)=>{
    //console.log(a+3);
    res.json({
        'status':true,
        'content':'servidor activo'
    })
})

alumnoApi(app);
cursoApi(app);

//middlewares de errores
app.use(errorHandler);
app.use(boomErrorHandler);

app.listen(config.port,()=>console.log('servidor en http://localhost:'+config.port))