import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TodoName from './todo-name/todo-name';
import TodoCompleted from './todo-completed/todo-completed';
import TodoCategory from './todo-category/todo-category';
import './todo.scss';
import { addTodo, modifyTodo } from '../../store/action-creators/todos';
import { useForm } from 'react-hook-form';
import { addCategory } from '../../store/action-creators/categories';
import LABELS from '../../globals/constants';

const Todo = ({ currentTodo, onTodoSave, onCategorySave }) => {
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm({
        defaultValues: { ...currentTodo },
    });

    const onSubmit = (data) => {
        onTodoSave(
            {
                ...data,
                id: !!currentTodo ? currentTodo.id : undefined,
                name: data.name.trim(),
                categoryId: data.categoryId.trim(),
            },
            !!currentTodo
        );
        onCategorySave(data.categoryId.trim());
        goBack();
    };

    const goBack = () => {
        history.push('/');
    };

    return (
        <div className="todo-container">
            <form className="todo-card" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="todo-card__header">
                    {!!currentTodo ? LABELS.TODO.EDITTODO : LABELS.TODO.NEWTODO}
                </h1>
                <TodoName register={register} errors={errors} />
                <TodoCompleted register={register} />
                <TodoCategory register={register} errors={errors} />
                <div className="todo-card__actions">
                    <div
                        type="submit"
                        className="todo-button todo-button-secondary"
                        onClick={goBack}
                    >
                        <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div
                        data-testid="submit-todo"
                        type="submit"
                        className="todo-button todo-button-primary"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Submit
                    </div>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentTodo: state.todos.find((item) => item.id === state.currentTodo),
});

const mapDispatchToProps = (dispatch) => ({
    onTodoSave: (todo, isUpdate) =>
        isUpdate ? dispatch(modifyTodo(todo)) : dispatch(addTodo(todo)),
    onCategorySave: (category) => dispatch(addCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
