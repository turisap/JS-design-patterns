const UserStore = (function() {
  function Signleton() {
    this._data = new Map();

    this._localId = Math.random().toFixed(10);

    this.getItem = id => this._data.get(id);

    this.setItem = item => this._data.set(item.id, item);

    this.logId = () => console.log(this._localId);
  }

  let instance;

  return {
    getInstance: () => {
      if (instance === undefined) {
        instance = new Signleton();
      }
      return instance;
    }
  };
})();

export default UserStore;
