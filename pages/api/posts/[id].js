import excuteQuery from '../../../lib/db'

export default async function handler(req, res) {
    
    switch (req.method) {
        case "GET":
            return await getPost(req, res);
        default:
            return res.status(400).send("Metodo no disponible")
    }
}

const getPost = async (req, res) => {
    try {
        const result = await excuteQuery({
            query: 'SELECT * FROM posts WHERE titulo = ?',
            values: req.query.id,
        });
        return res.send(result[0])
    } catch (error) {
        return console.log({error})
    }
};