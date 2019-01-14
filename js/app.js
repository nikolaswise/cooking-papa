import index from '/components/index.js'
import item from '/components/item.js'

let templates = {
  item: item,
  index: index
}

const navigate = (e) => {
  e.preventDefault()
  let pathname = e.target.pathname
  let html = sessionStorage.getItem(pathname)
  let node = document.querySelector('.region-main')
  node.innerHTML = html
}

const render = (pathname, json, template) => {
  let html = template(json)
  sessionStorage.setItem(pathname.join('/'), html)
}

const prefetch = (e) => {
  let pathname = e.target.pathname.split('/')
  let template = pathname[1]
  let route = pathname[2]

  const request = async () => {
    const response = await fetch(`/data/${route}.json`)
    const json = await response.json()
    render(pathname, json, templates[template])
  }
  request()
}

const handler = (link) => {
  link.addEventListener('mouseover', prefetch)
  link.addEventListener('click', navigate)
}

let links = Array(...document.querySelectorAll('a'))
links.forEach(link => handler(link))