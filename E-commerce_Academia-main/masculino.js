
console.log("olá")

function adicionarImagem() {
    // Obter valores do formulario

   /*let nomeImagem = document.getElementById("imagem_name").value;
    let descricaoImagem = document.getElementById("descricao_imagem").value;
    let urlImagem = document.getElementById("imagem_image").value;*/

    nomeImagem=document.getElementById("imagem_name").value
    descricaoImagem = document.getElementById("descricao_imagem").value;
    urlImagem = document.getElementById("imagem_image").value;

    console.log(nomeImagem)
    console.log (descricaoImagem)
    console.log(urlImagem)
    /*console.log(nomeImagem)*/

    // Criar um elemento div
    let novoImagem = document.createElement("div");
    novoImagem.className = "div_masculino";

    let novaImagemImage = document.createElement("img");
    novaImagemImage.src = urlImagem;
    novaImagemImage.alt = nomeImagem;

 
    let h3NovoImagem = document.createElement("h3");
    h3NovoImagem.textContent = nomeImagem;

    let pNovoImagem = document.createElement("p");
    pNovoImagem.textContent = descricaoImagem;

    novoImagem.appendChild(novaImagemImage);
    novoImagem.appendChild(h3NovoImagem);
    novoImagem.appendChild(pNovoImagem);
    
    let secaoImagem = document.getElementById("section_masculino");
    secaoImagem.appendChild(novoImagem);
 }