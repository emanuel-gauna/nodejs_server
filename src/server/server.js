import express  from "express";
import path from "path";

export const startServer = (options) =>{
    const { port , public_path = "public" } = options
    
    const app = express()

    app.use(express.static(public_path))// contenido estatico que ponemos disponible

    app.get( " * " , (req,res)=>{ // si no se cumple la ruta exacta lo mandamos a index.html
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, ()=> console.log(`Servidor corriendo en el puerto ${port}`));
}