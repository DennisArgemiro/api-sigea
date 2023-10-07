const mail = require("../mail/mail")
const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const { idSolicitacao, idSetor} = req.query;
    const solicitacao = await supabase.selectReclamacao("id", idSolicitacao)
    const setor = await supabase.selectSetor(idSetor)
    const aluno = await supabase.selectAluno("matricula", solicitacao.Aluno_matricula)
    console.log(setor)
    res.json(await mail.redirectToSector(aluno.nome, solicitacao, setor.idSetor, setor[0].email)) 
}