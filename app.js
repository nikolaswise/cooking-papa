const navigate = (e) => {
  e.preventDefault()
  console.debug('navigate', e)
  let pathname = e.target.pathname
  window.history.pushState(null, null, pathname);
}

const getIndex = async (route) => {
  const response = await fetch(`/data/${route}index.json`)
  const json = await response.json()
  return json
}

const getSlug = async (route) => {
  const response = await fetch(`/data/${route}.json`)
  const json = await response.json()
  return json
}

const prefetch = (e) => {
  console.debug('prefetch:', e
  let pathname = e.target.pathname
  getSlug(pathname).then(data => console.debug(`fetch:`, data))
  getIndex(pathname).then(data => console.debug(`fetch:`, data))
}

const popstate = (e) => {
  console.debug('popstate:', e)
  console.debug(document.location.pathname)
}

const handler = (link) => {
  link.addEventListener('mouseover', prefetch)
  link.addEventListener('click', navigate)
}

const listeners = () => {
  let links = Array(...document.querySelectorAll('a'))
  links.forEach(link => handler(link))

  window.onpopstate = popstate
}

listeners()
