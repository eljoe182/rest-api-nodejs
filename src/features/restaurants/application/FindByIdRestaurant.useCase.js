class FindByIdRestaurantUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id) {
    return this.repository.findById(id);
  }
}

module.exports = FindByIdRestaurantUseCase;
