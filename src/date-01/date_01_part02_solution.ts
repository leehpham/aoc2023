import { Solution } from "../solution";
import { SolutionData } from "../solution_data";

export class Date01Part02Solution extends SolutionData implements Solution {
  private static readonly TEXT_TO_NUM: { [key: string]: number } = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
  };

  solve(): number {
    const regex = /\d|(?=(one|two|three|four|five|six|seven|eight|nine))/g;
    const numbers = this.lines.map(line => {
      let regexExecArr: RegExpExecArray | null;
      const tokens: number[] = [];
      while ((regexExecArr = regex.exec(line))) {
        if (regexExecArr[1] === undefined) {
          tokens.push(parseInt(regexExecArr[0]));
        } else {
          tokens.push(Date01Part02Solution.TEXT_TO_NUM[regexExecArr[1]]);
          regex.lastIndex = regexExecArr.index + 1;
        }
      }
      if (tokens.length) {
        return parseInt(`${tokens[0]}${tokens[tokens.length-1]}`);
      }
    }).filter((num): num is number => !!num);
    return numbers.reduce((acc, current) => acc + current, 0);
  }
}
