import { envs } from "./config/env.js"
import {startServer} from  "./server/server.js"
import { config  } from "dotenv"; // instalar (npm i dotenv) y requerir config
import env from "env-var";
config();

config(); // cargar variables de entorno
// obtener una variable de la base de
console.log(process.env.PORT)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)

// variable extricta(number) y requerida de env-var
const main= () =>{
    startServer({
        port: envs.PORT ,
        public_path: envs.PUBLIC_PATH
    }) 
}
//funcion agnostica autoconvocada
(async ()=> {
    main()
})()

const PORT = env.get("PORT").required().asPortNumber();

console.log("El puerto es: ", PORT);
