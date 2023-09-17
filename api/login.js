const supabase = require("../supabase/supabase-js")

module.exports = async (req, res)=>{
    const { email, senha } = req.body;
    const data = await supabase.selectLogin(email, senha)

    res.json(data == undefined ? { status: 400 } : data)   
    
}