import React from 'react';
import { connect } from 'react-redux';
import { changeSelection } from '../../../store/action-creators/selection';
import './categories.scss';

const Categories = ({
    categories,
    currentSelection,
    updateCurrentCategory,
}) => {
    const handleClick = (e) => {
        const name = e.target.id;
        name !== currentSelection && updateCurrentCategory(name);
    };

    return (
        <div className="category">
            {categories.map((item, i) => (
                <div
                    id={item}
                    className="category__item"
                    key={i}
                    onClick={handleClick}
                >
                    <span>{item}</span>
                    {item === currentSelection && (
                        <div className="category__item--active" />
                    )}
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    categories: [...state.categories],
    currentSelection: state.currentSelection,
});

const mapDispatchToProps = (dispatch) => ({
    updateCurrentCategory: (category) => dispatch(changeSelection(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
