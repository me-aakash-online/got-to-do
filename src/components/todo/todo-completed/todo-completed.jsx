import React from 'react';
import LABELS from '../../../globals/constants';

const TodoCompleted = ({ register }) => {
    return (
        <div className="todo-item">
            <label className="todo-item__label" htmlFor="completed">
                {LABELS.TODO.COMPLETED}
            </label>
            <input
                name="status"
                ref={register}
                id="completed"
                type="checkbox"
            />
        </div>
    );
};

export default TodoCompleted;
