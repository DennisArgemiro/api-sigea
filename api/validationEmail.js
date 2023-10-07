const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const {email} = req.query
    const response = await supabase.selectAluno("email", email)
    if (response.email != undefined){
        res.json({matricula: response.matricula})
    } else {
        res.json({
            status: 400
        })
    }
}