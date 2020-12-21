export function dollarsToCents(dollars) {
  return parseInt((parseFloat(dollars) * 100).toFixed(0));
};

export function centsToDollars(cents) {
  return cents / 100;
};

export function filterByPrice(priceInDollars, ordersMap) {
  const priceInCents = dollarsToCents(priceInDollars);
  const filteredOrders = Object.values(ordersMap).filter(order => order.price === priceInCents);
  return filteredOrders;
};

export function filterByDish(dish, ordersMap) {
  const filteredOrders = Object.values(ordersMap).filter(order => order.item === dish);
  return filteredOrders;
};
