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
    console.log('this is include');
    // console.log(condition.include);
    console.log(Object.entries(condition.include[0]));

    const cond = Object.entries(condition.include[0]);

    const try1 = data.reduce((acc, obj) => {
      console.log(Object.entries(obj).includes(cond));

      if (Object.entries(obj)) {
      }
    }, []);

    // console.log(try1);

    // condition.include.forEach(element => {
    //   result = date.filter(obj => obj);
    // });
  } else if (condition.hasOwnProperty('exclude')) {
    console.log('this is exclude');
    console.log(condition.exclude);
    condition.exclude.forEach(element => {
      console.log(Object.entries(element));
    });

    const mew = Object.entries(condition.exclude);
    // console.log(mew);
  } else {
    console.log('unknown condition');
  }

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

  // console.log(data);
  // return obj;
}

console.log('function returns:', sortData(dataToSort));
