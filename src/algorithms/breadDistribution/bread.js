// You are the benevolent ruler of Rankhacker Castle, and today
// you're distributing bread. Your subjects are in a line, and some of
// them already have some loaves. Times are hard and your castle's
// food stocks are dwindling, so you must distribute as few loaves as
// possible according to the following rules:

// 1. Every time you give a loaf of bread to some person i, you must
// also give a loaf of bread to the person immediately in front of
// or behind them in the line (i.e., persons i + 1 or i - 1).

// 2. After all the bread is distributed, each person must have an
// even number of loaves.

// Example
// B = [4,5,6,7]
// . We can first give a loaf to i = 3 and i = 4 so B = [4, 5, 7, 8].
// . Next we give a loaf to i = 2 and i = 3 and have
// B = [4, 6, 8, 8] which satisfies our conditions.

// All of the counts are now even numbers. We had to distribute 4 loaves.

const getCouples = (bread) => {
    const newBread = [...bread]
    const couples = []
    let couple = []
    for (let index = 0; index < newBread.length; index++) {
        if (newBread[index] % 2 !== 0) {
            if (couple.length <= 2) {
                couple.push(index)
            }

            if (couple.length === 2) {
                couples.push(couple)
                couple = []
            }
        }
    }
    

    // if (couple.length !== 0) {
    //     return [[-1]]
    // }

    return couples
}

const increment = (bread, couples) => {
    const newBread = [...bread]
    let breads = 0
    for (let index = 0; index < couples.length; index++) {
        const a = couples[index][0]
        const b = couples[index][1]

        if (b - a === 1) {
            newBread[a] = newBread[a] + 1
            newBread[a + 1] = newBread[a + 1] + 1
            breads = breads + 2
        } else {
            newBread[a] = newBread[a] + 1
            newBread[a + 1] = newBread[a + 1] + 1
            newBread[b] = newBread[b] + 1
            newBread[b - 1] = newBread[b - 1] + 1
            breads = breads + 4
        }
    }
    return [newBread, breads]
}

// function fairRations(bread) {
//     let newBread = [...bread]
//     let couples = getCouples(newBread)
//     let breadsCounter = 0

//     // console.log(JSON.stringify({couples, newBread, breadsCounter}))
    
//     if (couples[0][0] === -1) {
//         console.log('NOooo')
//         return 'NO'
//     }

//     while (couples.length > 0) {
//         const [updatedBread, breads] = increment(newBread, couples)
//         newBread = updatedBread
//         breadsCounter = breadsCounter + breads
//         couples = getCouples(newBread)
//         // console.log(JSON.stringify({couples, newBread}))
//     }

//     console.log(breadsCounter)
//     return breadsCounter
// }

// function fairRations(bread) {
//   let loaves = 0;

//   for (let i = 0; i < bread.length - 1; i++) {
//     if (bread[i] % 2 !== 0) {
//       // If current person has odd loaves, give one to them and one to the next
//       bread[i]++;
//       bread[i + 1]++;
//       loaves += 2;
//     }
//   }

//   // After distributing, check if the last person has even loaves
//   if (bread[bread.length - 1] % 2 !== 0) {
//     console.log('NO')
//     return "NO";
//   }

//   console.log(loaves)
//   return loaves;
// }

function fairRations(numLoaves) {
    var numSubjects, numLoavesDistributed, i;
    
    // numSubjects = +readLine();
    numSubjects = numLoaves.length
    // numLoaves = readLine().split(' ').map(Number);
    numLoavesDistributed = 0;
    for (i = 0; i < numSubjects - 1; i++) {
        if (numLoaves[i] % 2 === 1) {
            numLoaves[i]++;
            numLoaves[i + 1]++;
            numLoavesDistributed += 2;
        }
    }
    if (numLoaves[numSubjects - 1] % 2 === 0) {
        console.log(numLoavesDistributed);
    } else {
        console.log('NO');
    }
}


// fairRations([2, 3, 4, 5, 6]) // expected 4 
// fairRations([1, 2]) // expected NO
// fairRations([ 1, 2, 2, 3, 5, 6, 6, 8, 9]) // expected 

