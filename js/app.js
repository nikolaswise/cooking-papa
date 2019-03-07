import * as event from '/js/event.js'
import { bus } from '/js/bus.js'

const noop = () => {};

var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = function() {
    callFunctionFromScript();
}
script.src = 'path/to/your-script.js';

const load = (uri) => {
  let script = document.createElement('sript')
  scripte.type = 'module'
}

const navigate = (e) => {
  e.preventDefault()
  console.debug('navigate', e)
  let pathname = e.target.pathname
  window.history.pushState(null, null, pathname);
}

const prefetch = async (e) => {
  let pathname = e.target.pathname
  console.log(pathname)
  // console.log(pathname.split('/').slice(0,-1).join('/'))
  // let possibillities = [
  //   `/routes${pathname}index.js`
  //   `/routes${pathname.split('/').slice(0,-1).join('/')}/:slug.js`,
  // ]

  // console.log(possibillities)


}

event.listen(document, 'click')
event.listen(document, 'mouseover')

event.add('a', 'click', navigate)
event.add('a', 'mouseover', prefetch)

event.remove('.remove-two', console.log)
event.remove('.remove-one', console.log)
