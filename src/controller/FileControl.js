const File = require('../models/File');
const Box = require('../models/Box');

class FileControl{
    //cria novos arquivos
    async store(req, res){
        const box = await Box.findById(req.params.id); 
        const file = await File.create({
            title: req.file.originalname,
            path: req.file.key
        });

        box.files.push(file);

        await box.save();

        //pegar todos usuarios conectado no app naquele box com aquele N id
        req.io.sockets.in(box._id).emit("file", file);

        return res.json(file);
        
    }
}

module.exports = new FileControl();