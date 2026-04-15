const getLeftDistance = (index, stations, nodes) => {
    let distance = 0
    let i = index
    
    while (i > 0) {
        distance++
        i--
        if (stations.includes(i)) {
            return distance
        }
    }
    return nodes
}

const getRightDistance = (index, stations, nodes) => {
    let distance = 0
    let i = index

    while (i < nodes) {
        i++
        distance++
        if (stations.includes(i)) {
            return distance
        } 
    }
    return nodes
}

const getMinDistance = (index, stations, nodes, firstStation, lastStation) => {
    // edge case 2 -> item is smaller than the first space station
    if (index < firstStation) {
        return firstStation - index
    }

    // edge case 3 -> item is bigger than the last space station
    if (index > lastStation) {
        return index - lastStation
    }

    let start = 0
    let end = stations.length - 1
    let current = Math.trunc(start + end / 2)

    let control = end - start

    while (control > 1) {
        if (index > stations[0] && index < stations[current]) {
            end = current
            current = Math.trunc((start + end) / 2)
        }
        
        if (index > stations[current] && index < stations[end]) {
            start = current
            current = Math.trunc((start + end) / 2)
        }

        control = end - start
    }

    const left = index - stations[start]
    const right = stations[end] - index

    return Math.min(left, right)
}

function flatlandSpaceStations(nodes, stations) {
    const data = []
    stations.sort((a, b) => (a - b))
    for (let i = 0; i < nodes; i++) {
        const item = {
            index: i,
            isSpaceStation: stations.includes(i),
            minDistance: 0
        }
        data.push(item)
    }

    let totalMinDistance = 0

    const firstStation = stations[0]
    const lastStation = stations[stations.length - 1]
    data.forEach((item) => {
        // edge case 1 -> skip space stations 
        if (item.isSpaceStation) {
            return
        }

        const minDistance = getMinDistance(
            item.index, stations, nodes, firstStation, lastStation
        )
        item.minDistance = minDistance
        if (minDistance > totalMinDistance) {
            totalMinDistance = minDistance
        }
    })
    // console.log(totalMinDistance)
    return totalMinDistance
}

// flatlandSpaceStations(5, [0, 4]);
// flatlandSpaceStations(20, [13, 1, 11, 10, 6]); // expected 6
flatlandSpaceStations(20, [17, 3, 11, 10, 6]); // expected 
// flatlandSpaceStations(100000, [
//   39572, 89524, 21749, 94613, 75569, 74800, 91713, 62107, 28574, 22617, 22271, 22624, 28116, 67573, 53717, 9358, 65220, 59894, 78686, 10945, 33641, 11708, 8851, 11860, 66780, 64697, 799, 47782, 41971, 54170, 8960, 81543, 60047, 47061, 92508, 51968, 38213, 84221, 14075, 66787,
//   23191, 52698, 5764, 51307, 20271, 59481, 77018, 1843, 19375, 55704,
//   12789, 53016, 83764, 37992, 64877, 50545, 19041, 82028, 98327, 61012,
//   52551, 7287, 42555, 12598, 70700, 51416, 80918, 8914, 35637, 11345,
//   75701, 58828, 80395, 97817, 26488, 17019, 57299, 3506, 18862, 93026,
//   75562, 48003, 62395, 59327, 85996, 27272, 9872, 5037, 25652, 8199,
//   82402, 78203, 31838, 41309, 7153, 18890, 92725, 88071, 27804, 28363,
//   99416, 19858, 3543, 79812, 17675, 30031, 96831, 91326, 49889, 15693,
//   84353, 25452, 80049, 46748, 84779, 66045, 90372, 94651, 87434, 16024,
//   19202, 69836, 94228, 67392, 27498, 1381, 86282, 20223, 5805, 14087,
//   48586, 5221, 50297, 68482, 85033, 67972, 98513, 98216, 59299, 48403,
//   30262, 60004, 73855, 10311, 6752, 74986, 92708, 13476, 85989, 96494,
//   29500, 5191, 82683, 40080, 88935, 10181, 57814, 75217, 30404, 63619,
//   5656, 95343, 68840, 55953, 63825, 70226, 23926, 62338, 68442, 99577,
//   27093, 15056, 59581, 17300, 25367, 82685, 92286, 34427, 96161, 78275,
//   30922, 25661, 99818, 13605, 82094, 88753, 23786, 39908, 80323, 54190,
//   3527, 85979, 65885, 72367, 41933, 29710, 58945, 82211, 8401, 43740
// ]); // expected 1504 

// flatlandSpaceStations(20, [19, 9]); // expected 6