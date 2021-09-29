const classes = (state = [], action: any) => {
  switch (action.type) {
    case 'SAVE_CLASSES': {
      return action.payload.classesData
    }
    default: {
      return state;
    }
  }
};

export default classes;
