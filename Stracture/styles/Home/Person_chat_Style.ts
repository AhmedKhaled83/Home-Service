import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/index';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';


const styles = StyleSheet.create({
    Page_container: { flex: 1, backgroundColor: "#fff" },
    container_header: {
      flexDirection: "row",
      width: width * 0.55,
      // backgroundColor: "#f00",
      justifyContent: "space-between",
      alignItems: "center",
      // paddingHorizontal: RFValue(5),
      alignSelf: "flex-start",
      marginLeft: RFValue(10),
      marginTop: RFValue(10),
      marginBottom: RFValue(20)
    },
    arrow_back: {
      width: width * 0.08889,
      height: height < 600 ? RFValue(36) : RFValue(31),
      backgroundColor: "#FFFFFF",
      borderRadius: RFValue(20),
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#1C1C1C",
      borderWidth: RFValue(1),
      shadowOffset: {
        width: 0,
        height: RFValue(20),
      },
      shadowOpacity: 0.25,
      shadowRadius: 0,
  
      elevation: 5,
    },
    style_countaner:{ width: width * 0.35, backgroundColor: "#fff", alignSelf: "flex-end", flexDirection: "row", alignItems: "center", marginVertical: RFValue(5), justifyContent: "space-around", marginRight: RFValue(5) },
    
  
    text_header: { color: "#000", fontSize: RFPercentage(3.1), fontFamily: "Cairo", fontWeight: "500" },
    
    counter_header :{
      width: width * 0.06,
      height: height < 600 ? RFValue(25) : RFValue(20),
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: RFValue(1),
      borderColor: '#3A82F8',
      borderRadius: 100,
    },
  
    FlatList_style: {
      alignSelf: "flex-end",
      marginRight: RFValue(10),
    },
  
  
    new_order_message :{ fontSize: RFPercentage(2.5), color: "#3A82F8", fontWeight: "400", fontFamily: "Cairo" },
    count_new_order_message:{ color: "#3A82F8", fontFamily: "Cairo", fontWeight: "400" },
    FlatList_container: {
      flexDirection: "row",
      width: width * 0.93,
      height: height < 600 ? RFValue(80) : RFValue(68),
      backgroundColor: "#fff",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    FlatList_container_time_count: {
      width: width * 0.17,
      height: height < 600 ? RFValue(80) : RFValue(68),
      // backgroundColor: "#0ff",
    },
  
    FlatList_style_time_count: {
      width: width * 0.17,
      height: height < 600 ? RFValue(40) : RFValue(34),
      //  backgroundColor:"#f00",
      justifyContent: "center",
      alignItems: "center",
    },
    FlatList_container_count: {
      width: width * 0.07,
      height: height < 600 ? RFValue(35) : RFValue(22),
      backgroundColor: "#F1BC43",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      alignSelf: "flex-end",
      marginRight: RFValue(5)
    },
    FlatList_text_time: { fontSize: RFPercentage(1.8), color: "#F1BC43", fontFamily: "Cairo", fontWeight: "400" },
    FlatList_text_count: { fontSize: RFPercentage(1.8), color: "#fff", fontFamily: "Cairo", fontWeight: "400" },
  
    FlatList_container_name_message: {
      width: width * 0.59,
      height: height < 600 ? RFValue(80) : RFValue(68),
      // backgroundColor: "#f0f",
      alignSelf: "center",
    },
  
    FlatList_style_name_message: {
      width: width * 0.59,
      height: height < 600 ? RFValue(40) : RFValue(34),
      // backgroundColor: "#05f",
      justifyContent: "center",
    },
    FlatList_text_name: {
      fontSize: RFPercentage(3),
      marginLeft: RFValue(10),
      color: "#000",
      fontFamily: "Cairo",
      fontWeight: "400",
      lineHeight: RFValue(30)
    },
    FlatList_text_message: {
      fontSize: RFPercentage(2),
      marginLeft: RFValue(10),
      color: "#3A82F8",
      fontFamily: "Cairo",
      fontWeight: "400",
      lineHeight: RFValue(22)
    },
    FlatList_Image_container: {
      width: width * 0.17,
      //   backgroundColor: "#f00",
      height: height < 600 ? RFValue(73) : RFValue(63.81),
      borderRadius: RFValue(100),
    },
    FlatList_Image_style: {
      width: width * 0.17,
      height: height < 600 ? RFValue(73) : RFValue(63.81),
      // borderRadius: RFValue(1000),
    },
    FlatList_line_End: {
      width: width * 0.769,
      height: RFValue(1),
      backgroundColor: "#575757",
      alignSelf: "center",
      marginVertical: RFValue(10),
    }
  });
  

  export default styles