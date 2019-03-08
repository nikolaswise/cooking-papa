// 🎄🐊.js
// Advent Alligator, the Event Delegator

let delegations = new Map();

const noop = () => {}

const delegate = (node, action) => (e) => {
  delegations[node]
    .filter(del => del.action === action)
    .forEach(del => {
      e.target.matches(del.selector)
        ? del.fns.map(fn => fn(e))
        : noop()
    })
}

const exactMatch = (selector, action) => (del) => del.selector === selector && del.action == action

const delegationExists = (set, selector, action) => set.filter(exactMatch(selector, action)).length > 0

const removeDel = (set, del) => {
  set = set.filter(val => val !== del)
}

const removeFn = (fns, val) => fns.filter(fn => fn !== val)

export const add = (node, action) => (selector, fn) => {
  let set = delegations[node]
  delegationExists(set, selector, action)
    ? set.filter((exactMatch(selector, action)))[0].fns.push(fn)
    : set.push({selector: selector, action: action, fns:[fn]})
}

export const remove = (node) => (selector, fn) => {
  let set = delegations[node]
  set
    .filter(del => del.selector === selector)
    .forEach(del => {
      del.fns.includes(fn)
        ? del.fns = removeFn(del.fns, fn)
        : noop()
      del.fns.length < 1
        ? removeDel(set, del)
        : noop()
    })
}

export const listen = (node, action) => {
  node.addEventListener(action, delegate(node, action))
  delegations[node] = []
  return {
    add: add(node, action),
    remove: remove(node)
  }
}
