import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Player from './Player';
import { Players, calculatePlayerPositions } from './../api/players';

export default class PlayerList extends Component {
    constructor(props) {
        super(props);
        let players = Players.find({}, { sort: { score: -1 } }).fetch();
        this.state = {
            players
        }
        this.renderPlayers = this.renderPlayers.bind(this);
    }

    //React Life cycle hook, kinda like ngOnit()
    componentDidMount() {
        this.playersTracker = Tracker.autorun(() => {
            let players = Players.find({}, { sort: { score: -1 } }).fetch();
            let positionedPlayers = calculatePlayerPositions(players)
            this.setState({
                ...this.state,
                players: positionedPlayers
            })
        });
    }

    componentWillUnmount() {
        this.playersTracker.stop();
    }

    renderPlayers() {
        if (this.state.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message item__message--empty">Add your first player to get started.</p>
                </div>
            );
        } else {
            //after setting state in constructor, we can use this.state instead of this.props
            return this.state.players.map((player) => {
                return (
                    <Player key={player._id} player={player} />
                );
            });
        }
    }

    render() {
        return (
            <div>
                <FlipMove duration={750} easing="ease-out" maintainContainerHeight="true">
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    }
}
