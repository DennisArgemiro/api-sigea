const supabase = require("../supabase/supabase")

module.exports =  async (req, res) => {
    const { param, value } = req.query
    var response = undefined
    if (param == "id" || param == "matricula") {
        response = await supabase.selectReclamacao(param, value)
    } else if (param == "none") {
        response = await supabase.selectReclamacao(param)
    }
    res.json(response)
}