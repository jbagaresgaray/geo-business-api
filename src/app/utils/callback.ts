"use strict";

export const setupResponseCallback = (res: any) => {
  return (error: any, returnValue: any) => {
    if (error) {
      return res.status(500).json(error);
    }
    return res.status(200).json(returnValue);
  };
};
