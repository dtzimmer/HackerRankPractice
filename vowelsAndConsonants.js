function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];

  [...s].map((char) => {
    if ("aeiou".includes(char)) vowels.push(char);
    else consonants.push(char);
  });

  vowels.map((v) => console.log(v));
  consonants.map((c) => console.log(c));
}
