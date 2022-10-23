import dataToFilter from '../../data-examples/task-02.json' assert { type: 'json' };

console.log('This is task-02');
console.log('Incoming data:', dataToFilter);

const FILTER_CONDITIONS = ['include', 'exclude'];

// defineCondition()

function filterData(DataObject, AllConditions) {
  const { data, condition } = DataObject;
  // console.log(DataObject['data']);
  // console.log(DataObject['condition']);

  // console.log(condition[0]);
  // console.log(Object.keys(condition));
  // console.log(condition.hasOwnProperty('exclude'));

  const filterCondition = AllConditions.find(
    CONDITION => CONDITION in condition,
  );
  console.log(`condition is '${filterCondition}' line23`);

  if (filterCondition === undefined) {
    console.log('unknown condition line 25');
    // return null;
    throw new Error('unknown condition');
  }

  // if (!AllConditions.some(CONDITION => CONDITION in condition)) {
  //   console.log('unknown condition');
  //   return null; // throw new Error('unknown condition')
  // }

  let result = [];

  if ('include' in condition) {
    console.log('condition is include st if line 38');
    // console.log(condition.include);
    // console.log('line 19', Object.entries(condition.include[0])[0]);

    const compareCondition = Object.entries(condition.include[0])[0];
    // const compareCondition = condition.include[0];
    console.log('line 21 compareCondition', compareCondition);

    result = data.filter(obj => {
      console.log('line37', obj[compareCondition[0]] === compareCondition[1]);
      return obj[compareCondition[0]] === compareCondition[1];
    });
    console.log('result', result);
    //
  } else if (condition.hasOwnProperty('exclude')) {
    console.log('condition is exclude at if line 53');

    const compareCondition = Object.entries(condition.exclude[0])[0];
    console.log('line 50 compareCondition', compareCondition);

    // console.log(condition.exclude);
    // condition.exclude.forEach(element => {
    //   console.log(Object.entries(element));
    // });

    result = data.filter(obj => {
      console.log('line78', obj[compareCondition[0]] !== compareCondition[1]);
      return obj[compareCondition[0]] !== compareCondition[1];
    });
    console.log('result', result);
  }

  result.sort((a, b) => {
    const sortCondition = condition.sort_by[0];
    console.log(`sort condition is '${sortCondition}'`);

    console.log('sort', a, b);
    return a[sortCondition] > b[sortCondition] ? 1 : -1;
  });

  // const filterCondition = condition;
  // console.log('filterCondition', filterCondition);

  // console.log('cond lin 89', 'exclude' in condition);

  switch (filterCondition) {
    case 'include':
      console.log('include line 99');
      break;

    case 'exclude':
      console.log('exclude line 103');
      break;

    default:
      console.log('unknown condition');
      break;
  }

  // const properties = Object.keys(condition);
  // console.log(properties);

  // switch (properties) {
  //   case properties.includes('include'):
  //     console.log('include');
  //     break;

  //   case properties.includes('exclude'):
  //     console.log('exclude');
  //     break;

  //   default:
  //     console.log('unknown condition');
  //     break;
  // }

  return JSON.stringify({ result });
}

try {
  console.log('function returns:', filterData(dataToFilter, FILTER_CONDITIONS));
} catch (error) {
  console.error(error.message);
}
