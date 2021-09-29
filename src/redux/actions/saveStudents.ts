import { SAVE_STUDENTS } from "./types";

const saveStudents = (studentsData: any) => (
  {
    type: SAVE_STUDENTS,
    payload: {
      studentsData,
    }
  }
);

export default saveStudents;
