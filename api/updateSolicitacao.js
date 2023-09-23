const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const { idSolicitacao, object } = req.query;

    const hist = await supabase.selectReclamacao("id", idSolicitacao).historico
    console.log(object)
    hist != undefined ? hist[hist.length] = object : hist[0] = object

    const data = await supabase.updateHistorico(idSolicitacao, hist)

    res.json(data == undefined ? { status: 400 } : data)   
    
}