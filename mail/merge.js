module.exports = {
  txt: async (params, nome) => {
    // const head = await fs.readFileSync(__dirname + "/../html/header.html", "utf-8")
    const body = `<body style="font-family: Arial, sans-serif;">
  <div class="container" style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
    <h2 style="text-align: center;">Email de Confirmação de Cadastro</h2>
    <p style="margin-bottom: 10px;">Olá <strong>${nome}</strong>,</p>
    <p style=" margin-bottom: 10px;">Obrigado por se cadastrar em nosso site. Para ativar sua conta, clique no botão abaixo:</p>
    <p style=" margin-bottom: 10px;">
      <a class="btn" href="https://api-sigea.vercel.app/api/validation.js?values=${params.values}" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: #fff; text-decoration: none; border-radius: 5px;">Confirmar Cadastro</a>
    </p>
    <p style=" margin-bottom: 10px;">Se você não se cadastrou em nosso site, ignore este email.</p>
    <p style=" margin-bottom: 10px;">Atenciosamente,</p>
    <p style=" margin-bottom: 10px;">A equipe do Protocolar.IFPA</p>
  </div>
</body>`

    const response = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html>
  ${body}
</html>`

    return response
  },
  responseEmail: async (nome, solicitacao, idSetor) => {
    const { assunto, descricao, idSolitacao } = solicitacao

    const body = `<body style="font-family: Arial, sans-serif;">
    <div class="container" style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
      <h2 style="text-align: center;">Você Recebeu uma Nova Solicitação de ${nome}</h2>
      <p style="margin-bottom: 10px;">${assunto}</strong>,</p>
      <p style=" margin-bottom: 10px;">${descricao}</p>
      <p style=" margin-bottom: 10px;">
        <a class="btn" href="https://api-sigea.vercel.app/api/answerSetor.js?idSolicitacao=${idSolitacao}&idSetor=${idSetor}" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: #fff; text-decoration: none; border-radius: 5px;">Responder</a>
      </p>
    </div>
  </body>`

    const response = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
  <html>
    ${body}
  </html>`

    return response
  }

}