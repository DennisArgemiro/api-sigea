const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const {matricula, newPass} = req.query
    const response = await supabase.updatePassword(matricula, newPass)
    res.json(response)
}