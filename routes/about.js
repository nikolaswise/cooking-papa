const template = (obj) => `
<section class="layout-single lead-4">
  ${obj.content}
</section>
`

const data = (root = '/') => async () => {
  console.log('rendering!', `${root}data/about.json`)
  const response = await fetch(`${root}data/about.json`)
  const obj = await response.json()
  return obj
}

export const main = async (id, root = '/') => {
  let obj = await data(root)()
  return template(obj)
}
