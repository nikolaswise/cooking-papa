import * as event from '/js/event.js'
import { bus } from '/js/bus.js'

const noop = () => {};

const $ = (selector) => [...document.querySelectorAll(selector)]

const setCache = (path, obj) => {
  let cache = JSON.stringify(obj)
  sessionStorage.setItem(path, cache)
}

const navigate = (e) => {
  e.preventDefault()

  let pathname = e.target.pathname

  let regions = $('[data-region]')
  let current = {}
  regions.forEach(node => {
    let id = node.getAttribute('data-region')
    current[id] = node.innerHTML
  })

  setCache(window.location.pathname, current)

  // render(pathname)
  let template = JSON.parse(sessionStorage.getItem(pathname))

  for (const region in template) {
    let nodes = $(`[data-region="${region}"]`)
    nodes.forEach(node => node.innerHTML = template[region])
  }

  window.history.pushState(null, null, pathname);
}

const getModule = (url) => import(url)
  .then(mod => mod)
  .catch(err => console.warn(err))

const prefetch = async (e) => {
  let pathname = e.target.pathname
  if (sessionStorage.getItem(pathname)) {
    return
  }

  let dir = pathname.split('/').slice(0,-1).join('/')
  let slug = pathname.split('/').filter(item => item.length > 0).pop()

  let possibillities = [
    `/routes${pathname}index.js`
  ]

  dir
    ? possibillities.push(`/routes${dir}/:slug.js`)
    : noop()

  let imports = possibillities.map(url => getModule(url))

  Promise.all(imports)
    .then(async arr => {
      let template = arr.filter(obj => obj)[0]
      let main = await template.main(slug)
      setCache(pathname, {
        main: main
      })
    })
    .catch(err => new Error(err))
}

const popstate = (e) => {
  let pathname = document.location.pathname

  // render(pathname)
  let template = JSON.parse(sessionStorage.getItem(pathname))
  for (const region in template) {
    let nodes = $(`[data-region="${region}"]`)
    nodes.forEach(node => node.innerHTML = template[region])
  }
}

let click = event.listen(document, 'click')
let mouseover = event.listen(document, 'mouseover')

click.add('a', navigate)
mouseover.add('a', prefetch)
window.onpopstate = popstate
