const Places = require("../../database/models/place.model");

module.exports.store = async (req, res) => {
  const { name, phone, opening_hours, description, latitude, longitude } =
    req.body;

  const body = {
    name,
    phone,
    opening_hours,
    description,
    latitude,
    longitude,
  };

  const place = await Places.create(body);

  res.status(201).send({ message: `Adicionado Place com id:${place.id}` });
  return;
};

module.exports.index = async (req, res) => {
  const places = await Places.findAll();
  return res.status(200).send({ places: places });
};

module.exports.destroy = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);

  try {
    const place = await Places.findOne({
      where: {
        id: id,
      },
    });
    if (place) {
      Places.destroy({ where: { id: id } });
      res.status(204).send();
      return;
    } else {
      res.status(400).send({ message: "ID não localizado" });
      return;
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};
