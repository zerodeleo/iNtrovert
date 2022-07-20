/* eslint-disable max-len */
const mockData = {
  'googleApiId': '62d7f6104274bd0a5c3f85e0',
  'analysis': [
    {
      'day': 'Monday',
      'hours': [],
    },
    {
      'day': 'Tuesday',
      'hours': [],
    },
  ],
  'status': 'OK',
  'venue_info': {
    'venue_name': 'Axel Landquists Park',
  },
};

const pickFromThisArray = [randomHoursArray11, randomHoursArray12, randomHoursArray13];


const test = (data, dayIdx) => {
  const randomPickFromThisArray = 2;
  data.analysis[dayIdx].hours.push(pickFromThisArray[randomPickFromThisArray]);
  return data;
};

console.log(test(mockData, 0));
