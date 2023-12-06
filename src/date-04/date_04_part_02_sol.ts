import { Solution } from "../solution";
import { SolutionData } from "../solution_data";

export class Date04Part02Sol extends SolutionData implements Solution {
  private readonly cardWinCount: { [key: string]: number };
  private readonly cardSetCount: { [key: string]: number };

  constructor(lines: string[]) {
    super(lines);
    this.cardWinCount = {};
    this.cardSetCount = {};
  }

  solve(): number {
    this.buildCardWinCount();
    return Object.keys(this.cardWinCount).reduce((acc, card) => acc + this.getCardSetCount(card), 0);
  }

  private getCardSetCount(card: string): number {
    if (Object.keys(this.cardSetCount).includes(card)) {
      return this.cardSetCount[card];
    }
    const nextCards = this.getNextCards(card, this.cardWinCount[card]);
    if (!nextCards.length) {
      return 1;
    }
    let numCardsInSet = 1;
    nextCards.forEach(card => {
      numCardsInSet += this.getCardSetCount(card);
    });
    if (!Object.keys(this.cardSetCount).includes(card)) {
      this.cardSetCount[card] = numCardsInSet;
    }
    return numCardsInSet;
  }

  private getNextCards(card: string, match: number): string[] {
    const nextCards: string[] = [];
    for (let i = 0; i < match; i++) {
      nextCards.push(`${parseInt(card) + i + 1}`);
    }
    return nextCards;
  }

  private buildCardWinCount(): void {
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
      this.cardWinCount[cardNum] = wonNumsCount;
    });
  }
}
