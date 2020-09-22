const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload };
    case "LOGOUT":
      return {};
    case "VALIDATED_TOKEN":
      return { ...action.payload };

    case "NOT_VALID_TOKEN":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
