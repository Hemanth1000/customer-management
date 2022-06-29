import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div><a href="https://www.linkedin.com/in/hemanth-loka/" className='navbar-brand'>Customer Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;