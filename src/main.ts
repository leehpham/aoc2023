import { CustomFileReader } from "./file_reader";
import { Date03Part01Sol } from "./date-03/date_03_part_01_sol";

const fileReader = new CustomFileReader("src/date-03", "sample_input_01.txt");
const sol = new Date03Part01Sol(fileReader.read());
console.log(sol.solve());
