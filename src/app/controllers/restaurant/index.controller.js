const MongoDBClient = require('../../../shared/infrastructure/database/mongodbClient');
const RestaurantsRepository = require('../../../features/restaurants/infrastructure/persistence/Restaurants.repository');
const GetAllRestaurantsUseCase = require('../../../features/restaurants/application/GetAllRestaurants.useCase');

class RestaurantIndexController {
  static async run(req, res) {
    const { query } = req;
    const mongo = new MongoDBClient();
    const repository = new RestaurantsRepository(mongo.client);
    const useCase = new GetAllRestaurantsUseCase(repository);

    const result = await useCase.execute(query.page, query.limit);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        status: 'success',
        data: {
          result,
          page: query.page,
          limit: query.limit,
        },
      }),
    );
  }
}

module.exports = RestaurantIndexController;
