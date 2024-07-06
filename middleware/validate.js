const validator = require('../helpers/validate');

const saveUser = (req, res, next) => {
  const validationRule = {
        staff_id: 'required|integer',  
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|email',
        password: 'required|string',
        salary: 'required|integer',
        country: 'required|string'
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveUser
};