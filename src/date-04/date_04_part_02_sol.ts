import { Solution } from "../solution";
import { SolutionData } from "../solution_data";

export class Date04Part02Sol extends SolutionData implements Solution {
  private readonly cardMatch: { [key: string]: number };
  private readonly cardCount: { [key: string]: number };

  constructor(lines: string[]) {
    super(lines);
    this.cardMatch = {};
    this.cardCount = {};
  }

  solve(): number {
    this.buildCardMatch();
    return Object.keys(this.cardMatch).reduce((acc, card) => acc + this.getCardsWon(card), 0);
  }

  private getCardsWon(card: string): number {
    if (Object.keys(this.cardCount).includes(card)) {
      return this.cardCount[card];
    }
    const nextCards = this.getNextCards(card, this.cardMatch[card]);
    if (!nextCards.length) {
      return 1;
    }
    let numCardsWon = 1;
    nextCards.forEach(card => {
      numCardsWon += this.getCardsWon(card);
    });
    if (!Object.keys(this.cardCount).includes(card)) {
      this.cardCount[card] = numCardsWon;
    }
    return numCardsWon;
  }

  private getNextCards(card: string, match: number): string[] {
    const nextCards: string[] = [];
    for (let i = 0; i < match; i++) {
      nextCards.push(`${parseInt(card) + i + 1}`);
    }
    return nextCards;
  }

  private buildCardMatch(): void {
    const cardNumRegex = /\d+(?=:)/g;
    const winningNumsRegex = /(?<=:\s+)\d.*(?=\s+\|)/g;
    const ownedNumsRegex = /(?<=\|\s+)\d.*$/g;
    this.lines.forEach(line => {
      const cardNum = line.match(cardNumRegex)?.[0] ?? "0";
      
      const winningNums = line.match(winningNumsRegex)?.[0].split(/\s+/).map(item => parseInt(item)) ?? [];
      const ownedNums = line.match(ownedNumsRegex)?.[0].split(/\s+/).map(item => parseInt(item)) ?? [];
      
      let wonNumsCount = 0;
      ownedNums.forEach(ownedNum => {
        if (winningNums.includes(ownedNum)) {
          wonNumsCount++;
        }
      });

      this.cardMatch[cardNum] = wonNumsCount;
    });
  }
}
