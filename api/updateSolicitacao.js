const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const { idSolicitacao, date, att } = req.query;

    const hist = await supabase.selectReclamacao("id", idSolicitacao)

    if (hist.historico != undefined){
        hist.historico[Object.keys(hist.historico).length] = {date, att}
        res.json(data == undefined ? { status: 400 } : data)   
    } else{
        hist.historico = {0:{date, att}}     
    }
    const data = await supabase.updateHistorico(idSolicitacao, hist.historico)

    
}