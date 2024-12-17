const CarRental = artifacts.require("CarRental");

module.exports = async function (deployer) {
  await deployer.deploy(CarRental);
  const carRental = await CarRental.deployed();
  console.log("CarRental contract deployed to:", carRental.address);
};