const friends = [
  {name: 'sigan', age:15 },
  {name: 'suzi', age: 20 },
  {name: 'iu', age: 25 },
  {name: 'sunaue', age:30 }
]
const timelines = [
  {desc: 'lunch is good', likes:0 },
  {desc: 'im good mane', likes:10 },
  {desc: 'visited hotel', likes:20 },
  {desc: 'expensive mobile', likes:30}
]

function makeDataGenerator(items){
  let itemIndex = 0;
  return function getNextData(){
    const item = items[itemIndex % items.length]
    itemIndex += 1
    return { ...item, id: itemIndex};
  }
}

export const getNextFriend = makeDataGenerator(friends)
export const getNextTimeline = makeDataGenerator(timelines)