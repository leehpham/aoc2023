import { CustomFileReader } from "./file_reader";
import { Date01Part01Solution } from "./date-01/date_01_part01_solution";

const fileReader = new CustomFileReader("src/date-01", "input.txt");
const date01Sol = new Date01Part01Solution(fileReader.read());

console.log(date01Sol.solve());
