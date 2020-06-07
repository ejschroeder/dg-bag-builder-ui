import React, { useState } from 'react';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext, Footer, Anchor, Text, Sidebar, Nav, Avatar } from 'grommet';
import { FormClose, Notification, Help, Projects, Clock, Menu, Actions as Brightness } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = props => {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      style={{ zIndex: '1' }}
      { ...props }
    />
  );
}

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} themeMode="dark" full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level='3' margin='none'>My App</Heading>
              <Box flex="grow"/>
              <Button icon={<Brightness />} />
              <Button icon={<Menu />} onClick={() => setShowSidebar(!showSidebar)} />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Sidebar 
                background="brand"
                header={
                  <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                }
                footer={
                  <Button icon={<Help />} hoverIndicator />
                }
              >
                <Nav gap="small">
                  <Button icon={<Projects />} hoverIndicator />
                  <Button icon={<Clock />} hoverIndicator />
                </Nav>
              </Sidebar>
              <Box flex align='center' justify='center'>
                app body
              </Box>
              {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'
                  >
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background='light-2'
                    tag='header'
                    justify='end'
                    align='center'
                    direction='row'
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background='light-2'
                    align='center'
                    justify='center'
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
