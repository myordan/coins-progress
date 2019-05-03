import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';

import CoinProgress from '../components/coin-progress';
import DiscoverSlider from '../components/discover-slider';
import RecipeCard from '../components/recipe-card';

import { slides, recipes } from './mock';

class Main extends Component {
  onPressSlide = (key) => {
    alert(key);
  }

  onPressRecipe = (recipe) => () => {
    // alert("You clicked " + recipe.title);
  }

  renderItem = (item) => (
    <RecipeCard
      title={item.title}
      time={item.time}
      color={item.color}
      image={item.image}
      coinCount={item.coinCount}
      onPress={this.onPressRecipe(item)}
    />
  )

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgba(245, 245, 250, 1)' }}>
        {/* <CoinProgress
          activeSection="daily"
          changeSection={(section) => { alert(section.toUpperCase() + " section"); }}
          coinsLeftToday={30}
          coinsUsedToday={50}
          coinsEarnedToday={20}
          dailyProgress={60}
          weeklyProgress={80}
        /> */}
        <DiscoverSlider 
          slides={slides}
          onPress={this.onPressSlide}
        />
        <View style={{ flex: 1, padding: 9}}>
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{fontSize: 24}}>Discover all recipes</Text>
          </View>
          <FlatList
            style={{ flex: 1 }}
            data={recipes}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => this.renderItem(item)}
            numColumns={2}
          />
        </View>
      </View>
    )
  }
}

export default Main;