import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../styles/Home/DatesStyle';
import {COLORS} from '../../utils/index';
import {LocaleConfig, Calendar} from 'react-native-calendars';
import {scale} from 'react-native-size-matters';

LocaleConfig.locales['ar'] = {
  monthNamesShort: [
    'يناير',
    ' فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ],
  monthNames: [
    'يناير',
    ' فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ],
  dayNames: [
    'الاحد',
    'الاثنين',
    'الثلاثاء',
    'الاربعاء',
    'الخميس',
    'الجمعة',
    'السبت',
  ],
  dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Su'],
  today: 'الاحد',
};
LocaleConfig.defaultLocale = 'ar';

function Dates({navigation}) {
  const [day, setDay] = useState(new Date());
  const [hour, setHour] = useState([
    {
      hour: '12م',
      done: false,
    },
    {
      hour: '11ص',
      done: true,
    },
    {
      hour: '10ص',
      done: false,
    },
    {
      hour: '9ص',
      done: true,
    },
    {
      hour: '4م',
      done: true,
    },
    {
      hour: '3م',
      done: false,
    },
    {
      hour: '2م',
      done: true,
    },
    {
      hour: '1م',
      done: true,
    },
  ]);
  const monthNames = [
    'يناير',
    ' فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];
  const [selected, setSelected] = useState([
    '2022-07-19',
    '2022-07-20',
    '2022-07-21',
    '2022-07-22',
  ]);

  let obj = {};

  const arr = () => {
    return selected.map(e => {
      return {
        ['2022-07-22']: {
          selected: true,
          customStyles: {
            container: {
              width: 30,
              height: 30,
              borderRadius: 8,
              backgroundColor: '#3A82F8',
            },
            text: {
              color: '#fff',
            },
          },
        },
      };
    });
  };

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={styles.color_stutsBar.color}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHeader}>
            <Text style={styles.header}>جدول المواعيد</Text>
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
          <View style={styles.containerCalender}>
            <Text style={styles.text}>الايام المتاحة</Text>

            <Calendar
              markingType={'custom'}
              // minDate={'' + new Date()}
              hideExtraDays={false}
              monthFormat={'MMM yyyy'}
              firstDay={1}
              hideDayNames={true}
              onPressArrowLeft={subtractMonth => subtractMonth()}
              onPressArrowRight={addMonth => addMonth()}
              disableAllTouchEventsForDisabledDays={true}
              enableSwipeMonths={true}
              markedDates={{
                '2022-07-23': {
                  selected: true,
                  customStyles: {
                    container: {
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      backgroundColor: '#3A82F8',
                    },
                    text: {
                      color: '#fff',
                    },
                  },
                },
              }}
              style={{
                height: scale(289),
                borderRadius: scale(20),
                overflow: 'hidden',
                borderColor: '#F3B052',
                borderWidth: scale(1),
                paddingBottom: scale(100),
              }}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#3A82F8',
                textSectionTitleDisabledColor: '#3A82F8',
                selectedDayBackgroundColor: '',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#000',
                textDisabledColor: '#000',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: '#3A82F8',
                disabledArrowColor: '#d9e1e8',
                monthTextColor: '#3A82F8',
                indicatorColor: '#3A82F8',
                textDayFontWeight: '500',
                textMonthFontWeight: '500',
                textDayHeaderFontWeight: '500',
                textMonthFontSize: 15,
                textDayFontFamily: 'Cairo',
                textMonthFontFamily: 'Cairo',
                textDayHeaderFontFamily: 'Cairo',
                textDayStyle: {
                  fontFamily: 'Cairo',
                },
              }}
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.text}>الساعات المتاحة</Text>
            <View style={styles.ContainerHour}>
              <Text style={styles.day}>
                {day.getDate() +
                  ' ' +
                  monthNames[day.getMonth()] +
                  ' ' +
                  day.getFullYear()}
              </Text>

              <View style={styles.map}>
                {hour.map(e => (
                  // <View style={}>
                  <View
                    key={e.hour}
                    style={
                      e.done ? styles.itemDone : [styles.itemDone, styles.item]
                    }>
                    <Text style={e.done ? styles.textDone : styles.text2}>
                      {e.hour}
                    </Text>
                  </View>
                  // </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Dates;

// import React from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   StatusBar,
// } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import CalendarPicker from 'react-native-calendar-picker';
// import {Card} from 'react-native-paper';

// // import styles from '../../styles/Home/DatesStyle';
// import {COLORS} from '../../utils/index';
// export default function Dates() {
//   return (
//     <>
//       <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
//       <View style={styles.container}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <View style={styles.containerHeader}>
//             <Text style={styles.header}>جدول المواعيد</Text>
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.goBack();
//               }}
//               style={styles.viewIcon}>
//               <Feather name="chevron-right" color={'#000'} size={25} />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.containerCalender}>
//             <Text style={styles.text}>الايام المتاحة</Text>

//             <CalendarPicker
//               showDayStragglers={true}
//               weekdays={[
//                 'الاحد',
//                 'الاثنين',
//                 'الثلاثاء',
//                 'الاربعاء',
//                 'الخميس',
//                 'الجمعة',
//                 'السبت',
//               ]}
//               months={[
//                 'يناير',
//                 ' فبراير',
//                 'مارس',
//                 'أبريل',
//                 'مايو',
//                 'يونيو',
//                 'يوليو',
//                 'أغسطس',
//                 'سبتمبر',
//                 'أكتوبر',
//                 'نوفمبر',
//                 'ديسمبر',
//               ]}
//               horizontal={true}
//               allowRangeSelection={true}
//               previousTitle="<"
//               nextTitle=">"
//               todayBackgroundColor="#3A82F8"
//               selectedDayColor="#3A82F8"
//               selectedDayTextColor="#ffffff"
//               selectedMonthColor="#3A82F8"
//               monthTitleStyle={{
//                 color: '#3A82F8',
//                 fontWeight: '400',
//                 fontSize: 16,
//               }}
//               yearTitleStyle={{
//                 color: '#3A82F8',
//                 fontWeight: '400',
//                 fontSize: 16,
//               }}
//               previousTitleStyle={{
//                 color: '#3A82F8',
//                 fontWeight: '400',
//                 fontSize: 17,
//               }}
//               nextTitleStyle={{
//                 color: '#3A82F8',
//                 fontWeight: '400',
//                 fontSize: 17,
//               }}
//               selectedDayStyle={{
//                 width: 30,
//                 height: 30,
//                 borderRadius: 9,
//                 backgroundColor: '#3A82F8',
//               }}
//               todayTextStyle={{
//                 width: 30,
//                 height: 30,
//                 borderRadius: 8,
//                 backgroundColor: '#3A82F8',
//                 textAlign: 'center',
//                 paddingTop: 5,
//               }}
//             />
//             <Text style={styles.input}> الساعات المتاحة</Text>
//             <Card style={{borderColor: '#F3B052'}}>
//               <Text style={{color: '#3A82F8', fontSize: 18, fontWeight: '500'}}>
//                 19 مارس 2022
//               </Text>
//               <View style={{flexDirection: 'row', paddingTop: 20}}>
//                 <TouchableOpacity style={styles.btn}>
//                   <Text style={styles.btnText}>12 م</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btn}>
//                   <Text style={styles.btnText}>12 م</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btn}>
//                   <Text style={styles.btnText}>12 م</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btn}>
//                   <Text style={styles.btnText}>12 م</Text>
//                 </TouchableOpacity>
//               </View>
//               <View style={{flexDirection: 'row'}}>
//                 <TouchableOpacity style={styles.btn2}>
//                   <Text style={styles.btnText}>12 م</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btn2}>
//                   <Text style={styles.btnText}>12 م</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btn2}>
//                   <Text style={styles.btnText}>12 م</Text>
//                 </TouchableOpacity>
//               </View>
//             </Card>
//           </View>
//         </ScrollView>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   addressStyle: {
//     justifyContent: 'center',
//     paddingTop: 30,
//     backgroundColor: '#fffff',
//     padding: 8,
//   },
//   input: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: '400',
//     textAlign: 'right',
//   },
//   btn: {
//     paddingRight: 50,
//     borderRadius: 5,
//     borderColor: '#AEAEB2',
//     width: 80,
//     height: 50,
//   },
//   btn2: {
//     paddingRight: 34,
//     paddingLeft: 12,
//     color: '#AEAEB2',
//   },
//   btnText: {
//     color: '#AEAEB2',
//     fontWeight: '400',
//     fontSize: 14,
//     borderColor: '#AEAEB2',
//   },
// });
