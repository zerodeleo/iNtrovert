const { MongoClient, ObjectId } = require('mongodb');

const ATLAS_URI = process.env.ATLAS_URI;

const connectToDb = async (dbName) => {
  const client = await MongoClient.connect(ATLAS_URI, { useNewUrlParser: true });
  const db = client.db(dbName);
  return db;
};

const getDbCollection = async ({ db, dbCol }) => {
  return col = await db.collection(dbCol);
};

const getDbDocs = async ({ dbName, dbCol }) => {
  const client = await MongoClient.connect(ATLAS_URI, { useNewUrlParser: true });
  const db = await connectToDb(dbName);
  const col = await getDbCollection({ db, dbCol });

  setTimeout(() => client.close(), 1000);

  return col.find().toArray();
};

const getDbDocById = async ({ dbName, dbCol, id }) => {
  const client = await MongoClient.connect(ATLAS_URI, { useNewUrlParser: true });
  const db = await connectToDb(dbName);
  const col = await getDbCollection({ db, dbCol });

  const objectId = new ObjectId(id);

  setTimeout(() => client.close(), 1000);

  return col.findOne({ _id: objectId });
};

const getDbDocByName = async ({ dbName, dbCol, name }) => {
  const client = await MongoClient.connect(ATLAS_URI, { useNewUrlParser: true });
  const db = await connectToDb(dbName);
  const col = await getDbCollection({ db, dbCol });

  setTimeout(() => client.close(), 1000);

  return col.findOne({ name });
};

module.exports = { getDbDocById, getDbDocByName, getDbDocs };
