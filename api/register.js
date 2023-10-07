const mail = require("../mail/mail");
const supabase = require("../supabase/supabase");

module.exports = async (req, res)=>{
    const { typeReq, nome, matricula, dataNasc, cell, email, curso, turma, senha, tipo } = req.query;
    if(typeReq == "register"){
        res.json(await mail.validation(mail, nome, { nome, matricula, dataNasc, cell, email, curso, turma, senha, tipo }))   
    } else if (typeReq == "update"){
        res.json(await supabase.updateAluno({ nome, matricula, dataNasc, cell, email, curso, turma, senha, tipo }))   
    }
}