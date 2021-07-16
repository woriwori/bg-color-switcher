function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex([r, g, b]) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function rgbStringToHex(str) {
  const exp = /\(([^)]+)\)/;
  const matches = exp.exec(str);

  return rgbToHex(matches[1].split(",").map((v) => Number(v.trim())));
}
