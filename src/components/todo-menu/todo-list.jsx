import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todo-item';
import './todo-list.scss';
import initialState from '../../store/initialState';
import LABELS from '../../globals/constants';

const defaultCategoy = initialState.categories[0];

const TodoList = ({ todos, currentCategory }) => {
    const list = todos.filter(
        (item) =>
            item.categoryId === currentCategory ||
            currentCategory === defaultCategoy
    );

    return (
        <section className="todo-menu-container">
            <div className="todo-menu">
                {!!list.length ? (
                    list.map((item) => (
                        <TodoItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            status={item.status}
                        />
                    ))
                ) : (
                    <h5>
                        {currentCategory === defaultCategoy
                            ? LABELS.TODOMENU.EMPTY
                            : LABELS.TODOMENU.EMPTYBUCKET}
                    </h5>
                )}
            </div>
        </section>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos.map(({ name, status, categoryId, id }) => ({
        name,
        status,
        categoryId,
        id,
    })),
    currentCategory: state.currentSelection,
});

export default connect(mapStateToProps)(TodoList);
