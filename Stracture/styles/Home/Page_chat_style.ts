import {StyleSheet, Dimensions} from 'react-native';
import {FONTSIZE, COLORS} from '../../utils/index';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';


const styles = StyleSheet.create({
    container_page: {
        flex: 1,
        backgroundColor: "#fff"
      },
      barstyle: {
        width: width,
        height: RFValue(100),
        backgroundColor: "#000000",
        flexDirection: "row",
        alignItems: "center",
        borderBottomEndRadius: RFValue(10),
        borderBottomStartRadius: RFValue(10)
      },
      counter_back: {
        width: width * 0.65,
        height: RFValue(100),
        // backgroundColor: "#f00",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
        borderBottomStartRadius: RFValue(10),
        alignSelf: "flex-start"
      },
    
      arrow_back: {
        // width: width * 0.087,
        // height: height < 600 ? RFValue(42) : RFValue(32),
        // backgroundColor: "#FFFFFF",
        // borderRadius: RFValue(30),
        // justifyContent: "center",
        marginLeft: RFValue(10),
        // alignItems: "center",
        width: width * 0.0888,
        height: width * 0.0888,
        backgroundColor: '#fff',
        padding: width * 0.01111,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: RFValue(25),
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: RFValue(20),
        },
        shadowOpacity: 0.25,
        shadowRadius: 0,
    
        elevation: 5,
      },
    
      countaer_image_vector: {
        width: width * 0.35,
        height: RFValue(100),
        // backgroundColor:"#056",
        justifyContent: "center",
        borderBottomEndRadius: RFValue(10)
      },
      style_vector_image: { width: width * 0.013, height: height < 600 ? RFValue(25) : RFValue(20), marginRight: RFValue(12), alignSelf: "flex-end" },
    
      container_Image_style: {
        width: width * 0.1,
        height: height < 650 ? RFValue(46) : RFValue(36),
        // backgroundColor: "#00F",
        borderRadius: RFValue(30),
        justifyContent: "center",
        borderColor: "#fff",
        borderWidth: RFValue(1),
        alignItems: "center",
        marginHorizontal: RFValue(8)
      },
      Image_style: {
        width: width * 0.1,
        height: height < 650 ? RFValue(46) : RFValue(36),
        // backgroundColor: "#00F",
        borderRadius: RFValue(30),
        justifyContent: "center",
        borderColor: "#fff",
        borderWidth: RFValue(1),
        alignItems: "center",
        marginHorizontal: RFValue(8)
      },
      name_person: {
        color: "#FFFFFF",
        fontSize: RFPercentage(3),
        fontWeight: "500",
        fontFamily: 'Cairo',
        lineHeight: 37
      },
      container_text_message_client:{ flexDirection: "row", flexWrap: "wrap", maxWidth: width * 0.6 },
    
      style_Text_message_client: { fontSize: RFPercentage(2), color: "#1C1C1C", fontFamily: "Cairo", fontWeight: "400" },
    
      container_Text_time_client: { width: width * 0.1, justifyContent: "flex-end", paddingLeft: RFValue(2), marginLeft: RFValue(13), alignSelf: "flex-end" },
    
      text_time_client: { color: "#878787", fontSize: RFPercentage(1.5), fontFamily: "Cairo", fontWeight: "400" },
    
      style_image_client: { width: width * 0.0611111, height: height < 600 ? RFValue(36) : RFValue(22), },
    
      container_Image_client: {
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        width: width * 0.0611111,
        height: height < 600 ? RFValue(36) : RFValue(22),
        // backgroundColor: "#00F",
        borderRadius: RFValue(20),
        // justifyContent: "center",
        alignItems: "center",
        marginHorizontal: RFValue(8)
      },
    
      container_client_message: {
        // width :null > width*0.7 ? null :width*0.9 ,
        // height:100,
        maxWidth: width * 0.8,
        flexDirection: "row",
        backgroundColor: "rgba(221, 221, 221, 0.4)",
    
        paddingHorizontal: RFValue(15),
        paddingVertical: RFValue(10),
        marginTop: RFValue(10),
        // marginLeft:RFValue(10),
        borderTopStartRadius: RFValue(24),
        borderTopEndRadius: RFValue(24),
        borderBottomStartRadius: RFValue(24),
        alignSelf: "flex-start",
      },
    
      container_manger_message: {
        // width :null > width*0.7 ? null :width*0.9 ,
        // height:100,
        maxWidth: width * 0.8,
        flexDirection: "row",
        backgroundColor: "rgba(241, 188, 67, 0.4)",
        alignSelf: "flex-start",
        paddingHorizontal: RFValue(15),
        paddingVertical: RFValue(10),
        marginTop: RFValue(10),
        marginLeft: RFValue(10),
        borderTopStartRadius: RFValue(24),
        borderTopEndRadius: RFValue(24),
        borderBottomEndRadius: RFValue(24),
        // alignSelf: "flex-start"
    
      },
    
    
      container_send: {
        width: width,
        // height: RFValue(46),
        flexDirection: 'row',
        // backgroundColor: "#f00",
        alignSelf: "center",
        marginBottom: RFValue(5),
        alignItems: "center"
      }
      ,
      container_Text_Input: {
        width: width * 0.8,
        // height:RFValue(46),
        flexDirection: "row",
        backgroundColor: "#fff",
        borderWidth: RFValue(2),
        borderColor: '#3A82F8',
        borderRadius: RFValue(16),
        marginHorizontal: RFValue(10)
      },
      style_Text_Input: {
    
        width: width * 0.7,
        maxHeight: RFValue(100),
        // height : null,
        // backgroundColor: "#F0f",
        // borderWidth: 2,
        // borderColor: '#3A82F8',
        alignSelf: "flex-end",
        flexWrap: "nowrap",
        borderTopEndRadius: RFValue(16),
        borderBottomEndRadius: RFValue(16),
    
    
      },
      container_time_manger: { width: width * 0.1, justifyContent: "flex-end", paddingLeft: RFValue(2), marginLeft: RFValue(13), alignSelf: "flex-end" },
    
      style_container_send: {
        width: width * 0.12,
        height: height < 600 ? RFValue(50) : RFValue(40),
        backgroundColor: "#3A82F8",
        marginLeft: RFValue(8),
        borderRadius: RFValue(50),
        justifyContent: "center",
        alignItems: "center"
    
      },
    
      container_camera: {
        width: width * 0.09,
        // backgroundColor:"#00f",
        justifyContent: "flex-end",
        alignItems: "center",
        borderTopEndRadius: RFValue(16),
        borderBottomEndRadius: RFValue(16),
      },
      style_camera: { marginBottom: RFValue(10), marginRight: RFValue(5), tintColor: "#3A82F8" },
    })
    
  

  export default styles