export const scrambleText = (element, finalText, iteration) => {
  const characters = "qwertyuiop@[asdfghjkl;:]zxcvbnm,./_";
  const maxIterations = 8;
  const progress = Math.min(iteration / maxIterations, 1);

  const text = finalText
    .split("")
    .map((char, index) => {
      if (progress > index / finalText.length) {
        return char;
      }
      return characters[Math.floor(Math.random() * characters.length)];
    })
    .join("");

  if (element.innerText !== text) {
    element.innerText = text;
  }

  if (iteration < maxIterations) {
    setTimeout(() => scrambleText(element, finalText, iteration + 1), 40);
  }
};
