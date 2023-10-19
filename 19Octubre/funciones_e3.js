//<div>0</div>
/*
function suma(){
    let valor = document.querySelector("div");
    let valor_original = parseInt(valor.textContent);
    //console.log(valor.textContent);//agarramos el contenido de texto del div.
    valor.textContent = (++valor_original);
    compruebaFondo(valor_original);
}
*/

function suma(){
    compruebaFondo(++document.querySelector("div").innerText);
}

function resta(){
    let valor = document.querySelector("div");
    let valor_original = parseInt(valor.textContent);
    //console.log(valor.textContent);//agarramos el contenido de texto del div.
    valor.textContent = (--valor_original);
   compruebaFondo(valor_original);
}
/*
function compruebaFondo(valor){
    let fondoResultado = document.querySelector("#resultado");
    fondoResultado.classList.remove("sumando");
    fondoResultado.classList.remove("restando");
    fondoResultado.classList.remove("nifunifa");
    if(valor > 0){
        fondoResultado.classList.add("sumando");
    }else if(valor < 0){
        fondoResultado.classList.add("restando");
    }else{
        fondoResultado.classList.add("nifunifa");
    }
}
*/

function compruebaFondo(valor){
    document.querySelector("#resultado").setAttribute('class', ['restando', 'nifunifa', 'sumando'][Math.sign(valor) + 1]);
}