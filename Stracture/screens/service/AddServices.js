import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
  ImageBackground,
} from 'react-native';
import {COLORS, icons, img} from '../../utils/index';
import styles from '../../styles/service/AddServicesStyle';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Feather from 'react-native-vector-icons/Feather';

function AddServices({navigation}) {
  const [detailService, setDetailService] = useState('');
  const [nameOrder, setNameOrder] = useState('');
  const [priceOrder, setPriceOrder] = useState('');
  const [dayWork, setDayWork] = useState('');
  const [am, setAm] = useState('');
  const [pm, setPm] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isrefersh, setisrefersh] = useState(false);

  const [openCategory, setOpenCategory] = useState(false);
  const [valueCategory, setValueCategory] = useState(null);
  const [itemsCategory, setItemsCategory] = useState([
    {label: 'تجارة', value: 'تجارة'},
    {label: 'التصميم الداخلي', value: 'التصميم الداخي'},
  ]);

  const [openServices, setOpenServices] = useState(false);
  const [valueServices, setValueServices] = useState(null);
  const [itemsServices, setItemsServices] = useState([
    {label: 'تصميم غرفة اطفال', value: 'تصميم غرفة اطفال'},
    {label: 'تصميم غرفة نوم', value: 'تصميم غرفة نوم'},
  ]);

  const [openSave, setOpenSave] = useState(false);
  const [valueSave, setValueSave] = useState(null);
  const [itemsSave, setItemsSave] = useState([
    {label: 'تصميم غرفة اطفال', value: 'تصميم غرفة اطفال'},
    {label: 'تصميم غرفة نوم', value: 'تصميم غرفة نوم'},
  ]);

  const [openNotSave, setOpenNotSave] = useState(false);
  const [valueNotSave, setValueNotSave] = useState([]);
  const [itemsNotSave, setItemsNotSave] = useState([
    {label: 'تصميم غرفة اطفال', value: 'تصميم غرفة اطفال'},
    {label: 'تصميم غرفة نوم', value: 'تصميم غرفة نوم'},
  ]);

  const onOpenNotSave = useCallback(() => {
    setOpenSave(false);
    setOpenServices(false);
    setOpenCategory(false);
  }, []);

  const onOpenServices = useCallback(() => {
    setOpenCategory(false);
    setOpenNotSave(false);
    setOpenSave(false);
  }, []);

  const onOpenSave = useCallback(() => {
    setOpenServices(false);
    setOpenCategory(false);
    setOpenNotSave(false);
  }, []);

  const onOpenCategory = useCallback(() => {
    setOpenServices(false);
    setOpenNotSave(false);
    setOpenSave(false);
  }, []);

  const takePhotoFromGallery = () => {
    let list = [];
    ImagePicker.openPicker({
      cropping: true,
      multiple: true,
      waitAnimationEnd: false,
      forceJpg: true,
      compressImageQuality: 0.8,
      mediaType: 'photo',
      includeBase64: true,
      maxFiles: 10,
    })
      .then(response => {
        response.map(item => {
          list.push({
            path: item.path,
            data: item.data,
            filename: item.filename,
          });
        });
        setPhotos([...list, ...photos]);
      })
      .catch(e => alert(e));
  };

  const deleteImage = index => {
    photos.splice(index, 1);
    setisrefersh(true);
    setTimeout(() => {
      setisrefersh(false);
    }, 1000);
  };
  const addService = () => {
    let count = 0;
    if (
      (detailService.length == 0 || nameOrder.length || priceOrder.length,
      am.length == 0 ||
        pm.length == 0 ||
        dayWork.length == 0 ||
        valueCategory == null ||
        valueNotSave == null ||
        valueSave == null ||
        valueServices == null)
    ) {
      count++;
    }

    if (count == 0) {
      // add services in api
      //   alert('ok');
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <ScrollView styles={{flex: 1}} showsVerticalScrollIndicator={false}>
          {/* header */}
          <View style={styles.containerHeader}>
            <Text style={styles.header}>اضافة خدمة جديدة</Text>
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

          {/* list dropdown */}
          <View>
            <Text style={styles.text}>اختيار فئة الخدمة</Text>
            <DropDownPicker
              language="AR"
              placeholder="تجارة"
              placeholderStyle={{
                color: styles.color_textInput.color,
                fontFamily: 'Cairo',
              }}
              onOpen={onOpenCategory}
              zIndex={3000}
              zIndexInverse={1000}
              open={openCategory}
              value={valueCategory}
              items={itemsCategory}
              setOpen={setOpenCategory}
              setValue={setValueCategory}
              setItems={setItemsCategory}
              style={styles.dropdown}
              listItemLabelStyle={{
                fontFamily: 'Cairo',
              }}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
          </View>
          <View>
            <Text style={styles.text}>اختيار فئة الخدمة</Text>
            <DropDownPicker
              zIndex={2000}
              zIndexInverse={2000}
              language="AR"
              placeholder="تصميم غرفة اطفال"
              placeholderStyle={{
                color: styles.color_textInput.color,
                fontFamily: 'Cairo',
              }}
              listItemLabelStyle={{
                fontFamily: 'Cairo',
              }}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
              onOpen={onOpenServices}
              open={openServices}
              value={valueServices}
              items={itemsServices}
              setOpen={setOpenServices}
              setValue={setValueServices}
              setItems={setItemsServices}
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
          </View>
          {/* detail service */}
          <Text style={styles.text}>تفاصيل الخدمة</Text>
          <View style={styles.viewInput}>
            <TextInput
              placeholder="مثال للنص يمكن تغيره"
              placeholderTextColor={styles.color_textInput.color}
              multiline={true}
              style={styles.insideTextInput}
              value={detailService}
              onChangeText={value => {
                setDetailService(value);
              }}
            />
          </View>
          {/* detail service */}

          {/* save */}
          <View>
            <Text style={styles.text}>ما يمكن توفيرة</Text>
            <DropDownPicker
              zIndex={4000}
              zIndexInverse={4000}
              language="AR"
              placeholder="تصميم غرفة اطفال"
              placeholderStyle={{
                color: styles.color_textInput.color,
                fontFamily: 'Cairo',
              }}
              listItemLabelStyle={{
                fontFamily: 'Cairo',
              }}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
              onOpen={onOpenSave}
              open={openSave}
              value={valueSave}
              items={itemsSave}
              setOpen={setOpenSave}
              setValue={setValueSave}
              setItems={setItemsSave}
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
          </View>
          {/* save */}

          {/* not save */}

          <View>
            <Text style={styles.text}>ما لا يمكن توفيرة</Text>
            <DropDownPicker
              zIndex={2000}
              zIndexInverse={2000}
              language="AR"
              placeholder="تصميم غرفة اطفال"
              placeholderStyle={{
                color: styles.color_textInput.color,
                fontFamily: 'Cairo',
              }}
              listItemLabelStyle={{
                fontFamily: 'Cairo',
              }}
              labelStyle={{
                fontFamily: 'Cairo',
              }}
              onOpen={onOpenNotSave}
              open={openNotSave}
              value={valueNotSave}
              items={itemsNotSave}
              setOpen={setOpenNotSave}
              setValue={setValueNotSave}
              setItems={setItemsNotSave}
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropDownContainerStyle}
            />
          </View>
          {/* not save */}

          {/* extra order  */}
          <Text style={styles.text}>طلبات اضافية</Text>
          <View style={styles.extraView}>
            <Text style={styles.extraText}>اسم الطلب</Text>
            <Text style={styles.extraText}>السعر</Text>
          </View>
          <View style={styles.changeInput}>
            <View style={[styles.viewInput, styles.changeInputView]}>
              <TextInput
                placeholder="تسريحة"
                placeholderTextColor={styles.color_textInput.color}
                multiline={true}
                style={styles.insideTextInput}
                value={nameOrder}
                onChangeText={value => {
                  setNameOrder(value);
                }}
              />
            </View>
            <View style={[styles.viewInput, styles.changeInputView]}>
              <TextInput
                placeholder="66 ج.م"
                placeholderTextColor={styles.color_textInput.color}
                multiline={true}
                style={styles.insideTextInput}
                value={priceOrder}
                onChangeText={value => {
                  setPriceOrder(value);
                }}
              />
            </View>
          </View>

          {/* days work */}
          <Text style={styles.text}>ايام العمل</Text>
          <View style={styles.viewInput}>
            <TextInput
              placeholder="مثال للنص يمكن تغيره"
              placeholderTextColor={styles.color_textInput.color}
              multiline={true}
              style={styles.insideTextInput}
              value={dayWork}
              onChangeText={value => {
                setDayWork(value);
              }}
            />
          </View>
          {/* days work */}

          {/* times work */}
          <Text style={styles.text}>اوقات العمل</Text>
          <View style={styles.containerTimes}>
            <View style={styles.viewTimes}>
              <Text style={styles.text}>من الساعة</Text>
              <View style={styles.changeViewTimes}>
                <TextInput
                  placeholder="--:-- صباحا"
                  placeholderTextColor={styles.color_textInput.color}
                  style={styles.center}
                  value={am}
                  onChangeText={value => {
                    setAm(value);
                  }}
                />
              </View>
            </View>

            {/* : */}
            <View style={styles.viewTimes}>
              <Text style={styles.text}>من الساعة</Text>
              <View style={[styles.viewInput, styles.changeViewTimes]}>
                <TextInput
                  placeholder="--:-- مساء"
                  placeholderTextColor={styles.color_textInput.color}
                  style={[styles.insideTextInput, styles.center]}
                  value={pm}
                  onChangeText={value => {
                    setPm(value);
                  }}
                />
              </View>
            </View>
          </View>
          {/* extra order  */}

          {/* add photo */}

          <Text style={styles.text}>اضافة صورة</Text>
          <TouchableOpacity
            onPress={() => {
              takePhotoFromGallery();
            }}
            style={[styles.viewInput, styles.viewCamera]}>
            <Image
              style={styles.camera}
              source={icons.camera}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.containerImgs}>
            {photos.map((item, index) => (
              <View>
                <ImageBackground
                  style={styles.imgMap}
                  source={{
                    uri: item.path,
                  }}
                  resizeMode="cover">
                  <TouchableOpacity
                    onPress={() => {
                      deleteImage(index);
                    }}>
                    <Image
                      style={styles.close}
                      source={icons.close}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            ))}
          </View>
          {/* add photo */}
          {/* btn */}
          <TouchableOpacity
            style={styles.viewBtn}
            onPress={() => {
              addService();
            }}>
            <Text style={styles.btnText}>اضافة خدمة جديدة</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
}

export default AddServices;
