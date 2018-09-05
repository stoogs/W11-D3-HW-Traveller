const Traveller = function (journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  const journeyStartLocationsArray = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return journeyStartLocationsArray
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEndLocationsArray = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return journeyEndLocationsArray
};

Traveller.prototype.getModesOfTransport = function () {
  const journeyTransportModesArray = this.journeys.map((journey) => {
    return journey.transport;
  })
  return journeyTransportModesArray
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return findByTransportMode = this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return journeysOverMinDistance = this.journeys.filter(journey => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance;
  }, 0);
  return totalDistance;
}

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
