const Email = require("./smtp")
const CONFIG = require("./config");

function registerEmail(reciever, subject, body) {
    Email.send({
        Host: CONFIG.host,
        Username: CONFIG.address,
        Password: CONFIG.passAddress,
        To: reciever,
        From: `"SINE" <${CONFIG.address}>`,
        Subject: subject,
        Body: body
    }).then(
        message => alert(message)
    );
}

module.exports = {
    validation:async (object) =>{
        const { nome, matricula, dataNasc, cell, email, curso, turma, senha } = object
    
        const params = { values: `${nome},${matricula},${dataNasc},${cell} ,${email},${curso},${turma},${senha}` }
        const html = await require("./merge").txt(params, nome)

        registerEmail(email, `Finalize o seu cadastro, ${nome}!`, html)
    
    }
}