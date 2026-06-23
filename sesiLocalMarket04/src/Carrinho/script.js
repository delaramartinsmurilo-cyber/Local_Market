$(document).ready(function() {
    //recupera carrinho do localstorage
    const carrinho = JSON.parse(localStorage.getItem("arrinho")) || []
    const listaElement = $("#lista")
    const totalElement = $("#total")
    function exibircarrinho(){
        listaElement.empty()
        let totalPreco = 0

        $.each(carrinho, function(index, item){
            const listaItem = $("<li>").text(`${item.desc} - preco: $${item.preco.toFixed(2)}`)

            const removeButton = $("<button>").text("X").css("margin-left", "10px").click(function(){
                
                    removerItem(index)
                
               })
                listaItem.append(removeButton)
                listaElement.append(listItem)

                totalPreco += item.preco
        })
        totalElement.text(`total: $${totalPreco.toFixed(2)}`)
    }

    function removerItem(index){
        carrinho.splice(index,1)
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        exibirCarringo()
    }
    exibirCarrinho()
})
function gerar(){
    const listaElement = document.getElementById("lista")
    const totalElement = document.getElementById("total")
    const listaClone = listaElemente.cloneNode(true)
    $(listaClone).find("button").remove()
    const listaHtml = listaClone.innerHTML
    const totalhTML = totalElement.innerHTML
    const conteudoHtml = `
    <html>
    
    <head>
    
}
