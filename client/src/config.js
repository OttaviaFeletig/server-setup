module.exports = {
  serverURL:
    process.env.REACT_APP_NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://server-setup-db.herokuapp.com",
};
