import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';

import CoinProgress from '../components/coin-progress';
import RecipeCard from '../components/recipe-card';

const recipes = [
  {
    id: "1",
    title: "Pumpkin soup with onion, pesto and beef",
    time: "40 minutes",
    color: "#26b47a",
    image: "https://images.unsplash.com/photo-1510431198580-7727c9fa1e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    coinCount: 17
  },
  {
    id: "2",
    title: "Sandwich with ham and cheese",
    time: "15 minutes",
    color: "#ffc726",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    coinCount: 8
  },
  {
    id: "3",
    title: "French sandwich with boiled eggs and…",
    time: "12 minutes",
    color: "#26b47a",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    coinCount: 12
  },
  {
    id: "4",
    title: "Pancakes with vanilla and blueberries",
    time: "25 minutes",
    color: "#ffc726",
    image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    coinCount: 14
  },
];

class Main extends Component {
  onPressRecipe = (recipe) => () => {
    alert("You clicked " + recipe.title);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgba(245, 245, 250, 1)' }}>
        <CoinProgress
          activeSection="daily"
          changeSection={(section) => { alert(section.toUpperCase() + " section"); }}
          coinsLeftToday={30}
          coinsUsedToday={50}
          coinsEarnedToday={20}
          dailyProgress={60}
          weeklyProgress={80}
        />
        <View style={{ flex: 1, padding: 9}}>
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{fontSize: 24}}>Discover all recipes</Text>
          </View>
          <FlatList
            style={{ flex: 1 }}
            data={recipes}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <RecipeCard 
                title={item.title}
                time={item.time}
                color={item.color}
                image={item.image}
                coinCount={item.coinCount}
                onPress={this.onPressRecipe(item)}
              />
            )}
            numColumns={2}
          />
        </View>
      </View>
    )
  }
}

export default Main;