module.exports = {
  serverURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://my-mern-backend001.herokuapp.com",
};
