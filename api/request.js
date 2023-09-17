const supabase = require("../supabase/supabase-js")

module.exports = async (req, res)=>{
    const { Aluno_matricula, Pedagogo_matricula, assunto, descricao, anexo, status } = req.body

    const response = await supabase.insertReclamacao({ Aluno_matricula, Pedagogo_matricula, assunto, descricao, anexo, status })
    res.json(response)   

}