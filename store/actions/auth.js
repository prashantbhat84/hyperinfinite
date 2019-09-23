export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const signup = async (email, password) => {
  return async dispatch => {
    const response = fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB0DJ6WKIcvdh5Su1KIFxdUKAUJ8TvubWU',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const resData = await response.json();
    console.log(resData);

    return async dispatch => {
      dispatch({ type: SIGNUP });
    };
  };
};
export const login = async (email, password) => {
  return async dispatch => {
    const response = fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB0DJ6WKIcvdh5Su1KIFxdUKAUJ8TvubWU',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const resData = await response.json();
    console.log(resData);

    return async dispatch => {
      dispatch({ type: LOGIN });
    };
  };
};
