
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render('user', { title: 'User List' + req.params.name, layout: true });
};

exports.node = function(req, res){
    res.render('node', { title: 'node List', datum: req.params, layout: true });
};