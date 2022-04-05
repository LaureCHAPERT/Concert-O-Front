const initialState = {
  genres: [
    {
      id: 1,
      name: 'PACA',
    },
    {
      id: 2,
      name: 'Occitanie',
    },
  ],
};

const genresReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default genresReducer;
