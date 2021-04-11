module.exports = function(app){
    app.get("/formulario_inclusao_livro",function(req, res){
        res.render("adimin/form_add_livro")
    })
}
