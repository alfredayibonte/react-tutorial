export function authenticationUser({ email, password }) {
  return new Promise(function(resolve, reject) {
    if (email && email.trim() && password && password.trim()) {
      const user = { email, name: email.split('@')[0], isLoggedIn: true };
      localStorage.setItem('user', JSON.stringify(user));
      resolve(user);
    } else {
      reject({ error: 'something happened' });
    }
  });
}

export function getUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export function logoutUser() {
  localStorage.removeItem('user');
}
