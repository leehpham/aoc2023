export class Date01Part01Solution {
  private lines: string[];

  constructor(lines: string[]) {
    this.lines = lines;
  }

  solve(): number {
    const numRegEx = /\d/g;
    const numbers = this.lines.map(line => {
      const numChars = line.match(numRegEx);
      if (numChars) {
        return parseInt(`${numChars[0]}${numChars[numChars.length - 1]}`);
      }
    }).filter((num): num is number => !!num);
    return numbers.reduce((acc, current) => acc + current, 0);
  }
}
