const { ObjectId } = require('mongodb');

class RestaurantsRepository {
  #collectionName = 'restaurants';

  constructor(client) {
    this._client = client;
  }

  async getAll(skip, limit) {
    return this._client.db().collection(this.#collectionName).find().limit(Number(limit)).skip(Number(skip)).toArray();
  }

  async findById(id) {
    const _id = new ObjectId(id);
    return this._client
      .db()
      .collection(this.#collectionName)
      .findOne({ _id });
  }
}

module.exports = RestaurantsRepository;
