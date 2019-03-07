const render = async (template, url, obj) => {
  // console.log(template, url)
  const get = async () => {
    if (fetch) {
      const response = await fetch(url)
      const json = await response.json()
      return json
    } else {

    }
  }
  let data
  obj
    ? data = obj
    : data = await get()
  return template(data)
  // return obj
}

export default render