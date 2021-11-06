import { getAuth, signInWithPopup } from 'firebase/auth';

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
  }

  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return signInWithPopup(this.firebaseAuth, authProvider);
  }
}

export default AuthService;
