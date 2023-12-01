import { CustomFileReader } from "./file_reader";
import { Date01Solution } from "./date-01/date_01";

const fileReader = new CustomFileReader("src/date-01", "input.txt");
const date01Sol = new Date01Solution(fileReader.read());

console.log(date01Sol.solve());
