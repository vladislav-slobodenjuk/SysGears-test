console.log('This is task-03');

const randomPoint = { x: 0, y: 0, z: 10 };
// const randomPoint = {
//   x: Math.round(Math.random() * (10 - 1) + 1),
//   y: Math.round(Math.random() * (10 - 1) + 1),
//   z: Math.round(Math.random() * (10 - 1) + 1),
// };
console.log('randomPoint 0-10:', randomPoint);
// console.log(Math.round(Math.random() * (10 - 1) + 1));

function countDistance(obj, point) {
  return Math.sqrt(
    Math.pow(point.x - obj.x, 2) + Math.pow(point.y - obj.y, 2) + Math.pow(point.z - obj.z, 2),
  );
}

console.log('distance:', countDistance({ x: 0, y: 0, z: 0 }, randomPoint));
