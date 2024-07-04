
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('User').find();
    result.toArray().then((User) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(User);
  });
};

const getSingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid User id to find a contact.');
  }
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('User').find({_id: userId});
    result.toArray().then((User) => {
      // if (err) {
      //   res.status(400).json({ message: err });
      // }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(User[0]);
  });
};

const createUser = async (req, res) =>{
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('User').insertOne(user);
    if (response.acknowledged){
      res.status(204).send()
    }else{
      res.status(500).json(response.error || 'Some error occured adding a user');
    }
};

const updateUser = async (req, res) =>{
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid User id to update a User.');
  }
  const userId = new ObjectId(req.params.id);
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('User').replaceOne({_id: userId}, user);
    if (response.modifiedcount > 0){
      res.status(204).send()
    }else{
      res.status(500).json(response.error || 'Some error occured updating a user');
    }
};

const deleteUser = async (req, res) =>{
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid user id to delete a User.');
  }
  const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('User').deleteOne({_id: userId});
    if (response.deletedcount > 0){
      res.status(204).send()
    }else{
      res.status(500).json(response.error || 'Some error occured deleting a user');
    }
};

module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
}
