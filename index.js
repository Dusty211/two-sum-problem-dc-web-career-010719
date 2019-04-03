

let sum = 3
let a = [5, -2, 4, 9, 1]

function twoSum(sum, a) {
  let aObject = {}
  let solution = []

  for (i = 0; i < a.length; i++) {
    let target = sum - a[i]
    if (aObject[a[i]] !== undefined){
      console.log('if')
      solution.push([aObject[a[i]], a[i]])
    }else{
      console.log('else')
      aObject[target] = a[i]
    }
  }

  console.log(solution)
  return solution
}

twoSum(sum, a)