fairRations([3, 8, 4, 6, 1, 9, 8, 8, 6, 7, 5, 2, 1, 5, 8, 6, 1, 3, 3, 9, 3, 7, 8, 5, 5, 4, 7, 2, 9, 8, 7, 7, 4, 4, 7, 1, 5, 3, 10, 7, 10, 10, 9, 1, 9, 10, 1, 10, 2, 7, 2, 10, 2, 7, 8, 10, 3, 8, 1, 3, 4, 1, 6, 1, 5, 3, 10, 7, 6, 10, 6, 6, 1, 6, 3, 9, 6, 8, 4, 9, 5, 3, 7, 7, 3, 5, 4, 2, 7, 5, 6, 4, 3, 10, 4, 5, 2, 4, 7, 5, 6, 10, 3, 4, 8, 4, 10, 7, 8, 9, 1, 10, 2, 6, 4, 10, 1, 2, 6, 3, 6, 4, 9, 6, 6, 2, 8, 8, 5, 9, 7, 4, 2, 10, 10, 6, 4, 7, 2, 8, 4, 5, 6, 1, 1, 7, 3, 5, 2, 7, 10, 1, 6, 2, 2, 9, 3, 1, 10, 1, 2, 5, 5, 5, 4, 9, 9, 7, 9, 2, 6, 4, 2, 10, 9, 2, 8, 8, 10, 9, 1, 7, 3, 3, 7, 4, 9, 3, 3, 3, 1, 6, 5, 2, 7, 9, 4, 1, 4, 1, 10, 7, 8, 6, 4, 6, 5, 6, 1, 1, 7, 6, 1, 8, 5, 3, 3, 4, 5, 7, 10, 3, 10, 9, 8, 10, 9, 2, 3, 9, 6, 3, 3, 10, 5, 3, 3, 1, 10, 8, 6, 5, 8, 5, 8, 7, 5, 5, 9, 6, 1, 9, 5, 2, 8, 8, 1, 8, 7, 1, 7, 3, 4, 3, 7, 7, 5, 4, 7, 10, 7, 3, 3, 9, 2, 4, 2, 7, 1, 6, 6, 3, 2, 1, 5, 4, 6, 7, 8, 8, 9, 10, 5, 1, 1, 10, 3, 7, 3, 5, 2, 6, 4, 7, 4, 6, 8, 10, 10, 4, 3, 10, 7, 1, 5, 1, 6, 1, 5, 8, 6, 10, 2, 4, 9, 10, 2, 1, 8, 9, 1, 6, 4, 4, 9, 5, 9, 3, 2, 3, 4, 8, 9, 5, 6, 10, 3, 1, 3, 4, 7, 4, 8, 9, 9, 8, 10, 4, 3, 6, 7, 1, 9, 6, 8, 4, 7, 6, 8, 9, 2, 4, 6, 8, 1, 8, 7, 9, 5, 7, 9, 10, 4, 2, 5, 3, 2, 2, 8, 2, 10, 10, 9, 1, 10, 10, 7, 6, 9, 2, 1, 4, 3, 4, 5, 9, 8, 6, 9, 4, 3, 10, 6, 8, 10, 2, 4, 2, 9, 5, 7, 4, 7, 6, 10, 3, 5, 8, 2, 5, 3, 8, 8, 2, 10, 4, 3, 6, 9, 3, 5, 10, 10, 8, 6, 4, 6, 1, 10, 9, 3, 4, 7, 3, 7, 10, 7, 4, 2, 5, 3, 9, 2, 6, 6, 4, 4, 2, 4, 3, 2, 10, 1, 6, 7, 5, 2, 8, 2, 9, 4, 3, 4, 9, 3, 4, 9, 6, 8, 5, 5, 8, 3, 6, 8, 7, 6, 9, 9, 3, 1, 8, 9, 5, 10, 5, 4, 9, 9, 3, 6, 8, 10, 1, 9, 6, 7, 5, 3, 10, 1, 2, 9, 4, 4, 4, 6, 3, 6, 9, 2, 5, 9, 8, 6, 8, 6, 7, 5, 6, 3, 10, 1, 2, 2, 5, 6, 9, 5, 6, 5, 10, 5, 2, 7, 1, 2, 10, 7, 7, 7, 1, 1, 7, 6, 4, 5, 7, 4, 10, 6, 4, 5, 9, 3, 5, 10, 7, 1, 10, 1, 9, 6, 3, 5, 6, 5, 5, 6, 2, 9, 4, 8, 8, 10, 1, 3, 6, 2, 2, 2, 2, 9, 3, 7, 6, 6, 1, 1, 2, 10, 5, 9, 2, 7, 4, 8, 1, 4, 9, 6, 8, 7, 6, 7, 9, 8, 4, 2, 1, 3, 10, 7, 2, 7, 8, 4, 1, 10, 6, 9, 7, 4, 7, 8, 10, 3, 4, 6, 10, 7, 10, 7, 2, 6, 1, 9, 6, 9, 4, 6, 2, 4, 9, 6, 5, 8, 4, 10, 4, 5, 5, 10, 4, 5, 8 
]) // expected 1042