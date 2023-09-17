const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const { idSolicitacao, pedagogo, setor} = req.body.content

    const response = await supabase.answerSetor(idSolicitacao, setor, pedagogo)

    res.json(response)   

}