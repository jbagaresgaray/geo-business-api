import { isEmpty, each } from "lodash";
import * as business from "../services/users";
import {
  getDistanceFromLatLonInKm
  // PythagorasEquirectangular,
} from "../utils/helper";

export const getAllBusiness = (params: any, next: any) => {
  console.log("getAllBusiness 2: ", params);
  business.getAllBusiness().then(
    response => {
      if (!isEmpty(params)) {
        if (params.latitude && params.longitude) {
          const minDif: number = params.radius || 5;
          const closestPlaces: any[] = [];

          each(response, (place: any) => {
            const lat1 = parseFloat(params.latitude);
            const lng1 = parseFloat(params.longitude);

            const lat2 = place.location.lat;
            const lng2 = place.location.lng;

            // const diff = PythagorasEquirectangular(lat1, lng1, lat2, lng2);
            const diffKM = getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2);

            // console.log("diff: ", diff);
            console.log("diff2: ", diffKM);
            if (diffKM < minDif) {
              closestPlaces.push(place);
            }
          });
          return next(null, {
            msg: "",
            result: closestPlaces,
            success: true
          });
        }
      } else {
        return next(null, {
          msg: "",
          result: response,
          success: true
        });
      }
    },
    err => {
      console.log("err: ", err);
      if (err) {
        return next(
          {
            msg: err.msg,
            result: err,
            success: false
          },
          null
        );
      }
    }
  );
};
