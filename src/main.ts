import { CustomFileReader } from "./file_reader";
import { Date01Part02Solution } from "./date-01/date_01_part02_solution";

const fileReader = new CustomFileReader("src/date-01", "input_02.txt");
const sol = new Date01Part02Solution(fileReader.read());
console.log(sol.solve());
