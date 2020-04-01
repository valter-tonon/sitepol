module.exports = {
    isCurrentPage: function(req, controller, action) {
      return (req.options.controller === controller && req.options.action === action)
    }
  }