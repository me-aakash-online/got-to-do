import React from 'react';
import Sidebar from '../sidebar/sidebar';
import TodoList from '../todo-menu/todo-list';
import './home.scss';

const Home = () => {
    return (
        <section className="home">
            <Sidebar />
            <TodoList />
        </section>
    );
};

export default Home;
