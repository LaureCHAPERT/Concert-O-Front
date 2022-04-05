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
    {
      id: 3,
      name: 'Bretagne',
    },
    {
      id: 4,
      name: 'Rhônes Alpes',
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
