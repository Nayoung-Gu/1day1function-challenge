// 모던 자바스크립트 https://ko.javascript.info/async-await#tasks
// then, catch문을 async, await으로 변환하세요.
function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("no-such-user.json").catch(alert); // Error: 404

// Answer
async function loadJson(url) {
  // (1)
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

loadJson("no-such-user.json").catch(alert); // Error: 404 (4)
