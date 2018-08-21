import router from '../router'

class Core {
  // go to the specified route
  go(name, params = {}) {
    router.push({name, params})
  }

  // return true if the value is [], {}, "", null, undefined
  empty(val) {
      return _.isEmpty(val) && !_.isNumber(val) && !_.isDate(val);
  }

  // save to local storage
  saveLocal(prop, val) {
      val = !_.isString(val) ? JSON.stringify(val) : val;
      localStorage.setItem(prop, val);
  }

  // get from local storage
  getLocal(prop) {
      let res;
      // maybe it is json?
      try {
              res = JSON.parse(localStorage.getItem(prop));
      } catch (err) {
              res = localStorage.getItem(prop);
      }

      return res;
  }

  // remove from local storage
  removeLocal(prop) {
      localStorage.removeItem(prop);
  }

  // truncate the string and given length (cut) adding ... if truncate
  truncate(string, cut) {
      cut = cut || 30
      if (string !== undefined && string.length > cut) {
          let newString = string.slice(0, cut) + '...';
          return newString;
      } else {
          return string;
      }
  }

  debounce(callback, wait = 300) {
      return _.debounce(callback, wait, {leading: false, trailing: true});
  }
}

export default new Core()