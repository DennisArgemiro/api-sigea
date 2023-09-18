const mail = require("../mail/mail")
const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const { idSolicitacao, idSetor} = req.query;
    const solicitacao = await supabase.selectReclamacao("id", idSolicitacao)
    console.log()
    const setor = await supabase.selectSetor(idSetor)
    console.log()
    const aluno = await supabase.selectAluno(solicitacao.Aluno_matricula)
    res.json(await mail.redirectToSector(aluno.nome, solicitacao, setor.idSetor, setor.email)) 
}