exports.getController = (req, res) => {
  res.render('index');
};

exports.postController = (req, res) => {
  res.send('Unable to post in this route');
};
