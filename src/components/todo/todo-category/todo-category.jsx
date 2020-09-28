import React from 'react';
import { connect } from 'react-redux';
import LABELS from '../../../globals/constants';
import initialState from '../../../store/initialState';

const TodoCategory = ({ categories, register, errors }) => {
    return (
        <div className="todo-item">
            <label className="todo-item__label" htmlFor="bucket">
                {LABELS.TODO.CATEGORY}
            </label>
            <div className="todo-item__text">
                <input
                    name="categoryId"
                    ref={register({ required: true })}
                    id="bucket"
                    type="text"
                    list="bucketList"
                    autoComplete="off"
                />
                <datalist id="bucketList">
                    {categories.map((item, i) =>
                        item !== initialState.categories[0] ? (
                            <option key={i} value={item}>
                                {item}
                            </option>
                        ) : null
                    )}
                </datalist>
                {errors.name && (
                    <span className="todo-item__error" role="alert">
                        {LABELS.TODO.ERROR}
                    </span>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    categories: [...state.categories],
});

export default connect(mapStateToProps)(TodoCategory);
