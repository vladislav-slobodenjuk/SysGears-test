// const UNITS = require('../../constants/units.json');
// const unitToConvert = require('../../data-examples/task-01.json');
import UNITS from '../../constants/units.json' assert { type: 'json' };
import unitToConvert from '../../data-examples/task-01.json' assert { type: 'json' };

console.log('This is task-01');
console.log('Incoming data:', unitToConvert);

function convertUnit(unitToConvert, allUnits) {
  // const from = unitToConvert.distance.unit;
  // const value = unitToConvert.distance.value;

  const { unit: from, value } = unitToConvert.distance;
  const to = unitToConvert.convert_to;

  if (allUnits[from] === undefined) throw new Error(`unit '${from}' is not supported`);

  if (allUnits[from][to] === undefined)
    throw new Error(`convertation target '${to}' is not supported`);

  console.log(`converting ${value} from "${from}" to "${to}"`);

  const result = allUnits[from][to] * value;
  const roundedResult = Math.round(result * 100) / 100;
  return JSON.stringify({ unit: to, value: roundedResult });
}

try {
  console.log('function returns:', convertUnit(unitToConvert, UNITS));
} catch (error) {
  console.error(error.message);
}
