const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const { idSolicitacao, object } = req.query;

    const hist = await supabase.selectReclamacao("id", idSolicitacao).historico
    console.log(typeof JSON.parse(object))
    hist != undefined ? hist[hist.length] = JSON.parse(object) : hist[0] = JSON.parse(object)

    const data = await supabase.updateHistorico(idSolicitacao, hist)
    
    res.json(data == undefined ? { status: 400 } : data)   
    
}