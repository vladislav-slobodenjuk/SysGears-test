import dataToSort from '../../data-examples/task-02.json' assert { type: 'json' };

console.log('This is task-02');

function sortData(obj) {
  const { data, condition } = obj;
  // console.log(obj['data']);
  // console.log(obj['condition']);

  // console.log(condition[0]);
  // console.log(Object.keys(condition));
  // console.log(condition.hasOwnProperty('exclude'));

  let result = [];

  if (condition.hasOwnProperty('include')) {
    console.log('condition is include');
    // console.log(condition.include);
    // console.log('line 19', Object.entries(condition.include[0])[0]);

    const compareCondition = Object.entries(condition.include[0])[0];
    // const compareCondition = condition.include[0];
    console.log('line 21', compareCondition);

    // const cond = Object.entries(condition.include[0]);

    const try1 = data.reduce((acc, obj) => {
      // console.log(Object.entries(obj).includes(cond));

      if (Object.entries(obj)) {
      }
    }, []);

    // console.log(try1);

    // condition.include.forEach(element => {
    //   result = date.filter(obj => obj);
    // });

    result = data.filter(obj => {
      console.log('line37', obj[compareCondition[0]] === compareCondition[1]);
      return obj[compareCondition[0]] === compareCondition[1];
    });
    console.log('try2', result);
    //
  } else if (condition.hasOwnProperty('exclude')) {
    console.log('condition is exclude');

    const compareCondition = Object.entries(condition.exclude[0])[0];
    console.log('line 50', compareCondition);

    // console.log(condition.exclude);
    // condition.exclude.forEach(element => {
    //   console.log(Object.entries(element));
    // });

    result = data.filter(obj => {
      console.log('line58', obj[compareCondition[0]] !== compareCondition[1]);
      return obj[compareCondition[0]] !== compareCondition[1];
    });
    console.log('result', result);
  } else {
    console.log('unknown condition');
  }

  result.sort((a, b) => {
    const sortCondition = condition.sort_by[0];
    console.log('sort condition is', sortCondition);

    console.log('sort', a, b);
    return a[sortCondition] > b[sortCondition] ? 1 : -1;
  });

  // const filterCondition = condition;
  // console.log('filterCondition', filterCondition[0]);

  // switch (condition) {
  //   case condition.hasOwnProperty('include'):
  //     console.log('include');
  //     break;

  //   case condition.hasOwnProperty('exclude'):
  //     console.log('exclude');
  //     break;

  //   default:
  //     console.log('unknown condition');
  //     break;
  // }

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

console.log('function returns:', sortData(dataToSort));
