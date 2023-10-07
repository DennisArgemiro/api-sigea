const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const {idSolicitacao, pedagogo, resposta, status} = req.query
    const response = await supabase.awnserPedagogo(idSolicitacao, pedagogo, resposta, status)      
      res.json(response)   
}