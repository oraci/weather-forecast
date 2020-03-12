import React, {Component} from 'react';
import CardList from '../CardList/CardList';
import Filter from '../Filter/Filter';
import { Container } from './styles';
import { getWeatherApi } from './api';
import { WATCH_GET_WEATHER } from './constants';
import { connect } from 'react-redux';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
      data: []
    }
  };
      
  onFilter = (city) => {
    const {getWeather} = this.props;
    getWeather(city);
  }

  render() {
    const {weather} = this.props;

    return (
      <Container>
        <Filter onFilter={this.onFilter} />
        <CardList data={weather}/>        
      </Container>
    )
  }
}

const mapStateToProps = ({weather}) => {
  return {
    ...weather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (city) => dispatch({ type: WATCH_GET_WEATHER, city }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);