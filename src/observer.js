// Oberver

function EventsRegister() {
  this.EventsRegister = new Set();
}

EventsRegister.prototype.add = function(obj) {
  this.EventsRegister.add(obj);
};

EventsRegister.prototype.has = function(obj) {
  this.EventsRegister.has(obj);
};

EventsRegister.prototype.delete = function(obj) {
  this.EventsRegister.delete(obj);
};

// Subject

function Subject() {
  this.observerList = new EventsRegister();
}

Subject.prototype.addObserver = function(observer) {
  if (!this.observerList.has(observer)) {
    this.observerList.add(observer);
  }
};

Subject.prototype.removeObserver = function(observer) {
  this.observerList.delete(observer);
};

Subject.prototype.notify = function(context) {
  this.observerList.EventsRegister.forEach(observer =>
    observer.update(context)
  );
};

// Extension mocking

function extend(obj, extension) {
  for (var key in extension) {
    obj[key] = extension[key];
  }
}

// Concrete subject

const EventEmmiter = {
  start() {
    setInterval(() => this.notify(`${Math.random().toFixed(5)}-event`), 1000);
  }
};

extend(EventEmmiter, new Subject());

// Concrete Observer

const addEventHandler = emiter => {
  const eventHandler = {};

  extend(eventHandler, new EventsRegister());

  eventHandler.update = context => {
    console.log(`I am listening to context of ${context}`);
  };

  emiter.addObserver(eventHandler);
};

export { EventEmmiter, addEventHandler };
