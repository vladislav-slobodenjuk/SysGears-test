// const UNITS = require('../../constants/units.json');
// const unitToConvert = require('../../data-examples/task-01.json');
import UNITS from '../../constants/units.json' assert { type: 'json' };
import unitToConvert from '../../data-examples/task-01.json' assert { type: 'json' };

console.log('This is task-01');

function convertUnit(unitToConvert, allUnits) {
  // const from = unitToConvert.distance.unit;
  // const value = unitToConvert.distance.value;

  const { unit: from, value } = unitToConvert.distance;
  const to = unitToConvert.convert_to;

  console.log(`converting ${value} from "${from}" to "${to}"`);

  const result = allUnits[from][to] * value;
  const roundedResult = Math.floor(result * 100) / 100;
  return { unit: to, value: roundedResult };
}

console.log('function returns:', convertUnit(unitToConvert, UNITS));
