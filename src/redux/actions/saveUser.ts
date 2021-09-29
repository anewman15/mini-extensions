import { SAVE_USER } from "./types";

const saveUser = (userData: any) => (
  {
    type: SAVE_USER,
    payload: {
      userData,
    }
  }
);

export default saveUser;
