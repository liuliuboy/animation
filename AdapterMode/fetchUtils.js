class FetchUtils {
  static get() {
    new Promise((resolve, reject) => {
      fetch(url).then((resuponse) => {
        resuponse.json();
      }).then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err)
      })
    })
  }

  static post() {
    new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Conent-Type': 'application/x-www-form-urlencoded',
          body: this.changeData(data)
        }
      }).then((resuponse) => {
        resuponse.json();
      }).then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      })
    })
  }

  static changeData(data = {}) {
    var prop, str = '';
    var i = 0;
    for (const k in data) {
      if (data.hasOwnProperty(k)) {
        let value = data[k];
        if (i == 0) {
          str = prop + '=' + value;
        } else {
          str = '&' + prop + '=' + value;
        }
      }
      i++
    }
    return str;
  }
}

var fetchUtils = new FetchUtils();
export default fetchUtils;
