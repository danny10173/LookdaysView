import { CurrentUserDTO  } from "src/type";
import axios from 'axios';

const INITIAL_USER = {
  id: "",
  username: "",
  email: ""
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};


export async function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");

    if (!jwt) throw Error;

    const res = await axios.get(`${URL}/Member/get-current-user`, {
      headers: { Authorization: jwt },
    });

    const currentUser: CurrentUserDTO = res.data;

    if (!currentUser) throw Error;

    return currentUser;
  } catch (error) {
    console.error(error);
    return null;
  }
}
