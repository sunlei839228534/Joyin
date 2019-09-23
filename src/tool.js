
export function resetAmount(number) {
  const resetNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return resetNumber;
}

export function countdown() {

}
