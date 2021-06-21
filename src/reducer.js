export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    //remove after finished developing  || because to stop rerendering continously and can be able to login again
    "BQCZjIDuMk7fFHMcau-j8HgCuGWqrsnTtet0y_iAwh_BNlfqsDgYA9-9aV5-y4n3InaeOA4VUPgIxrmYXoncHICexk7u68PH06baGp8ChPsTY6-ObUXlqpdU4-0eC8rFm7BN8hHItB_H4BqhNzemC5ActZABQM5w4QK0CP_1DOp4SIqF",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};
export default reducer;
