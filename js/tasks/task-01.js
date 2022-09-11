// const UNITS = require('../../constants/units.json');
// const unitToConvert = require('../../data-examples/task-01.json');
import UNITS from '../../constants/units.json' assert { type: 'json' };
import unitToConvert from '../../data-examples/task-01.json' assert { type: 'json' };

console.log('This is task-01');

function convertUnit(unitToConvert, allUnits) {
  const from = unitToConvert.distance.unit;
  const value = unitToConvert.distance.value;
  const to = unitToConvert.convert_to;

  console.log(`converting ${value} from "${from}" to "${to}"`);
  return allUnits[from][to] * value;
}

console.log('result equals', convertUnit(unitToConvert, UNITS));
