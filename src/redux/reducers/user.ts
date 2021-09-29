
const user = (state = {}, action: any) => {
  switch (action.type) {
    case 'SAVE_USER': {
      return action.payload.userData
    }
    default: {
      return state;
    }
  }
};

export default user;
