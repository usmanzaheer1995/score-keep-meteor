import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import App from './../imports/ui/App';

Meteor.startup(() => {
    let title = 'Score Keep';
    ReactDOM.render(<App title={title}/>, document.getElementById('app'));
});