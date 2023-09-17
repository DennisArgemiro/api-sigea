const supabase = require("../supabase/supabase-js")

module.exports =  async (req, res) => {
    const { matricula } = req.body
    const response = await supabase.selectAluno(matricula)
    res.json(response)
  }