const bebidasAlcoholicas = [
    // Destilados
    { nome: 'Whisky Jack Daniels', preco: 120, imagem: `imagens/image1..jpg`},
    { nome: 'Whisky Johnnie Walker Black Label', preco: 150, imagem: `imagens/image2.jpg`, },
    { nome: 'Vodca Smirnoff', preco: 80, imagem: `imagens/image3.jpg`, },
    { nome: 'Vodca Grey Goose', preco: 130, imagem: `imagens/image4.jpg`, },
    { nome: 'Gin Tanqueray', preco: 110, imagem: `imagens/image5.jpg`, },
    { nome: 'Gin Bombay Sapphire', preco: 120, imagem: `imagens/image6.jpg`, },
    { nome: 'Rum Bacardi', preco: 90, imagem: `imagens/image7.jpg`, },
    { nome: 'Rum Havana Club', preco: 100, imagem: `imagens/image8.jpg`, },
    { nome: 'Tequila Don Julio', preco: 150, imagem: `imagens/image9.jpg`, },
    { nome: 'Tequila Patron', preco: 200, imagem: `imagens/image10.jpg`, },
    { nome: 'Cachaça Ypioca', preco: 30, imagem: `imagens/image11.jpg`, },
    { nome: 'Cachaça Leblon', preco: 50, imagem: `imagens/image12.jpg`, },
    
    // Vinhos
    { nome: 'Vinho Tinto Cabernet Sauvignon', preco: 80, imagem: `imagens/image13.jpg`, },
    { nome: 'Vinho Tinto Merlot', preco: 70, imagem: `imagens/image14.jpg`, },
    { nome: 'Vinho Tinto Pinot Noir', preco: 120, imagem: `imagens/image15.jpg`, },
    { nome: 'Vinho Branco Chardonnay', preco: 70, imagem: `imagens/image16.jpg`, },
    { nome: 'Vinho Branco Sauvignon Blanc', preco: 60, imagem: `imagens/image17.jpg`, },
    { nome: 'Espumante Brut', preco: 100, imagem: `imagens/image18.jpg`, },
    { nome: 'Espumante Prosecco (Itália)', preco: 80, imagem: `imagens/image19.jpg`, },
  
    // Cervejas
    { nome: 'Cerveja IPA', preco: 25, imagem: `imagens/image20.jpg`, },
    { nome: 'Cerveja Antartica', preco: 4.75, imagem: `imagens/image21.jpg`, },
    { nome: 'Cerveja Skol', preco: 20, imagem: `imagens/image22.jpg`, },
    { nome: 'Cerveja Weissbier', preco: 18, imagem: `imagens/image23.jpg`, },
    { nome: 'Cerveja Pilsen', preco: 15, imagem: `imagens/image24.jpg`, },
]
let itemsAdicionados = []

bebidasAlcoholicas.forEach( bebida => {
    const card = document.getElementById('card');
    card.innerHTML += `
         <div class="produto">
            <img src="${bebida.imagem}" alt="Imagem do Produto">
            <h2>${bebida.nome}</h2>
            <p>R$ ${bebida.preco}</p>
            <button class="comprar">comprar</button>
        </div>`
});

//metodo para pegar o valor e nome do produto
const botao_comprar = document.querySelectorAll('.comprar');
botao_comprar.forEach(botao => {
    botao.addEventListener( 'click', () => {
        const card = botao.parentNode
        const precoTexto = card.querySelector('p').textContent;
        const nomeItem = card.querySelector('h2').textContent;
        const preco = parseFloat(precoTexto.replace('R$ ', ''))
        
    //adiciona um produto a lista 
    if(!itemsAdicionados.includes(nomeItem)){
        document.getElementById('lista-produtos').innerHTML += `
        <li>
            <h3>${nomeItem}</h3>
            <span>R$ ${preco}</span>
            <button class="bt-remover">&#128465; REMOVER</button>
        </li>
        `
        itemsAdicionados.push(nomeItem)
    }


    //remove o produto da lista de acordo com seu botao
    const btRemover = document.querySelectorAll('.bt-remover')
        btRemover.forEach(botaoRe => {
            botaoRe.addEventListener('click', () => {
                const li = botaoRe.parentNode
                const nomeProduto = li.querySelector('h3').textContent;
                if(li.parentNode){
                    
                    const indice = itemsAdicionados.indexOf(nomeProduto)
                    if(indice !== -1) {
                        li.parentNode.removeChild(li);
                        itemsAdicionados.splice(indice, 1);
                    }
                }
            })
        })
    })
})


document.getElementById('removerTudo').onclick = () => {
    document.getElementById('lista-produtos').innerHTML = "";
    itemsAdicionados = [];
    console.log(itemsAdicionados)
}


document.getElementById('bt-compra').onclick = function carrinho(preco){
    document.getElementById('carrinho').style = "display: block;"
}

document.getElementById('bt-fechar').onclick = () => {
    document.getElementById('carrinho').style = "display: none"
}
