import { CustomFileReader } from "./file_reader";
import { Date02Part01Sol } from "./date-02/date_02_part_01_sol";

const fileReader = new CustomFileReader("src/date-02", "input_01.txt");
const sol = new Date02Part01Sol(fileReader.read());
console.log(sol.solve());
