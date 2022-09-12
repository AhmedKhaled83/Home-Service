import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../styles/profile/AddressStyle';
import {icons} from '../../utils';

function AddressProfile({navigation}) {
  const [data, setData] = useState([
    {
      title:
        'مصر, القاهرة, فى السادس من أكتوبر مصر, القاهرة, فى السادس من أكتوبر',
    },
    {
      title:
        'مصر, القاهرة, فى السادس من أكتوبر مصر, القاهرة, فى السادس من أكتوبر',
    },
  ]);
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={styles.color_stutsBar.color}
      />
      <View style={styles.container}>
        {/* header */}
        <View style={styles.containerHeader}>
          <Text style={styles.header}>العنوان</Text>
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

        {/* show address */}
        <View style={styles.viewList}>
          <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.containerList}>
                <Image
                  source={icons.location}
                  resizeMode="contain"
                  style={styles.location}
                />
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    source={icons.pen}
                    resizeMode="contain"
                    style={styles.pen}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('AddressEditProfile');
            }}>
            <Image
              source={icons.plus}
              resizeMode="contain"
              style={styles.plus}
            />
            <Text style={styles.textBtn}>اضافه عنوان جديد</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default AddressProfile;
