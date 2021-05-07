import Model from "./Model";

class User extends Model {
  constructor() {
    super();
  }
  login(username, password) {
    return new Promise((res, rej) => {
      this.post("/login", {
        userName: username,
        userPass: password,
      }).then((user) => {
        localStorage.setItem("user", JSON.stringify(user));
        console.log("set!", localStorage.getItem('user'))
        res(user);
      })
        .catch((err) => {
          console.log(err)
          rej(err);
        });
    });
  }
}

export default User;
