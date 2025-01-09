class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res, next) {
    try {
      const listaDeRegistros = await this.serviceEntity.getAll();
      return res.status(200).json(listaDeRegistros);
    } catch (e) {}
  }
}

module.exports = Controller;
