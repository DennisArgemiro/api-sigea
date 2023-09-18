const supabase = require("../supabase/supabase")

module.exports =  async (req, res) => {
    const { id } = req.query
    if (id != undefined){
         res.json(await supabase.selectSetor(id))
    }else{
        res.json(await supabase.selectSetor())
    }

    res.json(response)
}