const supabase = require("../supabase/supabase")
const path = require('path');

module.exports = async (req, res) => {
    const response = await supabase.insertAluno({values: req.query.values})
    response != 200 ? { status: 400 } : { status: 200 }
    res.json(response)
}