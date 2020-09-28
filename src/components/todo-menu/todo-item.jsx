import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LABELS from '../../globals/constants';
import {
    deleteTodo,
    updateCurrentTodo,
} from '../../store/action-creators/todos';
import './todo-list.scss';

const TodoItem = ({ setCurrentTodo, removeItem, id, name, status }) => {
    const history = useHistory();

    const handleClick = () => {
        setCurrentTodo(id);
        history.push(`/todo`);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        removeItem(id);
    };

    return (
        <div className="todo-item" onClick={handleClick}>
            <div className="todo-item__button" onClick={handleDelete}>
                <svg
                    className="delete-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <p className="todo-item__title">{name}</p>
            <div className="todo-item__spacer"></div>
            <div className="divider"></div>
            <p className="todo-item__status">
                {status ? (
                    <React.Fragment>
                        {LABELS.TODOMENU.DONE}
                        <svg
                            className="icon"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </React.Fragment>
                ) : (
                    LABELS.TODOMENU.NOTDONE
                )}
            </p>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setCurrentTodo: (id) => dispatch(updateCurrentTodo(id)),
    removeItem: (id) => dispatch(deleteTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
