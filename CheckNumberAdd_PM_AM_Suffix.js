const getSuffix = (num) => num === 0 || num === 24
                            ? 12 + "AM"
                            : num === 12 ? 12+"PM"
                            : num < 12 ? (num % 12) + "AM"
                            : (num % 12) + "PM";
console.log(getSuffix(0));
console.log(getSuffix(24));
console.log(getSuffix(13));
console.log(getSuffix(25));