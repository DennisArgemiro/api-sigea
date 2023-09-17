const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const { Aluno_matricula, Pedagogo_matricula, assunto, descricao, anexo, status } = req.query

    const response = await supabase.insertReclamacao({ Aluno_matricula, Pedagogo_matricula, assunto, descricao, anexo, status })
    res.json(response)   

}