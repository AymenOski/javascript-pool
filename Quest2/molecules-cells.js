/*

Instructions
Create two functions which accept a string, and return a string:

RNA: that converts a DNA strand into its compliment RNA strand.

DNA: that converts an RNA strand into its compliment DNA strand.

Compliments:

DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U
Each strand must be represented as upper case string, without spaces, eg: "ATCG" is a valid DNA strand.

*/


const RNA = (dna) => {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    const char = dna[i];
    if (char === "G") result += "C";
    else if (char === "C") result += "G";
    else if (char === "T") result += "A";
    else if (char === "A") result += "U";
  }
  return result;
};

const DNA = (rna) => {
  let result = "";
  for (let i = 0; i < rna.length; i++) {
    const char = rna[i];
    if (char === "C") result += "G";
    else if (char === "G") result += "C";
    else if (char === "A") result += "T";
    else if (char === "U") result += "A";
  }
  return result;
};
