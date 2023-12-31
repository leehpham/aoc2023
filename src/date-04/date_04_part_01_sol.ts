import { Solution } from "../solution";
import { SolutionData } from "../solution_data";

export class Date04Part01Sol extends SolutionData implements Solution {
  solve(): number {
    const winningNumsRegex = /(?<=:\s+)\d.*(?=\s+\|)/g;
    const ownedNumsRegex = /(?<=\|\s+)\d.*$/g;
    const wonNumsCounts: number[] = [];
    this.lines.forEach(line => {
      const winningNums = line.match(winningNumsRegex)?.[0].split(/\s+/).map(item => parseInt(item)) ?? [];
      const ownedNums = line.match(ownedNumsRegex)?.[0].split(/\s+/).map(item => parseInt(item)) ?? [];
      let wonNumsCount = 0;
      ownedNums.forEach(ownedNum => {
        if (winningNums.includes(ownedNum)) {
          wonNumsCount++;
        }
      });
      wonNumsCounts.push(wonNumsCount);
    });
    return wonNumsCounts.reduce((acc, current) => {
      if (current > 0) {
        return acc + 2 ** (current - 1);
      } else {
        return acc;
      }
    }, 0);
  }
}
