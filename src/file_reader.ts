import * as fs from "fs";
import * as path from "path";

export class CustomFileReader {
  private folderPath: string;
  private inputFile: string;

  constructor(folderPath: string, inputFile: string) {
    this.folderPath = folderPath;
    this.inputFile = inputFile;
  }

  read(): string[] {
    const input = fs.readFileSync(path.join(process.cwd(), this.folderPath, this.inputFile), "utf8"); 
    return input.split("\n").filter(line => !!line);
  }
}
