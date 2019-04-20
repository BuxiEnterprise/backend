const mongo = require("mongoose");
//Schema = mesma coisa que uma table em sql
const Box = new mongo.Schema({
    title: {
        //titulo  do tipo string sempre sera obrigatorio
        type: String,
        required: true,
    },
    //tipos de arquivos em uma matriz
    files: [{type: mongo.Schema.Types.ObjectId, ref: "File" }]
        //armazenar id dos arquivos, e buscar o modulo File       
}, {
    timestamps: true
    }
);

module.exports = mongo.model("Box", Box);