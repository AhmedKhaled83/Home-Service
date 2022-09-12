import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('screen');
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {icons, img, COLORS} from '../../utils/index';
import Feather from 'react-native-vector-icons/Feather';

import styles from '../../styles/Home/NotificationStyle';

export default function Notification({navigation}) {
  const [data, setData] = useState([
    {
      time: 'منذ دقيقتين',
      order: 'مثال للنص يمكن تغيره مثال للنص يمكن تغيره مثال للنص يمكن تغيره ',
      image: img.clean,
      status: 'تم قبول طلبك.',
    },
    {
      time: 'منذ دقيقتين',
      order: 'مثال للنص يمكن تغيره مثال للنص يمكن تغيره مثال للنص يمكن تغيره ',
      image: img.clean,
      status: 'تم قبول طلبك.',
    },
    {
      time: 'منذ دقيقتين',
      order: 'مثال للنص يمكن تغيره مثال للنص يمكن تغيره مثال للنص يمكن تغيره ',
      image: img.clean,
      status: 'تم قبول طلبك.',
    },
    {
      time: 'منذ دقيقتين',
      order: 'مثال للنص يمكن تغيره مثال للنص يمكن تغيره مثال للنص يمكن تغيره ',
      image: img.clean,
      status: 'تم قبول طلبك.',
    },
  ]);

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={styles.color_stutsBar.color}
      />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.header}>الاشعارات</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.viewIcon}>
            <Feather
              name="chevron-right"
              color={styles.black2.color}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewList}>
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={data}
            renderItem={({item, key}) => (
              <View style={styles.containerList}>
                <Image
                  source={icons.ellipse2}
                  resizeMode="contain"
                  style={styles.ellipse}
                />
                <View style={styles.container2}>
                  <Image
                    style={styles.img}
                    resizeMode="contain"
                    source={item.image}
                  />
                  <View style={styles.container3}>
                    <View style={styles.container4}>
                      <Text style={styles.status}>{item.status}</Text>
                      <Text style={styles.time}>{item.time}</Text>
                    </View>
                    <Text style={styles.order}>{item.order}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

// const styles = StyleSheet.create({
//   input: {
//     flex: 1,
//     alignSelf: 'center',
//     paddingTop: 25,
//     fontSize: 20,
//     fontWeight: '400',
//     width: width * 0.2,
//     height: width * 0.2,
//     paddingLeft: 150,
//   },
//   style_button_back: {
//     width: width * 0.0888,
//     height: width * 0.0888,
//     backgroundColor: '#fff',
//     padding: width * 0.01111,
//     //justifyContent: "left",
//     alignSelf: 'center',
//     borderRadius: RFValue(8),
//     marginRight: 12,
//     marginTop: 9,
//   },
//   styleOrder: {
//     alignSelf: 'center',
//     color: '#353535',
//     fontWeight: '400',
//     fontSize: 16,
//     paddingLeft: 100,
//     paddingRight: 40,
//   },
//   styleTime: {
//     textAlign: 'left',
//     fontWeight: '400',
//     fontSize: 12,
//     color: '#353535CC',
//   },
//   styleName: {
//     fontWeight: '400',
//     fontSize: 14,
//     textAlign: 'right',
//     paddingTop: 5,
//     color: '#4F5050',
//     paddingRight: 10,
//     //paddingBottom:5,
//   },
// });
