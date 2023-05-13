let FORCA = document.getElementById("FOR_BASE");
let DESTREZA = document.getElementById("DES_BASE");
let CONSTITUICAO = document.getElementById("CON_BASE");
let INTELIGENCIA = document.getElementById("INT_BASE");
let SABEDORIA = document.getElementById("SAB_BASE");
let CARISMA = document.getElementById("CAR_BASE");
let TOTAL_PTS = document.getElementsByClassName("valorPontos")[0];
let BOTAO_DADO = document.getElementById("dado")
let CALC_BTN = document.getElementById("calcular");
let RESETAR_BTN = document.getElementById("resetar");

// Marcadores de modificadores
let for_mod = document.getElementById("for_mod");
let des_mod = document.getElementById("des_mod");
let con_mod = document.getElementById("con_mod");
let int_mod = document.getElementById("int_mod");
let sab_mod = document.getElementById("sab_mod");
let car_mod = document.getElementById("car_mod");


CALC_BTN.addEventListener('click', calcular);
RESETAR_BTN.addEventListener('click', recarregar_pagina);
BOTAO_DADO.addEventListener('click', campos_d20);

function calcular() {

    let TOTAL_FORCA = document.getElementById('FOR_TOTAL');
    let TOTAL_DESTREZA = document.getElementById('DES_TOTAL');
    let TOTAL_CONSTITUICAO = document.getElementById('CON_TOTAL');
    let TOTAL_INTELIGENCIA = document.getElementById('INT_TOTAL');
    let TOTAL_SABEDORIA = document.getElementById('SAB_TOTAL');
    let TOTAL_CARISMA = document.getElementById('CAR_TOTAL');

    TOTAL_FORCA.value = Number(FORCA.value) + Number(for_mod.value);
    TOTAL_DESTREZA.value = Number(DESTREZA.value) + Number(des_mod.value);
    TOTAL_CONSTITUICAO.value = Number(CONSTITUICAO.value) + Number(con_mod.value);
    TOTAL_INTELIGENCIA.value = Number(INTELIGENCIA.value) + Number(int_mod.value);
    TOTAL_SABEDORIA.value = Number(SABEDORIA.value) + Number(sab_mod.value);
    TOTAL_CARISMA.value = Number(CARISMA.value) + Number(car_mod.value);
}

function gerar_numero_aleatorio() {
    let array_numeros_aleatorios = [];

    for (let i = 0; i < 6; i++) {
        array_numeros_aleatorios[i] = Math.floor(20 * Math.random() + 1);
    }
    return array_numeros_aleatorios;
}

function campos_d20() {
    let for_d20 = document.getElementById("for_d20");
    let des_d20 = document.getElementById("des_d20");
    let con_d20 = document.getElementById("con_d20");
    let int_d20 = document.getElementById("int_d20");
    let sab_d20 = document.getElementById("sab_d20");
    let car_d20 = document.getElementById("car_d20");

    numeros_d20 = gerar_numero_aleatorio();

    for_d20.value = numeros_d20[0];
    des_d20.value = numeros_d20[1];
    con_d20.value = numeros_d20[2];
    int_d20.value = numeros_d20[3];
    sab_d20.value = numeros_d20[4];
    car_d20.value = numeros_d20[5];

    modificador(numeros_d20);
}

function recarregar_pagina() {
    window.location.reload(true);
}

function modificador(numeros_aleatorios) {
    let for_mod = document.getElementById("for_mod");
    let des_mod = document.getElementById("des_mod");
    let con_mod = document.getElementById("con_mod");
    let int_mod = document.getElementById("int_mod");
    let sab_mod = document.getElementById("sab_mod");
    let car_mod = document.getElementById("car_mod");
    numeros_d20 = numeros_aleatorios;
    let mod = []

    for (let i = 0; i < 6; i++) {
        valor = numeros_d20[i];
        console.log(numeros_d20);
        console.log(valor);
        if (valor > 15) {
            mod[i] = Math.round(1 + (valor / 1.2));
        } else if (valor > 7) {
            mod[i] = (0 + (valor / 1.2)).toFixed(0);
        } else {
            mod[i] = Math.round(-1 + (valor / 1.2));
        }
    }
    for_mod.value = mod[0];
    des_mod.value = mod[1];
    con_mod.value = mod[2];
    int_mod.value = mod[3];
    sab_mod.value = mod[4];
    car_mod.value = mod[5];
}