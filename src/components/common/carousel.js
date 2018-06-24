/**
 * @component carousel
 * @description 轮播
 * @time 2018/6/24
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { theme } from '../../constants';

const { width } = Dimensions.get('window');

class BorderShadow extends React.PureComponent {
  state = {
    currentIndex: 1,
  };
  onScrollHandle = () => {
    const index = this.carouselRef.currentIndex
    const { currentIndex } = this.state;
    if (currentIndex === index) return;
    this.setState({ currentIndex: index });
  }
  mapItem = ({ item }, parallaxProps) => {
    const { children } = this.props;
    if (!children) {
      throw new Error('must be children element');
    }
    return (
      <View>
        {React.cloneElement(children, { item })}
      </View>
    );
  };

  render() {
    const { entries } = this.props;
    if (!entries) return null;
    const { currentIndex } = this.state;
    return (
      <View>
        <Carousel
          ref={(c) => { this.carouselRef = c; }}
          data={entries}
          renderItem={this.mapItem}
          inactiveSlideOpacity={1}
          inactiveSlideScale={0.872}
          firstItem={currentIndex}
          sliderWidth={width}
          itemWidth={width / 3}
          hasParallaxImages
          onScroll={this.onScrollHandle}
        />
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={currentIndex}
          containerStyle={{
            paddingTop: 12,
            paddingBottom: 21,
          }}
          dotColor={theme.primaryColor}
          inactiveDotColor="#ffffff"
          dotContainerStyle={{
            marginHorizontal: 4,
          }}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 50,
          }}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </View>
    );
  }
}

BorderShadow.defaultProps = {
  entries: null,
};

BorderShadow.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.any),
  children: PropTypes.element.isRequired,
};

export default BorderShadow;
