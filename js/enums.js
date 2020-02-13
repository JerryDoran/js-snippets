// Create an object literal to define values for enum
const Direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

function sayDirection(direction) {
  switch (direction) {
    case Direction.UP:
      console.log('We are going up');
      break;
    case Direction.DOWN:
      console.log('We are going down');
      break;
    case Direction.LEFT:
      console.log('We are going left');
      break;
    case Direction.RIGHT:
      console.log('We are going right');
      break;
  }
}

sayDirection(Direction.LEFT);
sayDirection(Direction.UP);
sayDirection(Direction.DOWN);
