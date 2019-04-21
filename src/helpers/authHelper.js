import jwtDecode from "jwt-decode";
import SuperFetch from "./superFetch";

class AuthHelper {
  login = async userInfo => {
    if (!userInfo.email || !userInfo.password) {
      return { error: "please fill in the input" };
    }
    return await SuperFetch.post("login", userInfo).then(response => {
      return this.checkExpirity(response.data);
    });
  };
  async checkDemoPage(token) {
    if (this.checkExpirity(token).error) {
      return { error: "Token expired" };
    }
    return await SuperFetch.get("secret/test", { token })
      .then(response => ({
        status: "200",
        message: "Success"
      }))
      .catch(error => ({ error: JSON.stringify(error) }));
  }
  checkExpirity = data => {
    if (!data) {
      return {
        error: "no data"
      };
    }
    try {
      // const profile = jwtDecode(token);

      // const expiredAt = profile.expiredAt || profile.exp * 1000;
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + 1);

      // if (expiredAt > new Date().getTime()) {
      return {
        data,
        expiredAt: date
      };
      // } else {
      //   return { error: "Token expired" };
      // }
    } catch (e) {
      console.log(e);

      return { error: "Server Error" };
    }
  };
}
export default new AuthHelper();
