import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {img} from '../../utils/index';
import styles from '../../styles/Auth/OnBoardingStyle';
const {width} = Dimensions.get('screen');

const slides = [
  {
    id: '1',
    subtitle: 'بأقل مجهود ووقت والسعر\n    اللي يناسبك  ',
    title: 'ابحث عن خدمتك!',
    image: img.OnBoarding_image_1,
  },
  {
    id: '2',
    image: img.OnBoarding_image_2,
    title: 'قدم خدماتك معانا!',
    subtitle: 'قم بتوسيع جهات عملك واحصل\n علي دخل ثابت',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.containerSlide}>
        <Image
          source={item?.image}
          style={styles.imgSlide}
          resizeMode={'contain'}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const Footer = () => {
    return (
      <View style={styles.containerFooter}>
        {/* Indicator container */}
        <View style={styles.viewPoint}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: styles.Color_VisPoint.color,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View>
          {currentSlideIndex == slides.length - 1 ? (
            <View>
              <TouchableOpacity
                style={[styles.btnContinue, styles.btnContinueUp]}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={styles.textBtnContinue}>استمر</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnContinue}
                onPress={goToNextSlide}>
                <Text style={styles.textBtnContinue}>استمرار</Text>
              </TouchableOpacity>
              <View />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('Login');
                }}
                style={styles.btnSkip}>
                <Text style={styles.textBtnSkip}>تخطى</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle="dark-content"
      />
      <Animatable.View animation="fadeInDownBig" style={styles.animatedView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            contentContainerStyle={styles.flatList}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={slides}
            pagingEnabled
            renderItem={({item}) => <Slide item={item} />}
          />
          <Footer />
        </ScrollView>
      </Animatable.View>
    </>
  );
};
export default Onboarding;
