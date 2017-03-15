require('styles/Antd.less');
require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';
import {Toast} from 'antd-mobile';
import TabBar from './common/TabBarComponent';


class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: [],
      picker: []
    }
    this.onChange = this.onChange.bind(this);
    this.clear = this.clear.bind(this);
  }

  componentWillMount() {
    const seasons = [
      [
        {
          label: '2013',
          value: '2013',
        },
        {
          label: '2014',
          value: '2014',
        },
      ],
      [
        {
          label: '春',
          value: '春',
        },
        {
          label: '夏',
          value: '夏',
        },
      ],
    ];
    this.setState({
      picker: seasons
    });
  }

  onChange(value) {
    Toast.info(value);
    this.setState({value});
  }

  clear() {
    this.setState({value: ''});
  }

  render() {
    return (
      <div className="container">
        <TabBar />
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
