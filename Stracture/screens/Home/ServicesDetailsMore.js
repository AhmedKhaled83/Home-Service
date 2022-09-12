import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Dialog from 'react-native-dialog';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {COLORS, icons, img, FONTSIZE} from '../../utils/index';
import styles from '../../styles/Home/ServicesDetailsMoreStyle';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';

function ServicesDetailsMore({navigation, route}) {
  const [data, setData] = useState(route.params.item);
  const [like, setLike] = useState(data.fav);
  const [rating, setRating] = useState(3.5);
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [comment, setComment] = useState([
    {
      name: 'احمد امين',
      comment: 'مثال للنص يمكن تغيره',
      img: img.user,
    },
    {
      name: 'احمد امين',
      comment: 'مثال للنص يمكن تغيره',
      img: img.user,
    },
    {
      name: 'احمد امين',
      comment: 'مثال للنص يمكن تغيره',
      img: img.user,
    },
  ]);
  const [day, setDay] = useState([
    {
      day: 'السبت',
      choice: false,
    },
    {
      day: 'الاحد',
      choice: true,
    },
    {
      day: 'الاثنين',
      choice: true,
    },
    {
      day: 'الثلاثاء',
      choice: true,
    },
    {
      day: 'الاريعاء',
      choice: true,
    },
    {
      day: 'الخميس',
      choice: true,
    },
    {
      day: 'الجمعة',
      choice: false,
    },
  ]);

  const myShare = async () => {
    const options = {
      // message
      message: 'this is a test message',
      //  link app
      url: 'https://reactnative.dev/docs/share',
      // img => base64 encoded
    };
    try {
      const shareResponse = await Share.open(options);
      console.log(JSON.stringify(shareResponse));
    } catch (e) {
      console.log(e);
    }
  };
  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const pay = () => {
    if (value.length > 0 && !isNaN(value)) {
      SheetManager.hideAll();
      navigation.navigate('Payment');
    }
  };

  const FunLike = () => {
    let item = data;
    item.fav = !like;
    setData(item);
    setLike(item.fav);
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
            <TouchableOpacity
              style={styles.viewArrow}
              onPress={() => {
                myShare();
              }}>
              <Image source={icons.share} />
            </TouchableOpacity>
            <Text style={styles.header}>خدمة</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.viewIcon}>
              <Feather
                name="chevron-right"
                color={styles.color_black.color}
                size={25}
              />
            </TouchableOpacity>
          </View>
          {/* header */}

          {/* backgroundImage */}
          <ImageBackground
            resizeMode="contain"
            source={data.image}
            borderRadius={10}
            style={styles.imgBack}>
            <TouchableOpacity
              style={styles.btnHeart}
              onPress={() => {
                FunLike();
              }}>
              {!data.fav ? (
                <AntDesign
                  name="hearto"
                  color={COLORS.mainBlue}
                  size={FONTSIZE.xxlarge}
                />
              ) : (
                <AntDesign
                  name="heart"
                  color={COLORS.mainBlue}
                  size={FONTSIZE.xxlarge}
                />
              )}
            </TouchableOpacity>
          </ImageBackground>
          {/* backgroundImage */}

          {/*  */}
          <View style={styles.containerRate}>
            <Text style={styles.text}>{data.servisType}</Text>
            <Rating
              imageSize={20}
              ratingColor="#f1c40f"
              ratingImage={icons.rate}
              ratingCount={5}
              startingValue={rating}
              style={styles.rating}
              backgroundColor
              onFinishRating={rating => {
                setRating(rating);
              }}
              readonly={true}
            />
          </View>
          <Text style={[styles.text, styles.text1]}>{data.designType}</Text>

          <View style={styles.containerMiddle}>
            <View style={styles.containerUser}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProviderScreen');
                }}>
                <Image
                  source={img.user}
                  resizeMode="contain"
                  style={styles.userImage}
                />
              </TouchableOpacity>

              <View>
                <Text style={styles.text2}>{data.designer}</Text>
                <Text style={[styles.text2, styles.text3]}>
                  {data.specialist}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.containerBag}>
              <Image source={icons.bag} />
              <Text style={[styles.text2, styles.textBag]}>
                طلب خدمة مختلفة
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.headerDetailService}>تفاصيل الخدمة</Text>
          <Text style={styles.textDetailService}>
            مثال للنص يمكن تغيره مثال للنص يمكن تغيره مثال للنص يمكن تغيره مثال
            للنص يمكن تغيرهمثال للنص يمكن تغيره مثال للنص يمكن تغيره
          </Text>
          {/* possible save */}
          <View style={styles.containerSave}>
            <Text style={styles.headerDetailService}>ما يمكن توفيرة</Text>
            <View style={styles.viewSave}>
              <Icon name="check" color={COLORS.gray1} size={15} />
              <Text style={[styles.textSave]}>مثال للنص يمكن تغيره</Text>
            </View>
            <View style={styles.viewSave}>
              <Icon name="check" color={COLORS.gray1} size={15} />
              <Text style={[styles.textSave]}>مثال للنص يمكن تغيره</Text>
            </View>
          </View>
          {/* impossible save */}
          <View style={styles.containerSave}>
            <Text style={styles.headerDetailService}>ما لا يمكن توفيرة</Text>
            <View style={styles.viewSave}>
              <Icon name="times" color={COLORS.gray1} size={18} />
              <Text style={[styles.textSave]}>مثال للنص يمكن تغيره</Text>
            </View>
            <View style={styles.viewSave}>
              <Icon name="times" color={COLORS.gray1} size={18} />
              <Text style={[styles.textSave]}>مثال للنص يمكن تغيره</Text>
            </View>
          </View>
          {/* times work */}
          <View>
            <Text style={styles.headerDetailService}>اوقات العمل</Text>
            <Text style={styles.textDay}>يوم</Text>
            <View style={styles.containerDays}>
              {day.map(item => (
                <View style={styles.timeWork}>
                  <Text
                    style={
                      item.choice
                        ? styles.choiceDay
                        : [styles.choiceDay, styles.notChoiceDay]
                    }>
                    {item.day}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          {/* hour */}
          <View>
            <Text style={styles.textDay}>ساعة</Text>
            <View style={styles.viewHour}>
              <View style={[styles.timeWork, styles.containerHour]}>
                <Image source={icons.calender2} resizeMode="contain" />
                <Text style={[styles.textHour, styles.textHour2]}>
                  تحديد ميعاد
                </Text>
              </View>
              <View style={styles.timeWork}>
                <Text style={styles.textHour}>في الحال</Text>
              </View>
            </View>
          </View>
          {/* services */}

          <View style={styles.viewService}>
            <Image source={icons.star} resizeMode="contain" />
            <Text style={styles.textService}>ضمان خدماتنا</Text>
          </View>

          {/* comments  */}
          <View style={styles.flexComment}>
            <Text style={styles.from}>التقيمات من عملاء سابقين</Text>
            <TouchableOpacity>
              <Text style={styles.all}>عرض الكل</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerComment}>
            {comment.map(item => (
              <View style={styles.viewComment}>
                <Image
                  source={item.img}
                  resizeMode="contain"
                  style={styles.imgComment}
                />
                <View style={styles.viewText}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.comment}>{item.comment}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.money}>{data.price} ج.م</Text>
          <View style={styles.viewBtn}>
            {/* <TouchableOpacity onPress={() => {}}> */}
            <Icon name="minus" color={'#fff'} />
            {/* </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => {
                showDialog();
              }}>
              <Text style={styles.btnTextbook}>حجز</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => {}}> */}
            <Icon name="plus" color={'#fff'} />
            {/* </TouchableOpacity> */}
          </View>
        </View>

        {/* dialog */}

        {price == 0 ? (
          <Dialog.Container
            contentStyle={styles.containerDialog}
            visible={visible}>
            <View>
              <TouchableOpacity
                style={styles.btnClose}
                onPress={() => {
                  handleCancel();
                }}>
                <Image source={icons.close} style={styles.close} />
              </TouchableOpacity>
              <Image
                source={img.wallet2}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.dialogText1}>عميلنا العزيز</Text>
              <Text style={[styles.dialogText1, styles.dialogText2]}>
                ليس لديك رصيدك كافي لحجز الخدمة
              </Text>
              <TouchableOpacity
                style={styles.btnView1}
                onPress={() => {
                  handleCancel();
                  SheetManager.show('helloworld_sheet2');
                }}>
                <Text style={styles.btnText1}>شحن المحفظة</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnView1, styles.btnView2]}
                onPress={() => {}}>
                <Text style={[styles.btnText1, styles.btnText2]}>دفع فوري</Text>
              </TouchableOpacity>
            </View>
          </Dialog.Container>
        ) : (
          <Dialog.Container
            contentStyle={[styles.containerDialog, styles.containerDialog2]}
            visible={visible}>
            <View>
              <TouchableOpacity
                style={styles.btnClose}
                onPress={() => {
                  handleCancel();
                }}>
                <Image source={icons.close} style={styles.close} />
              </TouchableOpacity>
              <Image
                source={img.wellDone}
                resizeMode="contain"
                style={styles.img}
              />
              <Text style={styles.dialogText1}>عميلنا العزيز</Text>
              <Text style={[styles.dialogText1, styles.textDone]}>
                لقد تم تجهيز الخدمة بنجاح
              </Text>
              <Text style={[styles.dialogText1, styles.textDone]}>
                يرجي العلم ان تم سحب ثمن الخدمة من محفظتك
              </Text>
              <TouchableOpacity
                style={[styles.btnView1, styles.marginTop]}
                onPress={() => {
                  navigation.navigate('MyRequestsScreen');
                  handleCancel();
                }}>
                <Text style={styles.btnText1}>رؤية حجوزاتي</Text>
              </TouchableOpacity>
            </View>
          </Dialog.Container>
        )}

        <ActionSheet containerStyle={styles.sheet} id="helloworld_sheet2">
          <View style={styles.containerHeaderSheet}>
            <Text style={styles.headerSheet}>شحن المحفظة</Text>
            <TouchableOpacity
              style={[styles.btnClose, {marginLeft: -scale(20)}]}
              onPress={() => {
                SheetManager.hideAll();
              }}>
              <Image source={icons.close} style={styles.close} />
            </TouchableOpacity>
          </View>

          <Image
            source={img.paymentSheet}
            resizeMode="contain"
            style={styles.imgPaymentSheet}
          />
          <Text style={styles.text}>أدخل المبلغ الذى تريد شحنه</Text>

          <TextInput
            placeholderTextColor={styles.color_textInput.color}
            placeholder="500"
            value={value}
            onChangeText={value => {
              setValue(value);
            }}
            style={styles.textInput}
          />
          <TouchableOpacity
            style={[styles.btnView1, {width: '100%'}]}
            onPress={() => {
              pay();
            }}>
            <Text style={styles.btnText1}>شحن</Text>
          </TouchableOpacity>
        </ActionSheet>
      </View>
    </>
  );
}

export default ServicesDetailsMore;
