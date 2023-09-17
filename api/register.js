const mail = require("../mail/merge")

module.exports = async (req, res)=>{
    const { nome, matricula, dataNasc, cell, email, curso, turma, senha } = req.body;
    
    res.json(await mail.validation(mail, nome, { nome, matricula, dataNasc, cell, email, curso, turma, senha }))   
}