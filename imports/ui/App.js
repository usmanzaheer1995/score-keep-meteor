import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        }
    }

    render() {
        return (
            <div>
                <TitleBar title={this.state.title} subtitle={`Created by Usman Zaheer`}/>
                <div className="wrapper">
                    <PlayerList />
                    <AddPlayer />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired
}