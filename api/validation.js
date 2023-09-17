const supabase = require("../supabase/supabase-js")
const path = require('path');

module.exports = async (req, res) => {
    const response = await supabase.insertAluno({values: req.query.values})
    response != 200 ? { status: 400 } : { status: 200 }
    if(response != 200){
        res.sendFile(path.join(__dirname, '/../public/html/failed.html'))
    }else{
        res.sendFile(path.join(__dirname, '/../public/html/sucess.html'))
    }
}