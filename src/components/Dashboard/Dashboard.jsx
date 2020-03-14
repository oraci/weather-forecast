import React, {Component} from 'react';
import { connect } from 'react-redux';

import CardList from '../CardList/CardList';
import Filter from '../Filter/Filter';
import Detail from '../Detail/Detail';

import { WATCH_GET_WEATHER, WATCH_IS_WEATHER_LOADING } from './constants';
import { Container } from './styles';


class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
      data: []
    }
  };
      
  onFilter = (city) => {
    const {getWeather, toggleWeatherLoading} = this.props;
    
    toggleWeatherLoading(true);
    getWeather(city);
  }

  render() {
    const {weather, isLoading} = this.props;

    return (
      <Container>
        <Filter onFilter={this.onFilter} />
        {!isLoading ? (<CardList data={weather}/>) : <div>Loading...</div>}
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
    getWeather: city => dispatch({ type: WATCH_GET_WEATHER, city }),
    toggleWeatherLoading: isLoading => dispatch({type: WATCH_IS_WEATHER_LOADING, isLoading}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);