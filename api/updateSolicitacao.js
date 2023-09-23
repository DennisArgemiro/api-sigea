const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const { idSolicitacao, object } = req.query;

    const hist = await supabase.selectReclamacao("id", idSolicitacao)
    console.log(hist.historico)

    hist.historico != undefined ? hist.historico[hist.historico.length] = JSON.parse(object): hist[0]= JSON.parse(object) 

    const data = await supabase.updateHistorico(idSolicitacao, hist)

    res.json(data == undefined ? { status: 400 } : data)   
    
}