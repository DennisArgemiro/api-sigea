const supabase = require("../supabase/supabase-js")

module.exports = async (req, res)=>{
    const {idSolicitacao, pedagogo, resposta} = req.body

      const response = await supabase.awnserPedagogo(idSolicitacao, pedagogo, resposta)
      
      res.json(response)   
}