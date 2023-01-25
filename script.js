var caixaRespostaVazia = document.querySelector('.resposta-vazia')
var caixaRespostaPreenchida = document.querySelector('.resposta-preenchida')

var botaoCriptografa = document.querySelector('.criptografar')
var botaoDescriptografa = document.querySelector('.descriptografar')
var botaoCopia = document.querySelector('.botao-copia')
var botaoLimpaTexto = document.querySelector('.limpa-tela')

var textarea = document.querySelector('.textarea')
var textoCodificado = document.querySelector('.texto-codificado')

function mostraCaixaResposta() {
  if (textarea.value !== '') {
    caixaRespostaVazia.style.display = 'none'
    caixaRespostaPreenchida.style.display = 'block'
  }
}

function criptografaTexto() {
  var conteudoTextarea = textarea.value

  //replace com regex
  var resultadoCriptografado = conteudoTextarea
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

  textoCodificado.innerHTML = resultadoCriptografado

  mostraCaixaResposta()
}

function descriptografaTexto() {
  conteudoTextarea = textarea.value

  //replace sem regex com flag global

  var resultadoDescriptografado = conteudoTextarea
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')

  textoCodificado.innerHTML = resultadoDescriptografado

  mostraCaixaResposta()
}

function copiaTextoCaixa() {
  textoCodificado.select() //esse select() só funcionou quando mudei o textoCodificado para <textarea>, antes era <p> e aí não funciona
  document.execCommand('copy')
}

function limpaTexto() {
  textarea.value = ''
  caixaRespostaVazia.style.display = 'block'
  caixaRespostaPreenchida.style.display = 'none'
}

botaoCriptografa.onclick = criptografaTexto
botaoDescriptografa.onclick = descriptografaTexto
botaoCopia.onclick = copiaTextoCaixa
botaoLimpaTexto.onclick = limpaTexto

//document.querySelector(".botao-copia").addEventListener("click", copiaTextoCaixa);