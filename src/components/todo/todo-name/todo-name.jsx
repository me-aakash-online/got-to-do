import React from 'react';
import LABELS from '../../../globals/constants';

const TodoName = ({ register, errors }) => {
    return (
        <div className="todo-item">
            <label className="todo-item__label" htmlFor="todos">
                {LABELS.TODO.NAME}
            </label>
            <div className="todo-item__text">
                <textarea
                    draggable={false}
                    name="name"
                    ref={register({ required: true })}
                    id="todos"
                ></textarea>
                {errors.name && (
                    <span className="todo-item__error" role="alert">
                        {LABELS.TODO.ERROR}
                    </span>
                )}
            </div>
        </div>
    );
};

export default TodoName;
