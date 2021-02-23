function checkCashRegister(price, cash, cid) {
  let changeArray = cid.slice().map(item => [item[0], parseInt((item[1] * 10000).toFixed(2))]).reverse()
  let coins = [1000000, 200000, 100000, 50000, 10000, 2500, 1000, 500, 100]
  let change = (cash - price) * 10000
  let totalCid = 0
  let result = {
    'status': 'INSUFFICIENT_FUNDS',
    'change': []
  }
  for (let i in changeArray) {
    totalCid += (changeArray[i][1] * 10000)
  }
  if (change * 10000 > totalCid) {
    return result
  }
  else if (change * 10000 == totalCid) {
    result['status'] = 'CLOSED'
    result['change'] = cid
    return result
  }
  else {
    for (let j in changeArray) {
      let curr = [changeArray[j][0], 0]
      while (change >= coins[j] && changeArray[j][1] >= coins[j]) {
        change -= coins[j]
        changeArray[j][1] -= coins[j]
        curr[1] += coins[j]
      }
      if (curr[1] > 0) {
        curr[1] /= 10000
        result['change'].push(curr)
      }
    }
    if (change === 0) {
      result['status'] = 'OPEN'
      return result
    }
    else {
      return {
        'status': 'INSUFFICIENT_FUNDS',
        'change': []
      }
    }
  }
    
    
//     const values = [1,5,10,25,100,500,1000,2000,10000]
//     let change = cash*100 - price*100
//     let allCash = true
// 
//     let moneyback = cid.reduceRight(function(p,c,i){
//         let out = Math.min(change-change%values[i], c[1]*100)
//         change -= out
//         if (out !== c[1]*100) { allCash = false; }
//         return out ? p.concat([[c[0], out/100]]) : p
//     },[])
//   return change > 0 ? "Insufficient Funds" : allCash ? "Closed" : moneyback  
    
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// {status: "INSUFFICIENT_FUNDS", change: []}


/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/
