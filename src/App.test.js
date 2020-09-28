import React from 'react';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import App from './App';
import LABELS from './globals/constants';

test('renders home page', () => {
    const { getByText } = render(<App />);
    const header = getByText(LABELS.HEADER);
    expect(header).toBeInTheDocument();
});

test('sidebar has default bucket', () => {
    const { getByText, getByTestId } = render(<App />);
    fireEvent.click(getByTestId('sidebar-open-button'));
    const defaultBucket = getByText(LABELS.SIDEBAR.DEFAULTBUCKET);
    expect(defaultBucket).toBeInTheDocument();
});

test('create new todo-works', () => {
    const { getByText, getByTestId } = render(<App />);
    fireEvent.click(getByTestId('sidebar-create-todo'));
    const todoPageHeader = getByText(
        (content, element) =>
            content.startsWith(LABELS.TODO.EDITTODO) ||
            content.startsWith(LABELS.TODO.NEWTODO)
    );
    expect(todoPageHeader).toBeInTheDocument();
});

test('shows error on form invalid', async () => {
    const { getAllByText, getByTestId } = render(<App />);
    fireEvent.click(getByTestId('submit-todo'));
    const todoPageHeader = await waitForElement(() =>
        getAllByText(LABELS.TODO.ERROR)
    );
    expect(todoPageHeader).toHaveLength(2);
});
