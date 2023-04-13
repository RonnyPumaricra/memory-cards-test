interface randomItem {
  index: number
  value: number
}

const getRandomArray = (limit: number) => {
  const randomArray: randomItem[] = []

  for (let i = 0; i < limit; i++) {
    randomArray[i] = {
      index: i,
      value: Math.random()
    }
  }
  randomArray.sort((a, b) => a.value - b.value)
  return randomArray.map((random) => random.index)
}

/**
 * Make a random list in the form:
 * [
 *  [ Cards for first slider ],
 *  [ Cards for second slider ],
 *  and so on...
 * ]
 */
export function randomizeGameData<T>(data: T[], cardsPerSlider: number) {
  const randArray = getRandomArray(data.length)
  const newList: T[][] = []
  for (let i = 0, e = -1; i < randArray.length; i++) {
    if (i % cardsPerSlider === 0) {
      e++
    }
    if (!newList[e]) newList[e] = []
    newList[e][i % cardsPerSlider] = { ...data[randArray[i]] }
  }
  return newList
}
