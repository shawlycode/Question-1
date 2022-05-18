let btnConvert = document.querySelector("button");
let input = document.querySelector("input");
let output = document.querySelector("h1");

btnConvert.addEventListener("click", () => {
  output.innerText = numberToWords.toWords(input.value);
});
