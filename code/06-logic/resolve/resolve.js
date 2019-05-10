let r1 = {a:true }
let r2 = {a:false, b:true}
let r3 = {a:true, c:true}

function unify(r1, r2, x) {
  let r = Object.assign({}, r1, r2)
  delete r[x]
  return r
}

function resolve(r1, r2) {
  let r = []
  for (let k in r1) {
    if (r1[k] === true && r2[k] === false) r.push(unify(r1, r2, k))
    if (r1[k] === false && r2[k] === true) r.push(unify(r1, r2, k))
  }
  return r;
}


function doResolve(r1, r2) {
  console.log('resolve(%j,%j)=%j', r1, r2, resolve(r1, r2))
}

doResolve(r1, r2)
doResolve(r2, r3)
