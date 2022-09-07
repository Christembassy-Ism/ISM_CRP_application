import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, 
  Image} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

const CarouselListPage = ({paginate}) => {
  const [ state, setState ] = React.useState({
    carouselItems: [
    {
        url: require("../../assets/slide-1.png"),
        text: "Text 1",
    },
    {
        url: require("../../assets/slide-2.jpg"),
        text: "Text 3",
    },
    {
        url: require("../../assets/slide-3.jpg"),
        text: "Text 4",
    },
    {
        url: require("../../assets/slide-4.jpg"),
        text: "Text 5",
    },
  ],
  activeIndex : 0,
})

  const _renderItem = ({item,index}) => {
    return (
      <View className="p-1 items-center rounded-xl bg-blue-400">
        <Image
        source={item.url}
        className="w-full rounded-lg  object-contain"
        />
    </View>

    )
  }

  const Paginate = () => {
    return(
      <Pagination
      dotsLength={state.carouselItems.length}
      activeDotIndex={state.activeIndex}
      dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 5,
          backgroundColor: 'skyblue'
      }}
      inactiveDotStyle={{
          // Define styles for inactive dots here
      }}
      inactiveDotOpacity={0.6}
      inactiveDotScale={0.6}
    />
    )
  }

  return(
    <View >
    <Carousel
      layout={"default"}
      // ref={ref => this.carousel = ref}
      data={state.carouselItems}
      sliderWidth={400}
      itemWidth={350}
      renderItem={_renderItem}
      onSnapToItem = { index => setState(prev => ({...prev, activeIndex:index})) } />
    { paginate && <Paginate/> }
</View>
  )
}


export default CarouselListPage;