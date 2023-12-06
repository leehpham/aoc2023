import { Solution } from "../solution";
import { SolutionData } from "../solution_data";

export class Date02Part01Sol extends SolutionData implements Solution {
  private static readonly MAX_CUBES = {
    red: 12,
    green: 13,
    blue: 14
  };

  private static readonly COLORS = {
    red: "red",
    green: "green",
    blue: "blue"
  };

  solve(): number {
    const gameIDRegex = /^Game \d+/;
    const gameDataRegex = /\d+\s.*$/g;
    const validGameIDs: number[] = [];
    this.lines.forEach(line => {
      const gameIDMatch = line.match(gameIDRegex);
      let gameID = 0;
      if (gameIDMatch) {
        gameID = parseInt(gameIDMatch[0].split(" ")[1]);
      }
      const gameData = line.match(gameDataRegex)?.[0] ?? "";
      const sets = gameData.split(";").map(data => data.trim());
      let isValidSets = true;
      sets.forEach(set => {
        const cubeCounts = set.split(",").map(cubeCount => cubeCount.trim());
        cubeCounts.forEach(cubeCount => {
          const countColor = cubeCount.split(" ");
          if (countColor[1] === Date02Part01Sol.COLORS.blue && parseInt(countColor[0]) > Date02Part01Sol.MAX_CUBES.blue) {
            isValidSets = false;
          }
          if (countColor[1] === Date02Part01Sol.COLORS.red && parseInt(countColor[0]) > Date02Part01Sol.MAX_CUBES.red) {
            isValidSets = false;
          }
          if (countColor[1] === Date02Part01Sol.COLORS.green && parseInt(countColor[0]) > Date02Part01Sol.MAX_CUBES.green) {
            isValidSets = false;
          }
        });
      });
      if (isValidSets) {
        validGameIDs.push(gameID);
      }
    });
    return validGameIDs.reduce((acc, current) => acc + current, 0);
  }
}
