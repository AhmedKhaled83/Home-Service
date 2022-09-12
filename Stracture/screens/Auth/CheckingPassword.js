import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {scale} from 'react-native-size-matters';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import styles from '../../styles/Auth/CheckingPassStyle';
import * as Animatable from 'react-native-animatable';
const CELL_COUNT = 4;

function CheckingPassword({navigation}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const refTimer = useRef();
  const [timerEnd, setTimerEnd] = useState(true);
  const [time_send, settime_send] = useState(120);

  const timerCallbackFunc = timerEnd => {
    setTimerEnd(!timerEnd);
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />

      <Animatable.View animation="fadeInRight" style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.style_container_border}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.style_button_back}>
              <FontAwesome5
                name="arrow-right"
                size={scale(18)}
                color={styles.bottn_back.color}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>

            <Text style={styles.style_text_check}>التحقيق</Text>
          </View>

          <Text style={styles.style_text_message}>
            لقد ارسلنا لك الكود, قم بإدخال الكود المرسل اليك للتاأكيد من بيانتك
          </Text>

          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />

          <View style={styles.style_container_text_returnSend}>
            {timerEnd ? (
              <CountDownTimer
                ref={refTimer}
                timestamp={time_send}
                timerCallback={timerCallbackFunc}
                containerStyle={styles.countDown}
                textStyle={styles.style_time}
              />
            ) : (
              <Text style={styles.style_time}>0:00</Text>
            )}

            <Text style={styles.style_text_returnSend}>اعاده ارسال الكود</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NewPass');
            }}
            style={styles.style_container_confirm}>
            <Text style={styles.style_text_confirm}> تأكيد </Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </>
  );
}
export default CheckingPassword;
