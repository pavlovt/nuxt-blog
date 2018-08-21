import axios from 'axios';

class Api {

  constructor() {
    this.defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  send(method, url, data, headers, options) {
    // set default options
    options = _.assign({error: true, getAll: false, wait: true, ajax: {}}, options || {});
     
    data = data || {};
    headers = headers ? headers : {};
    headers = _.assign({}, this.defaultHeaders, headers)

    const token = _.get(store, 'auth.user.token')

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    var promise = new Promise((resolve, reject) => { 
      axios({
        url: this.url(url),
        method, headers, data,
        ...options.ajax,
      })
      .then((res) => {
        // this.progress.done();
        // this.conf.progress = false;

        resolve(_.get(options, 'getAll') ? res : res.data);
      },(err) => {

        if (_.get(options, 'error')) {
          this.handleErrors(err);
        }

        reject(err);
      })
    });

    return promise;

  }

  url(url) {
    if (url.indexOf('token') > -1) {
      return 'http://10.6.0.65/interactivemapapi/api' + url;
    }
    return conf.server.url + url;
  }

  get(url, query, headers, options) {
    return this.send('GET', url, query, headers, options);
  }

  post(url, data, headers, options) {
    return this.send('POST', url, data, headers, options);
  }

  put(url, data, headers, options) {
    return this.send('PUT', url, data, headers, options);
  }

  patch(url, data, headers, options) {
    return this.send('PATCH', url, data, headers, options);
  }

  remove(url, headers, options) {
    return this.send('DELETE', url, {}, headers, options);
  }

  upload(url, file, headers) {
    
  }

  download(url) {
    
  }

  handleErrors(err) {
    console.log('error!', err)
    let message = 'Server error!'

    if (_.get(err, 'response.status') === 401) {
      message = 'Sorry, your e-mail/username and/or password are incorrect. Please try again.'
    } else if (err.response) {
      const errors = _.get(err, 'response.data')

      if (_.isObject(errors)) {
        message = Object.keys(errors).map(k => errors[k]).join('\n')
      } else {
        message = errors
      }
    }

    // setTimeout(() => {        }, 1000)
    msg.error(message)
  }
}

export default new Api()