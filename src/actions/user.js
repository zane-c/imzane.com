export const SET_USER = 'SET_USER';
export const setUser = (uid, user) => ({
  type: SET_USER,
  uid,
  user,
});
