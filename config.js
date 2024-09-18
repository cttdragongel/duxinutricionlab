// config do pix
const pix = {
    chave : "c7d3658b-407c-4b5a-9393-d95ff16f2fd3",
    descricao: "SEGURO",
    instituicao: "MERCADO LIVRE",
    cidade: "SAO PAULO"
}

// config do produto
const produto = {
    imagem: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/157936-1600-1600",
    nome: "Pague 1 e leve 3 creatina MaxTitanium 3000g- Promoçao dia das crianças",
    preco: {
        original: "290,45",
        desconto: "97,90"
    },
    avaliacoes: [
        {
            data: "10 set. 2024",
            texto: "To tomando 2x por dia, comprei e chegou rapido, valeu"
        },
        {
            data: "11 set. 2024",
            texto: "Chegou super rápido, pensei que era mentira."
        },
        {
            data: "08 set. 2024",
            texto: "Gostei demais, já vou revender aqui na academia"
        },
        {
            data: "01 jan. 2024",
            texto: "Agora será que vou ficar igual ramon kkkk chegou super rapido, obrigad"
        }
    ]
}

// configuracoes globais da pagina
const global = {
    anuncio: {
        imagem: "https://i.ibb.co/1XQZGF9/advertising.png"
    }
}

// apenas calculos
let desconto = parseInt(((parseFloat(produto.preco.original.replace(",", ".")) - parseFloat(produto.preco.desconto.replace(",", "."))) / parseFloat(produto.preco.original.replace(",", "."))) * 100);
let parcela = (Math.round(parseFloat(produto.preco.desconto.replace(",", ".")) / 12 * 100) / 100).toFixed(2).replace(".", ",");