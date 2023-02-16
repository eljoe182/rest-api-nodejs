class GetAllRestaurantsUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(page = 1, limit = 10) {
    return this.repository.getAll(page, limit);
  }
}

module.exports = GetAllRestaurantsUseCase;
