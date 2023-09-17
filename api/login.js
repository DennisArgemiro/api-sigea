const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const { email, senha } = req.query;
    const data = await supabase.selectLogin(email, senha)

    res.json(data == undefined ? { status: 400 } : data)   
    
}