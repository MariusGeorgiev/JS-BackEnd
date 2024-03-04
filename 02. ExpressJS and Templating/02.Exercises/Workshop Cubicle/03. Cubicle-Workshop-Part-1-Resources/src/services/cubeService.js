const uniqid = require("uniqid")

const cubes = [];

//name, description, imageUrl, difficultyLevel

exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };

  cubes.push(newCube);
  return newCube;
};

exports.getAll = () => {
  return [...cubes];
};
