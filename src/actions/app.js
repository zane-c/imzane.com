export const SET_STATE = 'SET_STATE';
export const setState = (key, value) => ({
  type: SET_STATE,
  key,
  value,
});

export const GOTO = 'GOTO';
export const goto = url => ({
  type: GOTO,
  url,
});
