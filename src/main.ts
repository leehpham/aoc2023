import { CustomFileReader } from "./file_reader";
import { Date04Part02Sol } from "./date-04/date_04_part_02_sol";

const fileReader = new CustomFileReader("src/date-04", "input.txt");
const sol = new Date04Part02Sol(fileReader.read());
console.log(sol.solve());
