import { signInBody } from "../types";
import api from "./api"

function signInUser(body: signInBody) {
    const promisse = api.post("/signin", body);
    return promisse;
  }

const authApi = {
    signInUser,
}

export default authApi;