import dataToFilter from '../../data-examples/task-02.json' assert { type: 'json' };

console.log('This is task-02');
console.log('Incoming data:', dataToFilter);

const FILTER_CONDITIONS = ['include', 'exclude'];

function filterData(DataObject, AllConditions) {
  const { data, condition } = DataObject;
  // console.log(DataObject['data']);
  // console.log(DataObject['condition']);

  const filterCondition = AllConditions.find(CONDITION => CONDITION in condition);
  console.log(`Condition is '${filterCondition}' line23`);

  if (filterCondition === undefined) throw new Error('Unknown condition');

  let result = [];

  const compareCondition = Object.entries(condition[filterCondition][0])[0];
  console.log('Compare condition:', compareCondition);

  switch (filterCondition) {
    case 'include':
      result = data.filter(obj => obj[compareCondition[0]] === compareCondition[1]);
      // console.log('result', result);
      break;

    case 'exclude':
      result = data.filter(obj => obj[compareCondition[0]] !== compareCondition[1]);
      // console.log('result', result);
      break;

    default:
      console.log('Unknown condition');
      break;
  }

  result.sort((a, b) => {
    const sortCondition = condition.sort_by[0];
    console.log(`Sort condition is '${sortCondition}'`);

    console.log('sort', a, b);
    return a[sortCondition] > b[sortCondition] ? 1 : -1;
  });

  return JSON.stringify({ result });
}

try {
  console.log('function returns:', filterData(dataToFilter, FILTER_CONDITIONS));
} catch (error) {
  console.log(error.message);
}
