'use strict';

import React from 'react';
import { NavBar, Icon } from 'antd-mobile';

require('styles/common/NavBar.less');

class NavBarComponent extends React.Component {
  render() {
    return (
      <div className="navbar-component">
        <NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                  <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                  <Icon key="1" type="ellipsis" />,
                ]}
        >NavBar</NavBar>
      </div>
    );
  }
}

NavBarComponent.displayName = 'CommonNavBarComponent';

// Uncomment properties you need
// NavBarComponent.propTypes = {};
// NavBarComponent.defaultProps = {};

export default NavBarComponent;
