import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../styles/Home/SearchStyle';
import {icons, COLORS, img} from '../../utils';

const Search = ({navigation}) => {
  const [text, onChangeText] = useState('');

  const [data, setData] = useState([
    {
      name: 'تصليح حنفية مطبخ',
    },
    {
      name: 'تصليح حنفية حمام',
    },
    {
      name: 'تصليح حنفية ',
    },
  ]);

  const [arr, setArr] = useState([]);

  const search = value => {
    let list = data.filter(e =>
      e.name.toLowerCase().includes(value.toLowerCase()),
    );
    if (value.length == 0) {
      onChangeText('');
      return setArr([]);
    }
    setArr(list);
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#E5E5E5'} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
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
            <View style={styles.ViewInput}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={icons.search} resizeMode="contain" />
                <TextInput
                  style={styles.insideTextInput}
                  onChangeText={value => {
                    onChangeText(value);
                    search(value);
                  }}
                  value={text}
                  placeholder="ابحث عن ما تريد"
                  placeholderTextColor={styles.color_textInput.color}
                />
              </View>
              {text.length > 0 ? (
                <TouchableOpacity
                  onPress={() => {
                    search('');
                  }}>
                  <Feather name="x" color={styles.black2.color} size={20} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('FilterSearch');
                  }}>
                  <Image source={icons.filter} resizeMode="contain" />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {arr.length > 0 ? (
            <FlatList
              data={arr}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item, index}) => (
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Image source={icons.above} resizeMode="contain" />
                </TouchableOpacity>
              )}
            />
          ) : (
            <View style={styles.empty}>
              <Image source={img.empty} resizeMode="contain" />
              <Text style={styles.textEmpty}>ليس هناك أى نتيجة للبحث</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Search;
