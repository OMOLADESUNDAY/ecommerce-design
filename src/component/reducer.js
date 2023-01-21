export const reducer = (state, action) => {
  if (action.type === "CHANGING NAME") {
    const newName = action.payload;
    return { ...state, name: newName };
  }
  // throw new Error('No matching action type')
};