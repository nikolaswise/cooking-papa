const setCache = (pathname, html) => sessionStorage.setItem(pathname, html)
const getCache = (pathname) => sessionStorage.getItem(pathname)

// const render = async () => {
//   let html = getCache()
//   html ?
//   const response = await fetch(`/data/index.json`)
//   const json = await response.json()
// }


const render = (template, data) => template(data)

export default render