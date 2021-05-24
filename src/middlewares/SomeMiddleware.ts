exports.someMiddlewareTest = (req, res, next) => {
  console.log('this is a middleware test!');
  next();
};
