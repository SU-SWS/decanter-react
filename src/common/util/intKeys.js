export default (arg) => {
  const int = parseInt(arg, 10);
  if (Number.isNaN(int)) {
    return arg;
  }
  return int;
};
