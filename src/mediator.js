const log = [];

const Participant = function(name) {
  this.name = name;
};

Participant.prototype.send = function(message, to) {
  this.chatroom.send(message, this, to);
};

Participant.prototype.receive = function(message, from) {
  log.push(`from: ${from.name} to: ${this.name} message: ${message}`);
  console.log(message, from.name);
};

const Chatroom = function(id) {
  this.id = id;
};

Chatroom.prototype.participants = {};

Chatroom.prototype.register = function(participant) {
  this.participants[participant.name] = participant;
  participant.chatroom = this;
};

Chatroom.prototype.send = function(message, from, to) {
  if (to) {
    to.receive(message, from);
  } else {
    for (let key in this.participants) {
      if (this.participants[key] !== from) {
        this.participants[key].receive(message, from);
      }
    }
  }
};

export { Participant, Chatroom, log };
