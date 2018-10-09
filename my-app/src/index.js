import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Image, Icon, Dropdown, Grid, Divider, List } from 'semantic-ui-react';

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <Menu borderless className='topmenu'>
            <Container>
              <Menu.Item><Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png' /></Menu.Item>
              <Menu.Item position="right">Home</Menu.Item>
              <Dropdown item text="About us" icon="dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>St. Patrick's Day</Menu.Item>
              <Dropdown item text="Menus" icon="dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>Bar</Menu.Item>
              <Menu.Item><Icon name='search icon' /></Menu.Item>
            </Container>
          </Menu>

          <div className='img-background'>
            <Grid  centered verticalAlign='middle' textAlign='center' columns={2}>
              <Grid.Column>
                <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png' />
              </Grid.Column>

              <Grid.Column>
                A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the
                waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.
              </Grid.Column>
            </Grid>
          </div>

          <div className="footer">
            <Grid columns={3}>
              <Grid.Column>
                Lunch
                <Divider inverted />
                <List>
                  <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
                  <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                Bar
                <Divider inverted />
                <List>
                  <List.Item>Monday- Friday from 11:00am</List.Item>
                  <List.Item>Saturday- Sunday from 4:00pm</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                Dinner
                <Divider inverted />
                <List>
                  <List.Item>Monday – Saturday: 5:30pm – 10:00pm</List.Item>
                  <List.Item>Sunday: 5:00pm – 9:00pm</List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </div>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));