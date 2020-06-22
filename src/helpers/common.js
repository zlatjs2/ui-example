const commons = {};

/**
 * 3자리 단위마다 콤마
 * @param  {Number} number 변환할 위한 숫자
 */
commons.comma = (number) => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;

  return number.toString().replace(regexp, ",");
};

export default commons;
