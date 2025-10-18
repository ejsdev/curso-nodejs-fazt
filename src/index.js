import express from 'express'
import { join, dirname } from "path";
import { fileURLToPath } from "url";





// Routes
import indexRoutes from "./routes/index.js"; //Importamos las rutas 

const app = express();
const PORT = 3000;

// Indicamos a la app que use las rutas: / 
app.use(indexRoutes)


// Ruta absoluda de donde están los archivos ejs (views). Es necesario modulo path(dirname) y fileURLtoPath 
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))

// Esblecemos el motor de plantillas que usaremos



// Archivos estáticos: Para poder servir archivos estáticos, en este caso el css.
app.use(express.static(join(__dirname, "public")));


// Puerto de escucha del servidor
app.listen(PORT);
console.log(`Servidor en puerto ${PORT}`);

