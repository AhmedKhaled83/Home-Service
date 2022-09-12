import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {icons} from '../../utils/index';
import styles from '../../styles/gallery/AddGalleryStyle';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';
function AddGallery({navigation}) {
  const radio_props = [
    {label: 'مزود الخدمة', value: 0},
    {label: 'مستخدم', value: 1},
  ];
  const [choice, setChoice] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [isrefersh, setisrefersh] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [valueCategory, setValueCategory] = useState(null);
  const [itemsCategory, setItemsCategory] = useState([
    {label: 'السباكة', value: 'السباكة'},
    {label: 'الكهرباء', value: 'الكهرباء'},
    {label: 'التنظيف', value: 'التنظيف'},
    {label: 'النقاشة', value: 'النقاشة'},
  ]);

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

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.text}>اضف للمعرض</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.viewArrow}>
            <Image source={icons.arrow_right} />
          </TouchableOpacity>
        </View>

        <RadioForm formHorizontal={true} animation={true}>
          {/* To create radio buttons, loop through your array of options */}
          <View style={styles.containerRadio}>
            {radio_props.map((obj, i) => (
              <RadioButton labelHorizontal={true} key={i}>
                {/*  start RadioButtonLabel  */}
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={choice == i}
                  onPress={value => {
                    setChoice(value);
                  }}
                  borderWidth={2}
                  buttonInnerColor={styles.botton_radiobotton.color}
                  buttonOuterColor={styles.botton_radiobotton.color}
                  buttonSize={10}
                  buttonOuterSize={20}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={value => {
                    setChoice(value);
                  }}
                  labelStyle={styles.labelRadio}
                />
              </RadioButton>
            ))}
          </View>
        </RadioForm>

        {/* end  RadioButtonLabel before RadioButtonInput */}

        {/* list dropdown */}

        <DropDownPicker
          language="AR"
          placeholder="نوع الخدمة"
          placeholderStyle={styles.placeholderStyle}
          open={openCategory}
          value={valueCategory}
          items={itemsCategory}
          setOpen={setOpenCategory}
          setValue={setValueCategory}
          setItems={setItemsCategory}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          selectedItemLabelStyle={styles.selectedItemLabel}
          selectedItemContainerStyle={styles.selectedItemContainer}
          listItemLabelStyle={styles.listItemLabelStyle}
          showTickIcon={false}
        />

        <View style={styles.viewList}>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            data={photos}
            renderItem={({item, index}) => (
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
            )}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btnImage}
            onPress={() => {
              takePhotoFromGallery();
            }}>
            <Text style={styles.btnTextImage}>+ اضف صور اخري</Text>
            <Image source={icons.doublePhoto} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text style={styles.btnText}>اضافة</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default AddGallery;
