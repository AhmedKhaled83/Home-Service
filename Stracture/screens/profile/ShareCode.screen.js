import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import Share from 'react-native-share';
import Clipboard from '@react-native-community/clipboard';
import styles from '../../styles/profile/ShareCode.screen.style';
import {COLORS, icons, img} from '../../utils/index';
import Feather from 'react-native-vector-icons/Feather';

const ShareCodeScreen = ({navigation}) => {
  const code = 'm4598of';
  const message = 'm4598of';
  //const [data, setString] = useClipboard();
  const writeToClipboard = async () => {
    //To copy the text to clipboard
    Clipboard.setString(code);
    alert('Copied to Clipboard!');
  };
  const [text, setText] = useState(
    'شارك كود المشاركه الخاص بك مع كل معارفك واحصل علي 50 ج.م في محفظتك هديه ',
  );

  const options = {
    message,
  };
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View style={styles.containerStyle}>
        <View style={styles.headerStyle}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.viewIcon}>
            <Feather name="chevron-right" color={COLORS.mainBlack} size={25} />
          </TouchableOpacity>
          <View style={styles.textViewStyle}>
            <Text style={styles.headerTextStyle}>كود المشاركة</Text>
          </View>
        </View>
        <Image
          source={img.shareCode}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <View style={styles.viewTextStyle}>
          <Text style={styles.textStyle}>{text}</Text>
        </View>

        <View style={styles.viewCodeStyle}>
          <TouchableOpacity onPress={writeToClipboard}>
            <Image source={icons.copy} style={styles.copyImageStyle} />
          </TouchableOpacity>
          <Text style={styles.codeTextStyle}>{code}</Text>
        </View>
        <TouchableOpacity
          onPress={async () => {
            await share();
          }}
          style={styles.shareButtonStyle}>
          <Text style={styles.textButtonStyle}>مشاركة الكود</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default ShareCodeScreen;
