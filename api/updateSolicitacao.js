const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const { idSolicitacao, date, att } = req.query;

    const hist = await supabase.selectReclamacao("id", idSolicitacao)
    console.log(JSON.parse({date, att}))
    

    hist.historico != undefined ? hist.historico[Object.keys(hist.historico).length] = JSON.parse({date, att}): hist.historico[0]= JSON.parse({date, att}) 

    const data = await supabase.updateHistorico(idSolicitacao, hist.historico)

    res.json(data == undefined ? { status: 400 } : data)   
    
}