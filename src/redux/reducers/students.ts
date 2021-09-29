type Action = {
  type: string,
  payload: {
    studentsData: {
      'string': 'string'
    }
  }
};


const students = (state = [], action: Action) => {
  switch (action.type) {
    case 'SAVE_STUDENTS': {
      return action.payload.studentsData
    }
    default: {
      return state;
    }
  }
};

export default students;
