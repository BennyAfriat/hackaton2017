import { Defect } from './defect.model';

import { ActionReducer, Action } from '@ngrx/store';

export const ADD_DEFECTS = 'ADD_DEFECTS';
export const CREATE_DEFECT = 'CREATE_DEFECT';
export const UPDATE_DEFECT = 'UPDATE_DEFECT';
export const DELETE_DEFECT = 'DELETE_DEFECT';

const comparator = 'id';

export function defects (state: Defect[] = [], action: Action) {
  switch (action.type) {
    case ADD_DEFECTS:
    console.log(action.payload);
      return action.payload;

    case CREATE_DEFECT:
      return [...state, action.payload];

    case UPDATE_DEFECT:
      return state.map(defect => {
        return defect[comparator] === action.payload[comparator] ? Object.assign({}, defect, action.payload) : defect;
      });

    case DELETE_DEFECT:
      return state.filter(defect => {
        return defect[comparator] !== action.payload[comparator];
      });

    default:
      return state;
  }
};
