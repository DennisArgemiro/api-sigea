const supabase = require("../supabase/supabase")

module.exports = async (req, res)=>{
    const {idSolicitacao, pedagogo, resposta} = req.query

      const response = await supabase.awnserPedagogo(idSolicitacao, pedagogo, resposta)
      
      res.json(response)   
}