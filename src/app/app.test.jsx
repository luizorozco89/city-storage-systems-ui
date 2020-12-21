import { render, screen, fireEvent, act } from "@testing-library/react";
import socketIOClient from "socket.io-client";

import App from "./app";

jest.mock('socket.io-client');

describe('app', () => {
  const orders = [
    {
      id: '1',
      customer: 'Luis',
      destination: 'Luis dish destination',
      item: 'Ramen',
      event_name: 'CREATED',
      price: 2000
    },
    {
      id: '2',
      customer: 'John',
      destination: 'John dish destination',
      item: 'Sushi',
      event_name: 'COOKED',
      price: 3050
    },
    {
      id: '3',
      customer: 'David',
      destination: 'David dish destination',
      item: 'Pizza',
      event_name: 'DELIVERED',
      price: 1250
    }
  ];

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('displays main container correctly', () => {
    socketIOClient.mockReturnValue({
      on: (event, callback) => {
        const data = [];
        callback(data);
      }
    });
    render(<App />);
    const appMainContainer = screen.getByTestId('app-main-container');
    expect(appMainContainer).toBeInTheDocument();
  });
  
  it('displays no orders on orders table', () => {
    socketIOClient.mockReturnValue({
      on: (event, callback) => {
        const data = [];
        callback(data);
      }
    });
    render(<App />);
    const ordersTable = screen.getByTestId('orders-table-body');
    const tableRows = ordersTable.getElementsByTagName('tr');
    expect(tableRows.length).toEqual(0);
  });

  it('displays three rows on orders table', () => {
    socketIOClient.mockReturnValue({
      on: (event, callback) => {
        callback(orders);
      }
    });
    render(<App />);
    const ordersTable = screen.getByTestId('orders-table-body');
    const tableRows = ordersTable.getElementsByTagName('tr');
    expect(tableRows.length).toEqual(3);
  });

  it('should filter orders by price', () => {
    socketIOClient.mockReturnValue({
      on: (event, callback) => {
        callback(orders);
      }
    });
    const { container } = render(<App />);
    const ordersTable = screen.getByTestId('orders-table-body');
    let tableRows = ordersTable.querySelectorAll('.order-row');
    expect(tableRows.length).toEqual(3);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    let matchesText = container.querySelector(`[data-testid="matches-text"]`);
    expect(matchesText).toBeNull();
    fireEvent.change(searchInput, { target: { value: '20.00'} });
    tableRows = ordersTable.querySelectorAll('.order-row');
    expect(tableRows.length).toEqual(1);
    matchesText = screen.getByTestId('matches-text');
    expect(matchesText).toBeInTheDocument();
    const matchesNumber = screen.getByTestId('matches-number');
    expect(matchesNumber.innerHTML).toEqual('1');
  });

  it('should not find any order filtering by price', () => {
    socketIOClient.mockReturnValue({
      on: (event, callback) => {
        callback(orders);
      }
    });
    const { container } = render(<App />);
    const ordersTable = screen.getByTestId('orders-table-body');
    let tableRows = ordersTable.querySelectorAll('.order-row');
    expect(tableRows.length).toEqual(3);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    let matchesText = container.querySelector(`[data-testid="matches-text"]`);
    expect(matchesText).toBeNull();
    fireEvent.change(searchInput, { target: { value: '10.00'} });
    tableRows = ordersTable.querySelectorAll('.order-row');
    expect(tableRows.length).toEqual(0);
    matchesText = screen.getByTestId('matches-text');
    expect(matchesText).toBeInTheDocument();
    const matchesNumber = screen.getByTestId('matches-number');
    expect(matchesNumber.innerHTML).toEqual('0');
  });

  it('should merge current orders with new orders', () => {
    let callback;

    socketIOClient.mockReturnValue({
      on: (event, cb) => {
        callback = cb;
        callback(orders);
      }
    });
    const { container } = render(<App />);

    let ordersTable = screen.getByTestId('orders-table-body');
    let tableRows = ordersTable.querySelectorAll('.order-row');
    expect(tableRows.length).toEqual(3);
    const newOrders = [
      {
        id: '1',
        customer: 'Luis',
        destination: 'Luis dish destination',
        item: 'Ramen',
        event_name: 'COOKED',
        price: 2000
      },
      {
        id: '4',
        customer: 'John',
        destination: 'John dish destination',
        item: 'Sushi',
        event_name: 'CREATED',
        price: 3050
      }
    ];
    act(() => {
      callback(newOrders);
    });
    ordersTable = screen.getByTestId('orders-table-body');
    tableRows = ordersTable.querySelectorAll('.order-row');
    expect(tableRows.length).toEqual(4);
  });

  it('should filter when new orders arrive', () => {
    let callback;

    socketIOClient.mockReturnValue({
      on: (event, cb) => {
        callback = cb;
        act(() => {
          callback([]);
        });
      }
    });
    const { container } = render(<App />);

    let ordersTable = screen.getByTestId('orders-table-body');
    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: '30.50'} });
    let tableRows = ordersTable.querySelectorAll('.order-row');
    expect(tableRows.length).toEqual(0);

    const newOrders = [
      {
        id: '1',
        customer: 'Luis',
        destination: 'Luis dish destination',
        item: 'Ramen',
        event_name: 'COOKED',
        price: 2000
      },
      {
        id: '4',
        customer: 'John',
        destination: 'John dish destination',
        item: 'Sushi',
        event_name: 'CREATED',
        price: 3050
      }
    ];
    act(() => {
      callback(newOrders);
    });
    ordersTable = screen.getByTestId('orders-table-body');
    tableRows = ordersTable.querySelectorAll('.order-row');
    expect(tableRows.length).toEqual(1);
  });
});
