import { render, screen } from '@testing-library/react';
import OrderRow from './order-row';

describe('order row', () => {
  const order = {
    id: '1',
    customer: 'Luis',
    destination: 'This is the destination',
    item: 'Ramen',
    event_name: 'CREATED',
    price: 2000
  };

  it('renders row with five columns', () => {
    render(<OrderRow order={order} />);
    const tableRow = screen.getByTestId('order-row-1');
    const columnsQuantity = tableRow.getElementsByTagName('td');
    expect(tableRow).toBeInTheDocument();
    expect(columnsQuantity.length).toEqual(5);
  });
  
  it('reders order values', () => {
    const turnToMoney = value => value / 100;
    const expectedPrice = turnToMoney(order.price);

    render(<OrderRow order={order} />);
    expect(screen.getByText('Luis')).toBeInTheDocument();
    expect(screen.getByText('This is the destination')).toBeInTheDocument();
    expect(screen.getByText('Ramen')).toBeInTheDocument();
    expect(screen.getByText('CREATED')).toBeInTheDocument();
    expect(screen.getByText(`$${expectedPrice}`)).toBeInTheDocument();
  });

  it('should work without order', () => {
    render(<OrderRow />);
    const tableRow = screen.getByTestId('order-row-undefined');
    const columnsQuantity = tableRow.getElementsByTagName('td');
    expect(tableRow).toBeInTheDocument();
    expect(columnsQuantity.length).toEqual(5);
  });
});
