import excuteQuery from '../../../lib/db'

export default async function handler(req, res) {
    
    switch (req.method) {
        case "GET":
            return await getPosts(req, res);
        case "POST":
            return await savePost(req, res);
        default:
            return res.status(400).send("Metodo no disponible")
    }
}

const getPosts = async (req, res) => {
    try {
        const result = await excuteQuery({
            query: 'SELECT * FROM posts'
        });
        res.send(result)
    } catch (error) {
        return console.log({error})
    }
};

const savePost = async (req, res) => {
    try {
        console.log("req nom", req.body)
        const result = await excuteQuery({
            query: 'INSERT INTO posts(titulo, imagen, imagen_perfil, categoria, contenido, fecha, nombre_perfil, btn_link) VALUES(?)',
            values: [req.body.titulo, req.body.imagen, req.body.imagen_perfil, req.body.categoria, req.body.contenido, req.body.fecha, req.body.nombre_perfil, req.body.btn_link]
        });
        console.log("ttt", result);
    } catch (error) {
        console.log(error)
    }
}