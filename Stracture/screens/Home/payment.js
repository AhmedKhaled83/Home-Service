import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import {COLORS, icons, img} from '../../utils/index';
import styles from '../../styles/Home/PaymentStyle';
import Feather from 'react-native-vector-icons/Feather';

function Payment({navigation}) {
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [title, setTitle] = useState('');
  const [visa, setVisa] = useState(true);
  const [paypal, setPaypal] = useState(false);
  const [master, setMaster] = useState(false);

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          {/* header */}
          <View style={styles.containerHeader}>
            <Text style={styles.header}>حجز الخدمة</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.viewIcon}>
              <Feather
                name="chevron-right"
                color={COLORS.mainBlack}
                size={25}
              />
            </TouchableOpacity>
          </View>
          {/* header */}
          <Text style={styles.text}>طريقة الدفع</Text>
          <View style={styles.view2}>
            <Text style={styles.text1}>سعر الخدمة</Text>
            <Text style={styles.text2}>180 ج</Text>
          </View>
          {/* visa */}
          <View style={styles.containerVias}>
            <TouchableOpacity
              style={visa ? styles.area : [styles.area, styles.area2]}
              onPress={() => {
                setPaypal(false);
                setMaster(false);
                setVisa(true);
              }}>
              <Image source={img.visa} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity
              style={paypal ? styles.area : [styles.area, styles.area2]}
              onPress={() => {
                setPaypal(true);
                setMaster(false);
                setVisa(false);
              }}>
              <Image
                source={img.paypal}
                style={styles.imgPayment}
                resizeMode="center"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={master ? styles.area : [styles.area, styles.area2]}
              onPress={() => {
                setPaypal(false);
                setMaster(true);
                setVisa(false);
              }}>
              <Image
                resizeMode="center"
                style={styles.imgPayment}
                source={img.masterCard}
              />
            </TouchableOpacity>
          </View>
          {/* visa

        {/* number card */}
          <Text style={styles.text3}>رقم البطاقة</Text>
          <TextInput
            placeholder="1234 1234 1234 1234 1234"
            value={number}
            style={styles.ViewInput}
            onChangeText={value => {
              setNumber(value);
            }}
            placeholderTextColor={styles.color_textInput.color}
          />
          <View style={styles.containerCvAndDate}>
            {/* date payment */}
            <View>
              <Text style={styles.text3}>تاريخ انتهاء البطاقة</Text>
              <View style={styles.changeInputView}>
                <Image source={icons.calender} resizeMode="contain" />
                <TextInput
                  placeholder="1/5/2024"
                  value={expiry}
                  style={styles.TextInputInside}
                  onChangeText={value => {
                    setExpiry(value);
                  }}
                  placeholderTextColor={styles.color_textInput.color}
                />
              </View>
            </View>
            {/* date payment */}

            {/* cvv */}
            <View>
              <Text style={styles.text3}>كود الحماية (cvv)</Text>
              <View style={styles.changeInputView}>
                <TextInput
                  placeholder="1234"
                  value={cvc}
                  style={[styles.TextInputInside]}
                  onChangeText={value => {
                    setCvc(value);
                  }}
                  placeholderTextColor={styles.color_textInput.color}
                />
              </View>
            </View>
          </View>
          {/* cvv */}

          {/* title */}
          <Text style={styles.text3}>العنوان</Text>
          <View style={[styles.ViewInput, styles.view]}>
            <TextInput
              placeholder="مصر الجديدة"
              value={title}
              style={[styles.TextInputInside]}
              onChangeText={value => {
                setTitle(value);
              }}
              placeholderTextColor={styles.color_textInput.color}
            />
            <Image source={icons.pen} resizeMode="contain" style={styles.img} />
          </View>
          {/* title */}

          {/* button  */}
          <TouchableOpacity style={styles.btnBook} onPress={() => {}}>
            <Text style={styles.btnTextBook}>تاكيد الحجز</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
}

export default Payment;
