const getQueryStringArgs = str => {
  let qs = location.search.split("?")[1];
  let num = qs.length ? qs.split("&") : [];
  let item = null,
    name = null;
  for (let i = 0, len = num.length; i < len; i++) {
    item = num[i].split("=");
    if (item[0] === str) {
      name = item[1];
      break;
    }
  }
  return name;
};
