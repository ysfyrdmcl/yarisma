import RestApis from "./RestApis";

const AuthService={
    register: RestApis.authService+"/auth/register",
    login: RestApis.authService+"/auth/dologin",
}
export default AuthService;