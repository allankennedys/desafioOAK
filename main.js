let produtos = [];

function cadastrarProd(){
    let nome = document.getElementById("nome").value;
    let valor = document.getElementById("valor").value;
    let descricao = document.getElementById("descricao").value;
    let disponibilidade = document.getElementById("disponivel").value;

    let produto = {
        nome: nome,
        valor: valor,
        descricao: descricao,
        disponibilidade: disponibilidade === "1" ? "Sim" : "Não"     
    }

    if(!produto.nome || !produto.valor || !produto.descricao){
        alert("Preencha todos as informações do produto");
        return;
    }

    produtos.push(produto);

    document.getElementById("nome").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("disponivel").value = "1";

    listarProd();

}

function listarProd(){
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    produtos.sort((a,b) => a.valor - b.valor);

    produtos.forEach(produto =>{

    let tr = document.createElement("tr");

    let tdNome = document.createElement("td");
    tdNome.textContent = produto.nome;

    let tdDescricao = document.createElement("td");
    tdDescricao.textContent = produto.descricao;

    let tdValor = document.createElement("td");
    tdValor.textContent = produto.valor;


    let tdDisponibilidade = document.createElement("td");
    tdDisponibilidade.textContent = produto.disponibilidade;

    tr.appendChild(tdNome);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdValor);
    tr.appendChild(tdDisponibilidade);

    tbody.appendChild(tr);

    })
}