function plus(number = 1) {
  return {
    type: 'PLUS',
    point: number
  };
}

function minus(number = 1) {
  return {
    type: 'MINUS',
    point: number
  };
}

export default { plus, minus };
