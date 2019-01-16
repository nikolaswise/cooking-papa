const navigate = (e) => {
  e.preventDefault()
  console.debug('navigate', e)
  let pathname = e.target.pathname
  window.history.pushState(null, null, pathname);
}

const prefetch = (e) => {
  console.debug('prefetch:', e)
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
