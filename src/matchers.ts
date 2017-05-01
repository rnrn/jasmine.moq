import {moqToHaveBeenCalledMatcher} from './toHaveBeenCalledMatcher';

// 3rd party modules
const addMatchers = require('add-matchers');

// implementation
export const matchersByName = {
  toHaveBeenCalledMatcher: moqToHaveBeenCalledMatcher,
};

addMatchers(matchersByName);
