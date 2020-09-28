import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LABELS from '../../globals/constants';
import { setBucketListOpenStatus } from '../../store/action-creators/list-open';
import { resetCurrentTodo } from '../../store/action-creators/todos';
import Categories from './categories/categories';
import './sidebar.scss';

const Sidebar = ({ resetCurrentTodo, isOpen, setOpen }) => {
    const history = useHistory();

    const handleClick = () => {
        resetCurrentTodo();
        history.push('/todo');
    };

    const toggleOpen = () => {
        setOpen(!isOpen);
    };

    return (
        <aside className="sidebar">
            <div
                data-testid="sidebar-create-todo"
                className="sidebar__button"
                onClick={handleClick}
            >
                <svg
                    className="sidebar__icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </div>
            <div className="divider"></div>
            <div
                data-testid="sidebar-open-button"
                className="sidebar__subtitle"
                onClick={toggleOpen}
            >
                <p className="">{LABELS.SIDEBAR.CATEGORIES}</p>
                {isOpen ? (
                    <svg
                        className="dropdown-icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <svg
                        className="dropdown-icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </div>
            {isOpen && <Categories />}
        </aside>
    );
};

const mapStateToProps = (state) => ({
    isOpen: state.isBucketListOpen,
});

const mapDispatchToProps = (dispatch) => ({
    resetCurrentTodo: () => dispatch(resetCurrentTodo()),
    setOpen: (status) => dispatch(setBucketListOpenStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
