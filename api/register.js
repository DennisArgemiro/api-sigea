const mail = require("../mail/mail")

module.exports = async (req, res)=>{
    const { nome, matricula, dataNasc, cell, email, curso, turma, senha, tipo } = req.query;
    
    res.json(await mail.validation(mail, nome, { nome, matricula, dataNasc, cell, email, curso, turma, senha, tipo }))   
}