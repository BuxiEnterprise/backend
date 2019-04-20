const Box = require('../models/Box');

class BoxControl{
    //creates a new folder inside cloud
  async store(req, res){
        
        const box = await Box.create(req.body)

        return res.json(box);
    }
    
  async show (req, res){
       const box = await Box.findById(req.params.id).populate({
         path: 'files',
         options: {sort: {createdAt: -1 } }
       });
       //ordenar em ordem decrescente;
       return res.json(box);
  }  
}

module.exports = new BoxControl();