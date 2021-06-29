module.exports = {
  mongoURI: process.env.MONGO_URI,
  options: {
    useNewurlPraser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
};
