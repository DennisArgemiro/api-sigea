const nodemailer = require("nodemailer")
const CONFIG = require("./config")

const transporter = nodemailer.createTransport({
  host: CONFIG.host,
  port: CONFIG.port,
  secure: false, // true for 465, false for other ports
  auth: {
    user: CONFIG.address, // generated ethereal user
    pass: CONFIG.passAddress, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = {
  validation: async (reciever, requester, object) => {
    const { nome, matricula, dataNasc, cell, email, curso, turma, senha } = object
    console.log()

    const params = {
      query: "validation",
      values: `${nome},${matricula},${dataNasc},${cell},${email},${curso},${turma},${senha}`
    }
    console.log(params)
    const html = await require("./merge").txt(params, nome)
    const response = await transporter.sendMail({
      from: `"SIGEA" <${CONFIG.address}>`, // sender address
      to: email, // list of receivers
      subject: `Finalize o seu cadastro, ${nome}!`, // Subject line
      // text:"",
      html // plain text body
    })
    console.log(response.messageId)
  },
  redirectToSector: async (nome, solicitacao, idSetor, mail) => {
    console.log(mail)
    const html = await require("./merge").responseEmail(nome, solicitacao, idSetor)

    const response = await transporter.sendMail({
      from: `"SIGEA"<${CONFIG.address}>`,
      to: mail,
      subject: `Uma nova requisição foi feita por ${nome}`,
      html
    })

    return response
  }
}
//Sistema de Gestão de Ensino e Aprendizagem (SIGEA)