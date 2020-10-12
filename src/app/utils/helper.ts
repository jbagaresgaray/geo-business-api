"use strict";

export const helper = (server: any, config: any, _log: any) => {
  const port = process.env.PORT || 3000;
  server.listen(port, "0.0.0.0", (errs: any) => {
    if (errs instanceof Error) {
      console.log(
        "ENVIRONMENT: ",
        config.env,
        " Unable to start Server",
        config.port
      );
    } else {
      console.log(
        "ENVIRONMENT: ",
        config.env,
        " Server started at PORT: ",
        config.port,
        " Using API VERSION: ",
        config.api_version
      );
    }
  });
};

// SOURCE OF FORMULA AND RESEARCH
// http://www.movable-type.co.uk/scripts/latlong.html

export const Deg2Rad = (deg: number) => {
  return (deg * Math.PI) / 180;
};

export const PythagorasEquirectangular = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  lat1 = Deg2Rad(lat1);
  lat2 = Deg2Rad(lat2);
  lon1 = Deg2Rad(lon1);
  lon2 = Deg2Rad(lon2);

  const R = 6371; // Radius of the earth in km
  const x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  const y = lat2 - lat1;
  const d = Math.sqrt(x * x + y * y) * R;
  return d;
};

export const getDistanceFromLatLonInKm = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371; // Radius of the earth in km
  const dLat = Deg2Rad(lat2 - lat1); // Deg2Rad below
  const dLon = Deg2Rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(Deg2Rad(lat1)) *
      Math.cos(Deg2Rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // return Distance in km
  return d;
};
