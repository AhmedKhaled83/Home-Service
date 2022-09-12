import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../styles/profile/EditAddressStyle';
import {icons} from '../../utils';
import DropDownPicker from 'react-native-dropdown-picker';
import {verticalScale} from 'react-native-size-matters';

function AddressEditProfile({navigation}) {
  const [openCountry, setOpenCountry] = useState(false);
  const [valueCountry, setValueCountry] = useState(null);
  const [itemsCountry, setItemsCountry] = useState([
    {label: 'مصر', value: 'مصر'},
    {label: 'بولاق', value: 'بولاق'},
  ]);

  const [openCity, setOpenCity] = useState(false);
  const [valueCity, setValueCity] = useState(null);
  const [itemsCity, setItemsCity] = useState([
    {label: 'القاهرة', value: 'القاهرة'},
    {label: 'طنطا', value: 'طنطا'},
  ]);

  const [openArea, setOpenArea] = useState(false);
  const [valueArea, setValueArea] = useState(null);
  const [itemsArea, setItemsArea] = useState([
    {label: 'مصر الجديدة', value: 'مصر الجديدة'},
    {label: 'مقطم', value: 'مقطم'},
  ]);

  const [openStreet, setOpenStreet] = useState(false);
  const [valueStreet, setValueStreet] = useState(null);
  const [itemsStreet, setItemsStreet] = useState([
    {label: 'شارع تسعين', value: 'شارع تسعين'},
    {label: 'شارع محمحد سادات', value: 'شارع محمد السادات'},
  ]);

  const [openNumber, setOpenNumber] = useState(false);
  const [valueNumber, setValueNumber] = useState(null);
  const [itemsNumber, setItemsNumber] = useState([
    {label: '100', value: '10'},
    {label: '150', value: '150'},
  ]);

  const onOpenNumber = useCallback(() => {
    setOpenCity(false);
    setOpenArea(false);
    setOpenStreet(false);
    setOpenCountry(false);
  }, []);

  const onOpenStreet = useCallback(() => {
    setOpenCity(false);
    setOpenArea(false);
    setOpenCountry(false);
    setOpenNumber(false);
  }, []);

  const onOpenCity = useCallback(() => {
    setOpenArea(false);
    setOpenCountry(false);
    setOpenNumber(false);
    setOpenStreet(false);
  }, []);

  const onOpenArea = useCallback(() => {
    setOpenCountry(false);
    setOpenNumber(false);
    setOpenStreet(false);
    setOpenCity(false);
  }, []);

  const onOpenCountry = useCallback(() => {
    setOpenNumber(false);
    setOpenStreet(false);
    setOpenArea(false);
    setOpenCity(false);
  }, []);

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={styles.color_stutsBar.color}
      />
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 40}}>
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
          {/* gps */}
          <TouchableOpacity style={styles.btnGps} onPress={() => {}}>
            <Image source={icons.gps} resizeMode="contain" />
            <Text style={styles.textGps}>احصل علي عنوانك الحالي</Text>
          </TouchableOpacity>
          {/* gps */}
          {/* country */}
          <View>
            <Text style={styles.text}>الدولة</Text>
            <DropDownPicker
              zIndex={5000}
              language="AR"
              placeholder="مصر"
              placeholderStyle={{
                color: styles.color_textInput.color,
                fontFamily: 'Cairo',
              }}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
              open={openCountry}
              onOpen={onOpenCountry}
              value={valueCountry}
              items={itemsCountry}
              setOpen={setOpenCountry}
              setValue={setValueCountry}
              setItems={setItemsCountry}
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              listItemLabelStyle={{
                fontFamily: 'Cairo',
              }}
            />
          </View>
          {/* country */}
          {/* city */}
          <View>
            <Text style={styles.text}>المدينة</Text>
            <DropDownPicker
              zIndex={4000}
              language="AR"
              placeholder="مصر"
              placeholderStyle={{
                color: styles.color_textInput.color,
                fontFamily: 'Cairo',
              }}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
              open={openCity}
              onOpen={onOpenCity}
              value={valueCity}
              items={itemsCity}
              setOpen={setOpenCity}
              setValue={setValueCity}
              setItems={setItemsCity}
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              listItemLabelStyle={{
                fontFamily: 'Cairo',
              }}
            />
          </View>
          {/* city */}
          <View>
            <Text style={styles.text}>المدينة</Text>
            <DropDownPicker
              zIndex={3000}
              language="AR"
              placeholder="المنطقة"
              placeholderStyle={{
                color: styles.color_textInput.color,
                fontFamily: 'Cairo',
              }}
              open={openArea}
              onOpen={onOpenArea}
              value={valueArea}
              items={itemsArea}
              setOpen={setOpenArea}
              setValue={setValueArea}
              setItems={setItemsArea}
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              listItemLabelStyle={{
                fontFamily: 'Cairo',
              }}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
            />
          </View>

          {/* city */}

          {/* street */}
          <View>
            <Text style={styles.text}>اسم الشارع</Text>
            <DropDownPicker
              zIndex={2000}
              language="AR"
              dropDownDirection="BOTTOM"
              placeholder="شارع تسعين"
              placeholderStyle={{
                color: styles.color_textInput.color,
                fontFamily: 'Cairo',
              }}
              open={openStreet}
              onOpen={onOpenStreet}
              value={valueStreet}
              items={itemsStreet}
              setOpen={setOpenStreet}
              setValue={setValueStreet}
              setItems={setItemsStreet}
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              listItemLabelStyle={{
                fontFamily: 'Cairo',
              }}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
            />
          </View>
          {/* street */}
          {/* number build */}
          <View>
            <Text style={styles.text}>رقم المبني</Text>
            <DropDownPicker
              zIndex={1000}
              language="AR"
              dropDownDirection="BOTTOM"
              placeholder="101"
              placeholderStyle={{
                color: styles.color_textInput.color,
                textAlign: 'left',
                fontFamily: 'Cairo',
              }}
              listItemLabelStyle={{
                textAlign: 'left',
                fontFamily: 'Cairo',
              }}
              open={openNumber}
              onOpen={onOpenNumber}
              value={valueNumber}
              items={itemsNumber}
              setOpen={setOpenNumber}
              setValue={setValueNumber}
              setItems={setItemsNumber}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
              style={[
                styles.dropdown,
                {
                  marginBottom: openNumber
                    ? verticalScale(100)
                    : verticalScale(10),
                },
              ]}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
            {/* change marginBottom when add more data */}
          </View>
          {/* number build */}
        </ScrollView>
        {/* btn */}
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.btnText}>اضافة العنوان</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default AddressEditProfile;
