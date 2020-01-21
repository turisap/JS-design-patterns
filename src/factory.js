import faker from "faker";
import { times } from "ramda";

function Admin({ name, supervisor, claster }) {
  this.name = name || faker.internet.userName();
  this.supervisor = supervisor || faker.random.boolean();
  this.claster = claster || faker.random.uuid();
}

function User({ name, posts }) {
  this.name = name || faker.internet.userName();
  this.posts = posts || times(() => faker.company.catchPhrase(), 5);
}

function UserFactory() {}

UserFactory.prototype.userClass = User;

UserFactory.prototype.createUser = function(options, n) {
  switch (options.userType) {
    case "admin":
      this.userClass = Admin;
      break;
    case "user":
      this.userClass = User;
      break;
  }

  return times(() => new this.userClass(options), n);
};

export default new UserFactory();
