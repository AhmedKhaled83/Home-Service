import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import {icons, img, COLORS} from '../../utils/index';
import styles from '../../styles/profile/walletProfileStyle';
import {scale} from 'react-native-size-matters';
const initialLayout = {width: Dimensions.get('window').width};
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather';

function WalletProfile({navigation}) {
  const {width, height} = Dimensions.get('screen');

  const [code, setCode] = useState('');
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'first', title: 'الرصيد الحالي'},
    {key: 'second', title: 'المال المعلق'},
    {key: 'third', title: 'قيد الدفع'},
  ]);

  const FirstRoute = () => (
    <View>
      <Image source={img.wallet} style={styles.img} resizeMode="contain" />
      <View style={styles.middle}>
        <Text style={styles.middleText1}>رصيدك المتوفر بالمحفظة</Text>
        <Text style={[styles.middleText1, styles.middleText2]}>150 ج.م</Text>
      </View>

      <Text style={[styles.text1, styles.text2]}>اضافة كود خصم</Text>
      {/* textInput */}
      <View style={styles.containerCode}>
        <View style={styles.ViewInput}>
          <TextInput
            placeholder="MOno33"
            style={styles.input}
            value={code}
            onChangeText={value => {
              setCode(value);
            }}
            placeholderTextColor={styles.color_textInput.color}
          />
        </View>
        <TouchableOpacity style={styles.btnCode} onPress={() => {}}>
          <Text style={styles.textBtnCode}>تنفيذ</Text>
        </TouchableOpacity>
      </View>
      {/* textInput */}
      {/* img wallet */}

      {/* img wallet */}
      <TouchableOpacity style={styles.btnWallet} onPress={() => {}}>
        <Text style={styles.btnTextWallet}>شحن المحفظة</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btnWallet, styles.btnMoney]}
        onPress={() => {}}>
        <Text style={styles.btnTextMoney}>سحب الرصيد</Text>
      </TouchableOpacity>
    </View>
  );
  const SecondRoute = () => (
    <View>
      <Image source={img.ideaBro} style={styles.img} resizeMode="contain" />
      <Text style={[styles.title]}>رصيدك المعلق مقابل خدمة لم تكمل بعد</Text>

      {/* textInput */}
      <View style={styles.containerCode}>
        <Text style={[styles.middleText]}>عدد الخدمات المعلقة</Text>
        <View style={styles.service}>
          <Text style={[styles.middleText1]}>1 {`\t`} خدمة</Text>
        </View>
      </View>
      <Text style={styles.text4}>رصيدك المعلق</Text>

      {/* btn */}
      <View
        style={[styles.btnWallet, styles.btnMoney, styles.stop]}
        onPress={() => {}}>
        <Text style={styles.btnTextMoney}>150 ج.م</Text>
      </View>
      <Text style={styles.text5}>
        سيتم استلام المبلغ بمجرد اكتمال الخدمة بنجاح
      </Text>
    </View>
  );

  const ThirdRoute = () => (
    <View>
      <Image source={img.idea} style={styles.img} resizeMode="contain" />
      <Text style={styles.title}>رصيد الخدمة التى تم طلبها ولم تبدأ بعد</Text>

      {/* textInput */}
      <View style={styles.containerCode}>
        <Text style={[styles.middleText]}>عدد الخدمات المطلوبة</Text>
        <View style={styles.service}>
          <Text style={[styles.middleText1]}>1 {`\t`} خدمة</Text>
        </View>
      </View>
      <Text style={styles.text4}>رصيدك المعلق</Text>

      {/* btn */}
      <View
        style={[styles.btnWallet, styles.btnMoney, styles.stop]}
        onPress={() => {}}>
        <Text style={styles.btnTextMoney}>150 ج.م</Text>
      </View>
      <Text style={styles.text5}>
        سيتم تحويل المبلغ بمجرد اكتمال الخدمة بنجاح
      </Text>
    </View>
  );

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={COLORS.white}
      inactiveColor={COLORS.gray2}
      indicatorStyle={{backgroundColor: 'transparent'}}
      tabStyle={{
        backgroundColor: COLORS.white,
      }}
      renderLabel={({route, focused, color}) => (
        <View
          style={{
            backgroundColor: focused ? COLORS.gold : COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: scale(8),
            height: scale(35),
            width: scale(98),
            marginTop: scale(20),
          }}>
          <Text
            style={{
              color,
              margin: scale(2),
              fontSize: scale(14),
              fontFamily: 'Cairo',
            }}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* header */}
          <View style={styles.containerHeader}>
            <Text style={styles.header}>المحفظة</Text>
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
          <TabView
            navigationState={{index: index, routes: routes}}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute,
              third: ThirdRoute,
            })}
            onIndexChange={index => setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            /// نفس اللون دلوقتي لكن الخط اللي تحت التابه مش بيتشال؟
          />
        </View>
      </ScrollView>
    </>
  );
}

export default WalletProfile;
