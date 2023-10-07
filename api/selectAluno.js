const supabase = require("../supabase/supabase")

module.exports =  async (req, res) => {
    const { param, value } = req.query
    const response = await supabase.selectAluno(param, value)
    res.json(response)
  }