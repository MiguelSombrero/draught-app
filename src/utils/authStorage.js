import * as SecureStore from 'expo-secure-store';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getLoggedUser() {
    const user = await SecureStore.getItemAsync(
      `${this.namespace}-user`,
    );

    return user ? JSON.parse(user) : null;
  }

  async setLoggedUser(user) {
    await SecureStore.setItemAsync(
      `${this.namespace}-user`, JSON.stringify(user),
    );
  }

  async removeLoggedUser() {
    await SecureStore.deleteItemAsync(`${this.namespace}-user`);
  }
}

export default AuthStorage;