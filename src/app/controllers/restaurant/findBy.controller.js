const MongoDBClient = require("../../../shared/infrastructure/database/mongodbClient");
const RestaurantsRepository = require("../../../features/restaurants/infrastructure/persistence/Restaurants.repository");
const FindByIdRestaurantUseCase = require("../../../features/restaurants/application/FindByIdRestaurant.useCase");

class FindByIdRestaurantController {
  static async run(req, res) {
    const { id } = req.params;
    const mongo = new MongoDBClient();
    const repository = new RestaurantsRepository(mongo.client);
    const useCase = new FindByIdRestaurantUseCase(repository);

    const result = await useCase.execute(id);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        status: 'success',
        data: result,
      }),
    );
  }
}

module.exports = FindByIdRestaurantController;
