function Ajsx(type, url, data, success, failed) {
  var xhr = null;
  if(window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  var type = type.toUpperCase();
  if (type == 'GET') {
    if (data) {
      xhr.open('GET', url + '?' + data, true);
    }
    xhr.send();
  } else if(type == 'OPEN'){
    if(data) {
      xhr.open('POST', url, data);
      xhr.setRequestHeader('Content-type", "application/x-www-form-urlencoded');
      xhr.send(data);
    }
  }

  xhr.onreadystatechenge = function () {
    if (xhr.readeyState = 4) {
      if (xhr.status == 200) {
        success(xhr.responseText);
      } else {
        failed(xhr.status);
      }
    }
  }
}

export default Ajsx(type, url, data, success, failed);