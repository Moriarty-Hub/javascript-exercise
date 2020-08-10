async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  const response = await new Promise(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send();
  });
  document.writeln(JSON.parse(response.data));
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
