import ajsxUtils from './ajaxUtils';
import fetchUtils from './fetchUtils';

async function AdapterUtils(type, url, data, success, failed) {
  const type = type.toUpperCase();
  let result = {};
  try {
    if (type == 'GET') {
      result = await fetchUtils.get(url);
    } else if (type == 'POST') {
      result = await fetchUtils.open(url, data);
    }
    result.statusCode == 1 && success ? success(result) : failed(result.statusCode);
  } catch (err){
    if(failed) {
      failed(err.statusCode);
    }
  }
}

async function AjsxFnUtils(type, url, data, success, failed) {
  await ajsxUtils(type, url, data, success, failed)
}