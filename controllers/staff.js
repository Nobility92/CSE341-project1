
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;


const displayAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('staff').find();
    result.toArray().then((staff) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(staff);
  });
};

const displaySingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid User id to find a staff.');
  }
    const staffId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('staff').find({_id: staffId});
    result.toArray().then((staff) => {
      // if (err) {
      //   res.status(400).json({ message: err });
      // }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(staff[0]);
  });
};

const createStaff = async (req, res) =>{
    const staff = {
      staff_id: req.body.staff_id,  
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      salary: req.body.salary,
      country: req.body.country
    };
    const response = await mongodb.getDatabase().db().collection('staff').insertOne(staff);
    if (response.acknowledged){
      res.status(204).send()
    }else{
      res.status(500).json(response.error || 'Some error occured adding a staff');
    }
};

const updateStaff = async (req, res) =>{
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid User id to update a Staff.');
  }
  const staffId = new ObjectId(req.params.id);
    const staff = {
        staff_id: req.body.staff_id,  
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        salary: req.body.salary,
        country: req.body.country
    };
    const response = await mongodb.getDatabase().db().collection('staff').replaceOne({_id: staffId}, staff);
    if (response.modifiedcount > 0){
      res.status(204).send()
    }else{
      res.status(500).json(response.error || 'Some error occured updating a staff');
    }
};

const deleteStaff = async (req, res) =>{
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid user id to delete a staff.');
  }
  const staffId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('staff').deleteOne({_id: staffId});
    if (response.deletedcount > 0){
      res.status(204).send()
    }else{
      res.status(500).json(response.error || 'Some error occured deleting a staff');
    }
};

module.exports = {
    displayAll,
    displaySingle,
    createStaff,
    updateStaff,
    deleteStaff
}
