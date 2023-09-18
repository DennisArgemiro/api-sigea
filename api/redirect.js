const mail = require("../mail/mail")
const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const { idSolicitacao, idSetor} = req.query;
    const solicitacao = await supabase.selectReclamacao("id", parseInt(idSolicitacao))
    const setor = await supabase.selectSetor(parseInt(idSetor))
    const aluno = await supabase.selectAluno(solicitacao.matricula)
    res.json(await mail.redirectToSector(aluno.nome, solicitacao, setor.idSetor, setor.email)) 
}