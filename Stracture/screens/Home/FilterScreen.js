import * as React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../styles/Home/Filter.screen.style';
import {img, COLORS} from '../../utils/index';

const Data = [
  {
    id: 1,
    first_name: 'المناظر الطبيعيه و الحدائق',
    image: img.garden,
  },
  {
    id: 2,
    first_name: 'التصميم الداخلي',
    image: img.design,
  },
  {
    id: 3,
    first_name: 'النقاشة',
    image: img.paint,
  },
  {
    id: 4,
    first_name: 'الكهرباء',
    image: img.electric,
  },
  {
    id: 5,
    first_name: 'تنظيف البيت',
    image: img.clean,
  },
  {
    id: 6,
    first_name: 'السباكة',
    image: img.maintain,
  },
];
import {Card} from 'react-native-paper';

export default class FilterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      renderData: Data,
    };
  }

  onPressHandler(id) {
    let renderData = [...this.state.renderData];
    for (let data of renderData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    this.setState({renderData});
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
        <View style={styles.containerStyle}>
          <View style={styles.headerStyle}>
            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.iconViewStyle}
              onPress={() => {
                // navigation.goBack();
              }}>
              <MaterialIcons
                name="arrow-forward-ios"
                style={styles.arrowIconStyle}
              />
            </TouchableOpacity>
            <View style={styles.textViewStyle}>
              <Text style={styles.headerTextStyle}>ما الخدمات المهتم بها؟</Text>
            </View>
          </View>
          <FlatList
            numColumns={2}
            data={this.state.renderData}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.containerStyle2}>
                <TouchableOpacity onPress={() => this.onPressHandler(item.id)}>
                  <Card style={styles.unSelectItemStyle}>
                    <Image source={item.image} style={styles.imageStyle} />
                    <View style={styles.containerStyle3}>
                      <Text style={styles.textStyle}>{item.first_name}</Text>
                    </View>
                    {item.selected == true ? (
                      <View style={styles.viewPlusIconStyle}>
                        <AntDesign name="plus" style={styles.plusIconStyle} />
                      </View>
                    ) : null}
                  </Card>
                </TouchableOpacity>
              </View>
            )}
          />

          <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
            <Text style={styles.textButtonStyle}>اختيار</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.skipButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
            }}>
            <Text style={[styles.textButtonStyle, {color: COLORS.mainBlue}]}>
              تخطي
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
