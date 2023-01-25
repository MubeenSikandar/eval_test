export default (calls = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return calls;
        default:
           return calls;
  }
}