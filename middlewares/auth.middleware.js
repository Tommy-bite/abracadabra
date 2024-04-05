import { usuarios } from "../index.js";
import path from 'path';
export const auth = (req, res, next) => {
    const __dirname = import.meta.dirname;
    const rutaImagen = path.join(__dirname, '..');
    const usuarioSeleccionado = req.params.usuario;
    const usuarioEncontrado = usuarios.find(item => item.toLowerCase() === usuarioSeleccionado.toLowerCase());

    if(usuarioEncontrado){
        next();
    }else{
        res.sendFile(rutaImagen + '/assets/who.jpeg');
    }
} 