function calcularMedia() {
  const n1 = parseFloat(document.getElementById('nota1').value) || 0;
  const n2 = parseFloat(document.getElementById('nota2').value) || 0;
  const n3 = parseFloat(document.getElementById('nota3').value) || 0;
  const n4 = parseFloat(document.getElementById('nota4').value) || 0;

  const media = (n1 + n2 + n3 + n4) / 4;
  const status = media >= 60 ? 'Aprovado' : 'Reprovado';

  document.getElementById('resultado').innerText = `${status}\nNota final: ${media.toFixed(1)}`;
}