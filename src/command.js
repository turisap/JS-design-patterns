import uuid from "uuid/v4";

const AuthenticateController = (function() {
  const controller = {
    getAccessToken: () => uuid(),

    authenticate: userId => userId.length > 5,

    logout: userId => console.log(`${userId} has been logged out`)
  };

  controller.execute = function(name) {
    return (
      controller[name] &&
      controller[name].apply(
        controller,
        [...arguments].slice(1, arguments.length)
      )
    );
  };

  return {
    execute: controller.execute
  };
})();

export default AuthenticateController;
