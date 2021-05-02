import Api from "./Api";

export default {
  login(form) {
    return Api().post("users/login", form);
  },

  logout() {
    return Api().post("user/logOut");
  },

  auth() {
    return Api().get("user/profile");
  },
};
