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
