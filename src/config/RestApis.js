 const portAuth = '9090';
 const portUser = '9092';
 const version = '/v1/api';
 const RestApis = {
    authService: "http://34.134.157.21:"+portAuth+version,
    userService: "http://34.69.208.110:"+portUser+version,
 }

 export default RestApis;
