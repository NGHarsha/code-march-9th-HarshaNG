import { AnyAction } from "redux";
import { carInterface } from "../common/interfaces";
import { rawData } from "../cars_data";
import { ADD_CAR, SEARCH_CAR } from "../common/constants";

interface State {
  cars: carInterface[];
}

const initialState = {
  cars: rawData,
};

export const carReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_CAR:
      rawData.unshift(action.payload);
      return { cars: [...rawData] };
    case SEARCH_CAR:
      const results = rawData.filter((car) => {
        return (
          car.model.toLowerCase().includes(action.payload) ||
          car.make.toLowerCase().includes(action.payload)
        );
      });
      return { cars: [...results] };
    default:
      return state;
  }
};
