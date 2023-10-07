const supabase = require("../supabase/supabase")

module.exports =  async (req, res) => {
    const { matricula } = req.query
    const response = await supabase.selectAluno("matricula", matricula)
    res.json(response)
  }