import { Solution } from "../solution";
import { SolutionData } from "../solution_data";

export class Date03Part01Sol extends SolutionData implements Solution {
  solve(): number {
    const bigSum = this.calculateBigSum();
    console.log(bigSum);

    const engineSchematic = this.lines.map(line => line.split(""));
    for (let row = 0; row < engineSchematic.length; row++) {
      for (let col = 0; col < engineSchematic[row].length; col++) {
        if (!this.isLeftSymbol(engineSchematic, row, col)
          && (!this.isTopLeftSymbol(engineSchematic, row, col))
          && (row >= 1 && !this.isSymbol(engineSchematic[row - 1][col]))
          && (row >= 1 && !this.isSymbol(engineSchematic[row -1][col + 1]))
          && (!this.isSymbol(engineSchematic[row][col + 1]))
        ) {
          console.log(engineSchematic[row][col]);
        }
      }
    }
    return -1;
  }

  private isSymbol(char: string): boolean {
    return (char !== "." && !(char.match(/\d/g)));
  }

  private isLeftSymbol(engineSchematic: string[][], row: number, col: number): boolean {
    if (col >= 1) {
      return this.isSymbol(engineSchematic[row][col - 1]);
    } else {
      return false;
    }
  }

  private isTopLeftSymbol(engineSchematic: string[][], row: number, col: number): boolean {
    if (row >= 1 && col >= 1) {
      return this.isSymbol(engineSchematic[row -1][col - 1]);
    } else {
      return false;
    }
  }

  private isTopSymbol(engineSchematic: string[][], row: number, col: number): boolean {
    if (row >= 1) {
      return this.isSymbol(engineSchematic[row - 1][col]);
    } else {
      return false;
    }
  }

  private calculateBigSum(): number {
    const numRegex = /\d+/g;
    return this.lines.map(line => {
      return line.match(numRegex)
        ?.map(num => parseInt(num))
        .reduce((acc, current) => acc + current, 0);
    })
      .filter((lineSum): lineSum is number => !!lineSum)
      .reduce((acc, current) => acc + current, 0);
  }
}
