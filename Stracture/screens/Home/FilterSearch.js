import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../styles/Home/FilterSearchStyle';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLORS} from '../../utils';
import {scale} from 'react-native-size-matters';
import {RadioButton} from 'react-native-paper';

function FilterSearch({navigation}) {
  const [choice, setChoice] = useState('');
  const [checked, setChecked] = useState('first');

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const [openSection, setOpenSection] = useState(false);
  const [valueSection, setValueSection] = useState(null);
  const [itemsSection, setItemsSection] = useState([
    {label: 'بولاق الدكرور', value: 'بولاق الدكرور'},
    {label: 'التصميم الداخلي', value: 'التصميم الداخي'},
  ]);
  const [openName, setOpenName] = useState(false);
  const [valueName, setValueName] = useState(null);
  const [itemsName, setItemsName] = useState([
    {label: 'تجارة', value: 'تجارة'},
    {label: 'التصميم الداخلي', value: 'التصميم الداخي'},
  ]);

  const [openCity, setOpenCity] = useState(false);
  const [valueCity, setValueCity] = useState(null);
  const [itemsCity, setItemsCity] = useState([
    {label: 'تجارة', value: 'تجارة'},
    {label: 'التصميم الداخلي', value: 'التصميم الداخي'},
  ]);

  const [openArea, setOpenArea] = useState(false);
  const [valueArea, setValueArea] = useState(null);
  const [itemsArea, setItemsArea] = useState([
    {label: 'تجارة', value: 'تجارة'},
    {label: 'التصميم الداخلي', value: 'التصميم الداخي'},
  ]);

  const onOpenSection = useCallback(() => {
    setOpenName(false);
    setOpenArea(false);
    setOpenCity(false);
  }, []);
  const onOpenName = useCallback(() => {
    setOpenArea(false);
    setOpenCity(false);
    setOpenSection(false);
  }, []);

  const onOpenCity = useCallback(() => {
    setOpenArea(false);
    setOpenSection(false);
    setOpenName(false);
  }, []);
  const onOpenArea = useCallback(() => {
    setOpenCity(false);
    setOpenSection(false);
    setOpenName(false);
  }, []);

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={styles.color_stutsBar.color}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHeader}>
            <Text style={styles.header}>فلتر</Text>
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
          <View style={styles.viewDropdown}>
            <DropDownPicker
              language="AR"
              placeholder="القسم"
              placeholderStyle={{
                color: COLORS.mainBlack,
                fontSize: scale(16),
                fontFamily: 'Cairo',
              }}
              open={openSection}
              onOpen={onOpenSection}
              value={valueSection}
              items={itemsSection}
              setOpen={setOpenSection}
              setValue={setValueSection}
              setItems={setItemsSection}
              style={styles.dropdown}
              listItemLabelStyle={{
                fontFamily: 'Cairo',
              }}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
            />
          </View>
          <View style={styles.viewDropdown}>
            <DropDownPicker
              zIndex={3000}
              zIndexInverse={1000}
              language="AR"
              placeholder="اسم الخدمة"
              placeholderStyle={{
                color: COLORS.mainBlack,
                fontSize: scale(16),
                fontFamily: 'Cairo',
                fontFamily: 'Cairo',
              }}
              open={openName}
              onOpen={onOpenName}
              value={valueName}
              items={itemsName}
              setOpen={setOpenName}
              setValue={setValueName}
              setItems={setItemsName}
              style={styles.dropdown}
              listItemLabelStyle={{
                fontFamily: 'Cairo',
              }}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
            />
          </View>
          <View style={styles.viewDropdown}>
            <DropDownPicker
              language="AR"
              placeholder="المدينة"
              placeholderStyle={{
                color: COLORS.mainBlack,
                fontSize: scale(16),
                fontFamily: 'Cairo',
              }}
              zIndex={2000}
              zIndexInverse={2000}
              open={openCity}
              onOpen={onOpenCity}
              value={valueCity}
              items={itemsCity}
              setOpen={setOpenCity}
              setValue={setValueCity}
              setItems={setItemsCity}
              style={styles.dropdown}
              listItemLabelStyle={{
                fontFamily: 'Cairo',
              }}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
            />
          </View>
          <View style={styles.viewDropdown}>
            <DropDownPicker
              zIndex={1000}
              zIndexInverse={3000}
              language="AR"
              placeholder="الحي"
              placeholderStyle={{
                color: COLORS.mainBlack,
                fontSize: scale(16),
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
              listItemLabelStyle={{
                fontFamily: 'Cairo',
              }}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
            />
          </View>
          <View style={styles.solidLine}></View>
          <Text style={styles.text2}>تصنيف حسب</Text>
          <View style={styles.containerCheck}>
            <Text style={styles.textCheck}>الاعلي تقيما</Text>
            <RadioButton
              color={COLORS.mainBlack}
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('first');
                setChoice('الاعلي تقيما');
              }}
            />
          </View>
          <View style={styles.containerCheck}>
            <Text style={styles.textCheck}>الاقل تقيما</Text>
            <RadioButton
              color={COLORS.mainBlack}
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('second');
                setChoice('الاقل تقيما');
              }}
            />
          </View>
          <View style={styles.containerCheck}>
            <Text style={styles.textCheck}>الاعلي سعرا</Text>
            <RadioButton
              color={COLORS.mainBlack}
              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('third');
                setChoice('الاعلي سعرا');
              }}
            />
          </View>
          <View style={styles.containerCheck}>
            <Text style={styles.textCheck}>الاقل سعرا</Text>
            <RadioButton
              color={COLORS.mainBlack}
              value="four"
              status={checked === 'four' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('four');
                setChoice('الاقل سعرا');
              }}
            />
          </View>
          <View style={styles.solidLine}></View>
          <View style={styles.containerInput}>
            <Text style={styles.text3}>الميزانية</Text>
            <View style={styles.view}>
              <Text style={styles.text4}>من</Text>
              <TextInput
                placeholder="..."
                placeholderTextColor={COLORS.gray2}
                style={styles.input}
                value={from}
                onChangeText={value => {
                  setFrom(value);
                }}
              />
            </View>
            <View style={styles.view}>
              <Text style={styles.text4}>الي</Text>
              <TextInput
                placeholder="..."
                placeholderTextColor={COLORS.gray2}
                style={styles.input}
                value={to}
                onChangeText={value => {
                  setTo(value);
                }}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.viewBtn}>
            <Text style={styles.btnText}>بحث</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
}

export default FilterSearch;
