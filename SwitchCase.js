function colorirFundo(){
    document.body.bgColor = "#ffffff";
    document.body.style.color = "#000000";

    let txtCor = document.getElementById("txtCor");
    let cor = txtCor.value.toLowerCase();
    
        switch (cor) { // vai detectar a cor e se a cor existir ele irá fazer a troca 
            case "azul" :
                document.body.bgColor = "aqua";
                break;
            case "preto" :
                document.body.bgColor = "black";
                document.body.style.color = "white";
                break;
            case "roxo" :
                document.body.bgColor = "purple";
                break;
            case "vermelho" :
                document.body.bgColor = "red";
                break;
            case "amarelo" :
                document.body.bgColor = "yellow";
                break;
            case "verde" :
                document.body.bgColor = "green";
                break;
            case "rosa" :
                document.body.bgColor = "pink";
                break;
            case "cinza" :
                document.body.bgColor = "gray";
                document.body.style.color = "white";
                break;
            case "roxa" :
                document.body.bgColor = "purple";
                break;
            case "preta" :
                document.body.bgColor = "black";
                document.body.style.color = "white";
                break;
            case "amarela" :
                document.body.bgColor = "yellow";
                break;
            case "vermelha" :
                document.body.bgColor = "red";
                break;
            default:
                document.body.bgColor = "white";
                break;
            
        }
}
document.getElementById("txtCor").addEventListener('keyup', function (){
    colorirFundo();
})
function colorirTexto(){
        let cor = document.getElementById("txtCorTexto").value.toLowerCase();
    
        switch (cor) { // vai detectar a cor e se a cor existir ele irá fazer a troca 
            case "azul" :
                document.body.style.color = "aqua";
                break;
            case "preto" :
                document.body.style.color = "black";
                break;
            case "roxo" :
                document.body.style.color = "purple";
                break;
            case "vermelho" :
                document.body.style.color = "red";
                break;
            case "amarelo" :
                document.body.style.color = "yellow";
                break;
            case "verde" :
                document.body.style.color = "green";
                break;
            case "rosa" :
                document.body.style.color = "pink";
                break;
            case "cinza" :
                document.body.style.color = "gray";
                break;
            case "roxa" :
                document.body.style.color = "purple";
                break;
            case "preta" :
                document.body.style.color = "black";
                break;
            case "amarela" :
                document.body.style.color = "yellow";
                break;
            case "vermelha" :
                document.body.style.color = "red";
                break;
            default:
                document.body.style.color = "white";
                break;
            
        }
}
document.getElementById("txtCorTexto").addEventListener('keyup', function (){
    colorirTexto();
})