import { createSelector } from "reselect";
import lodash from "lodash";
export function getIntegerList(state) {
  return state.ressource.ressourceList;
}

export const getContainsOneList = state => {
  return getIntegerList(state).filter(r => r.toString().indexOf("1") > -1);
};

export const getPrimeNumberList = state => {
  return getIntegerList(state).filter(r => isPrimeNumber(r));
};

function isPrimeNumber(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

export const getSpecialNumbersList = createSelector(
  getContainsOneList,
  getPrimeNumberList,
  (containsOneList, primeNumbersList) => {
    return lodash.intersection(containsOneList, primeNumbersList);
  }
);
