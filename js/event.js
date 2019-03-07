// 🐊.js
// todo: create multiple keys in the delegation obj
// so we can scope to nodes:
// add = (node) => (selector, action, fn) => ...
// remove = (node) => (selector, action) => ...
// listen(node, action) => {add: add(node), remove(node)}


let delegations = [
  {
    selector: '.js-ex',
    action: 'click',
    fns: [console.log]
  }
]

const delegate = (action) => (e) => {
  delegations
    .filter(del => del.action === action)
    .forEach(del => {
      e.target.matches(del.selector)
        ? del.fns.map(fn => fn(e))
        : noop
    })
}

const noop = () => {}

const exactMatch = (selector, action) => (del) => del.selector === selector && del.action == action

const delegationExists = (selector, action) => delegations.filter(exactMatch(selector, action)).length > 0

const removeDel = (del) => {
  delegations = delegations.filter(val => val !== del)
}

const removeFn = (fns, val) => fns.filter(fn => fn !== val)

export const add = (selector, action, fn) => {
  delegationExists(selector, action)
    ? delegations.filter((exactMatch(selector, action)))[0].fns.push(fn)
    : delegations.push({selector: selector, action: action, fns:[fn]})
}

export const remove = (selector, fn) => {
  delegations
    .filter(del => del.selector === selector)
    .forEach(del => {
      del.fns.includes(fn)
        ? del.fns = removeFn(del.fns, fn)
        : noop()
      del.fns.length < 1
        ? removeDel(del)
        : noop()
    })
}

export const listen = (node, action) => {
  node.addEventListener(action, delegate(action))
}