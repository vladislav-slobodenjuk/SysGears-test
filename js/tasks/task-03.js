console.log('This is task-03');

// убрать еденицу чтобы от нуля?
const randomPoint = {
  x: Math.round(Math.random() * (100 - 1) + 1),
  y: Math.round(Math.random() * (100 - 1) + 1),
  z: Math.round(Math.random() * (100 - 1) + 1),
};
console.log('randomPoint 0-100:', randomPoint);

function countDistance(obj, point) {
  return Math.sqrt(
    Math.pow(point.x - obj.x, 2) + Math.pow(point.y - obj.y, 2) + Math.pow(point.z - obj.z, 2),
  );
}

function findPoint() {
  // const randomPoint = { x: 10, y: 10, z: 10 };
  let calls = 0;
  let searchPoints = [];
  let x = 0;
  let y = 0;
  let z = 0;

  const startPoint = { x, y, z };
  const startDistance = countDistance(startPoint, randomPoint);
  let prevDistance = startDistance;

  for (let i = 0; i <= 100; i += 1) {
    calls += 1;
    // startPoint.x = i;
    // console.log('line 31', startPoint);
    let searchPoint = { x: i, y: 0, z: 0 };

    const distance = countDistance(searchPoint, randomPoint);
    console.log('distance 34', distance);

    searchPoints.push(searchPoint);
    console.log('searchPoints', searchPoints);

    if (distance > prevDistance) {
      x = searchPoint.x - 1;
      console.log('x:', x);
      console.log('calls', calls);
      // console.log('startPoint :>> ', startPoint);

      prevDistance = startDistance;
      break;
    }

    prevDistance = distance;

    if (distance === 0) {
      console.log('x:', searchPoint.x);
      x = searchPoint.x;
      console.log('calls', calls);
      break;
    }
  }

  for (let i = 0; i <= 100; i += 1) {
    calls += 1;
    let searchPoint = { x: 0, y: i, z: 0 };

    const distance = countDistance(searchPoint, randomPoint);
    console.log('distance 68', distance);

    searchPoints.push(searchPoint);
    console.log('searchPoints', searchPoints);

    if (distance > prevDistance) {
      y = searchPoint.y - 1;

      console.log('y:', y);
      console.log('calls', calls);
      // console.log('startPoint :>> ', startPoint);

      prevDistance = startDistance;
      break;
    }

    prevDistance = distance;

    if (distance === 0) {
      console.log('y:', searchPoint.y);
      y = searchPoint.y;
      console.log('calls', calls);
      break;
    }
  }

  for (let i = 0; i <= 100; i += 1) {
    calls += 1;
    let searchPoint = { x: 0, y: 0, z: i };

    const distance = countDistance(searchPoint, randomPoint);
    console.log('distance 91', distance);

    searchPoints.push(searchPoint);
    console.log('searchPoints', searchPoints);

    if (distance > prevDistance) {
      z = searchPoint.z - 1;

      console.log('z:', z);
      console.log('calls', calls);
      // console.log('startPoint :>> ', startPoint);

      prevDistance = startDistance;
      break;
    }

    prevDistance = distance;

    if (distance === 0) {
      console.log('z:', searchPoint.z);
      z = searchPoint.z;
      console.log('calls', calls);
      break;
    }
  }

  console.log({ x, y, z });

  return {
    result: {
      random_point: randomPoint,
      search_points: searchPoints,
      calls,
    },
  };
}

console.log(findPoint());
