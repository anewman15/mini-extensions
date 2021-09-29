import { SAVE_CLASSES } from "./types";

const saveClasses = (classesData: any) => (
  {
    type: SAVE_CLASSES,
    payload: {
      classesData,
    }
  }
);

export default saveClasses;
