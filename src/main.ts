import { CustomFileReader } from "./file_reader";
import { Date04Part01Sol } from "./date-04/date_04_part_01_sol";

const fileReader = new CustomFileReader("src/date-04", "input_01.txt");
const sol = new Date04Part01Sol(fileReader.read());
console.log(sol.solve());
