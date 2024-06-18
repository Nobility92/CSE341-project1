const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');
const objectid = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('User').find();
    result.toArray().then((User) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(User);
  });
};

const getSingle = async (req, res) => {
    const userId = new objectid (req.params.id);
    const result = await mongodb.getDatabase().db().collection('User').find({_id: userId});
    result.toArray().then((User) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(User[0]);
  });
};

module.exports = {
    getAll,
    getSingle
}
