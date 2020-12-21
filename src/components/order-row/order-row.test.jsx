import { render, screen } from "@testing-library/react";

import OrderRow from "./order-row";
import { centsToDollars } from "../../utils";

describe('order row', () => {
  const order = {
    id: '1',
    customer: 'Luis',
    destination: 'This is the destination',
    item: 'Ramen',
    event_name: 'CREATED',
    price: 2000
  };

  const mount = (props) => {
    render(<table>
      <tbody>
        <OrderRow order={order} {...props} />
      </tbody>
    </table>);
  };

  it('renders row with five columns', () => {
    mount();
    const tableRow = screen.getByTestId('order-row-1');
    const columnsQuantity = tableRow.getElementsByTagName('td');
    expect(tableRow).toBeInTheDocument();
    expect(columnsQuantity.length).toEqual(5);
  });
  
  it('reders order values', () => {
    const expectedPrice = centsToDollars(order.price);

    mount();
    expect(screen.getByText('Luis')).toBeInTheDocument();
    expect(screen.getByText('This is the destination')).toBeInTheDocument();
    expect(screen.getByText('Ramen')).toBeInTheDocument();
    expect(screen.getByText('CREATED')).toBeInTheDocument();
    expect(screen.getByText(`$${expectedPrice}`)).toBeInTheDocument();
  });

  it('should work without order', () => {
    mount({ order: null });
    const tableRow = screen.getByTestId('order-row-undefined');
    const columnsQuantity = tableRow.getElementsByTagName('td');
    expect(tableRow).toBeInTheDocument();
    expect(columnsQuantity.length).toEqual(5);
  });
});
