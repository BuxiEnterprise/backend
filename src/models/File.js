const mongo = require("mongoose");
//Schema = mesma coisa que uma table em sql
const File = new mongo.Schema({
    title: {
        //titulo  do tipo string sempre sera obrigatorio
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    //tipos de arquivos em uma matriz
}, {
    timestamps: true,
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
    }
);

File.virtual('url').get(function(){
    const url = process.env.URL || 'http://localhost:3333'
    return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongo.model("File", File);