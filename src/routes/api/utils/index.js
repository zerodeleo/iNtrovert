const busynessTxt = (busynessNum) => {
  if (!busynessNum && busynessNum !== 0) return 'no data';
  const busynessTxts = [
    {
      range: [0, 10],
      txt: 'very very very low',
    },
    {
      range: [11, 20],
      txt: 'very very low',
    },
    {
      range: [21, 30],
      txt: 'very low',
    },
    {
      range: [31, 40],
      txt: 'low',
    },
    {
      range: [41, 50],
      txt: 'below average',
    },
    {
      range: [51, 60],
      txt: 'average',
    },
    {
      range: [61, 70],
      txt: 'above average',
    },
    {
      range: [71, 80],
      txt: 'very above average',
    },
    {
      range: [81, 90],
      txt: 'very very above average',
    },
    {
      range: [91, 100],
      txt: 'very very very above average',
    },
  ];
  for ( let i = 0; i < busynessTxts.length; i++ ) {
    if (
      busynessNum >= busynessTxts[i].range[0] &&
      busynessNum <= busynessTxts[i].range[1]) {
      return busynessTxts[i].txt;
    }
  }
  return 'util function failed';
};

const mergeNestedArr = (arr) => {
  let resultArr = [];
  for (let i = 0; i < arr.length; i ++) {
    resultArr = [...resultArr, ...arr[i]];
  };
  return resultArr;
};

module.exports = { busynessTxt, mergeNestedArr };
