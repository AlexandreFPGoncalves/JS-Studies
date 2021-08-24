const t = (str) => str.length > 1 ? str.slice(-3) + str.slice(0, -3) : str;

console.log(t("JavaScript"));