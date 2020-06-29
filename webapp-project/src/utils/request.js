// 请求封装
const headers = new Headers({
  "Accept": "application/json",
  "Content-Type": "application/json"
})

function get(url) {
  return fetch(url, {
    method: "GET",
    headers: headers
  }).then(res => {
    // 处理res
    return handleResponse(url, res)
  }).catch(err => {
    console.log(`Request Failed . url=${url}. message"${err}`)
    return Promise.reject({
      error: { message: "request failed" }
    })
  })
}


function post(url, data) {
  return fetch(url, {
    method: "POST",
    headers: headers,
    body: data
  }).then(response => {
    // 处理res
    const re = handleResponse(url, response)
    console.log(re)
    // return re
  }).catch(err => {
    console.log(`Request Failed . url=${url}. message"${err}`)
    return Promise.reject({
      error: { message: "request failed" }
    })
  })
}

// 请求返回数据封装
function handleResponse(url, res) {
  if (res.status === 200) {
    // console.log(res)
    return res.json();
  } else {
    console.log(`Request Failed . url=${url}`)
    return Promise.reject({
      error: { message: "request failed server error" }
    })
  }
}

// 异步获取数据
async function requestListData(url) {
  // const path1 = '/maoyanshlist';
  const result = await get(url)
  if (url === "/maoyanshlist") {
    return formatShowData(result)
  } if (url === "/maoyandklist") {
    return formatDkData(result)
  } else {
    return formatBannerData(result)
  }
}


// 处理展示数据
// console.log(result)
function formatShowData(result) {
  const newData = result.data.map(item => ({
    id: item.performanceId,
    name: item.name,
    posterUrl: item.posterUrl,
    showTimeRange: item.showTimeRange,
    priceRange: item.priceRange
  }));
  return newData
}

// 处理banner
function formatBannerData(result) {
  console.log(result)
  // const newData = result.data.map(item => ({
  //   celebrityId: item.celebrityId,
  //   celebrityName: item.celebrityName,
  //   headUrl: item.headUrl,
  //   recommendTag: item.recommendTag,
  // }));
  return result
}
// 处理列表数据横向
function formatDkData(result) {
  const newData = result.data.map(item => ({
    celebrityId: item.celebrityId,
    celebrityName: item.celebrityName,
    headUrl: item.headUrl,
    recommendTag: item.recommendTag,
  }));
  return newData
}



export default { get, post, requestListData };
