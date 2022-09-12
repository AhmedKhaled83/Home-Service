import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
const { width, height } = Dimensions.get("screen");
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styles from '../../styles/Home/Person_chat_Style'

import Feather from 'react-native-vector-icons/Feather';

function Person_Chat({ navigation }) {


  const [item, stitem] = useState([
    {
      id: "1",
      name: "أحمد محمد",
      imag: require("../../images/images/l.png"),
      message: "موافق ,لا مشكله",
      time: "4:30 pm",
      count: 2,
    },
    {
      id: "1",
      name: "أحمد محمد",
      imag: require("../../images/images/l.png"),
      message: "موافق ,لا مشكله",
      time: "4:30 pm",
      count: 0,
    },
  ]);

  return (
    <>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <View style={styles.Page_container}>
        <View style={styles.container_header}>
          <TouchableOpacity style={styles.arrow_back}>
            <Feather
              name="chevron-right"
              color={"#000"}
              size={25}
            />
          </TouchableOpacity>

          <Text style={styles.text_header}>الرسايل</Text>


        </View>

        <View style={styles.style_countaner}>


          <View style={styles.counter_header}>
            <Text style={styles.count_new_order_message}>2</Text>
          </View>


          <Text style={styles.new_order_message}> طلبات جديده</Text>

        </View>

        <FlatList
          data={item}
          contentContainerStyle={styles.FlatList_style}
          renderItem={({ item, index }) => (
            <View>
              <TouchableOpacity onPress={() => { navigation.navigate('Page_Chat', { item: item }) }}
                style={styles.FlatList_container}>
                <View
                  style={styles.FlatList_Image_container}
                >
                  <Image
                    source={item.imag}
                    style={styles.FlatList_Image_style}
                    resizeMode={"contain"}
                  />
                </View>


                {/* // name && message */}
                <View
                  style={styles.FlatList_container_name_message}
                >
                  <View
                    style={styles.FlatList_style_name_message}
                  >
                    <Text
                      style={styles.FlatList_text_name}
                    >
                      {item.name}
                    </Text>
                  </View>

                  <View
                    style={styles.FlatList_style_name_message}
                  >

                    <Text
                      style={item.count > 0 ? (styles.FlatList_text_message) : ([styles.FlatList_text_message, { color: "#878787" }])}
                    >
                      {item.message}
                    </Text>
                  </View>
                </View>


                {/* // time && count  */}
                <View style={styles.FlatList_container_time_count}>

                  {item.count > 0 ? (
                    <>
                      <View style={styles.FlatList_style_time_count}>
                        <Text style={styles.FlatList_text_time}>
                          {item.time}
                        </Text>
                      </View>
                      <View style={styles.FlatList_style_time_count}>
                        <View style={styles.FlatList_container_count}>
                          <Text style={styles.FlatList_text_count}>
                            {item.count}
                          </Text>
                        </View>
                      </View>
                    </>
                  ) : (
                    <>
                      <View style={styles.FlatList_style_time_count}>
                        <Text
                          style={[
                            styles.FlatList_text_time,
                            { color: "#878787" },
                          ]}
                        >
                          {item.time}
                        </Text>
                      </View>
                    </>
                  )}
                </View>
              </TouchableOpacity>
              <View
                style={styles.FlatList_line_End}
              ></View>


            </View>
          )}
        />
      </View>
    </>
  );
}

export default Person_Chat;

// const styles = StyleSheet.create({
//   Page_container: { flex: 1, backgroundColor: "#fff" },
//   container_header: {
//     flexDirection: "row",
//     width: width * 0.55,
//     // backgroundColor: "#f00",
//     justifyContent: "space-between",
//     alignItems: "center",
//     // paddingHorizontal: RFValue(5),
//     alignSelf: "flex-start",
//     marginLeft: RFValue(10),
//     marginTop: RFValue(10),
//     marginBottom: RFValue(20)
//   },
//   arrow_back: {
//     width: width * 0.08889,
//     height: height < 600 ? RFValue(36) : RFValue(31),
//     backgroundColor: "#FFFFFF",
//     borderRadius: RFValue(20),
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: "#1C1C1C",
//     borderWidth: RFValue(1),
//     shadowOffset: {
//       width: 0,
//       height: RFValue(20),
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 0,

//     elevation: 5,
//   },
//   style_countaner:{ width: width * 0.35, backgroundColor: "#fff", alignSelf: "flex-end", flexDirection: "row", alignItems: "center", marginVertical: RFValue(5), justifyContent: "space-around", marginRight: RFValue(5) },
  

//   text_header: { color: "#000", fontSize: RFPercentage(3.1), fontFamily: "Cairo", fontWeight: "500" },
  
//   counter_header :{
//     width: width * 0.06,
//     height: height < 600 ? RFValue(25) : RFValue(20),
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: RFValue(1),
//     borderColor: '#3A82F8',
//     borderRadius: 100,
//   },

//   FlatList_style: {
//     alignSelf: "flex-end",
//     marginRight: RFValue(10),
//   },


//   new_order_message :{ fontSize: RFPercentage(2.5), color: "#3A82F8", fontWeight: "400", fontFamily: "Cairo" },
//   count_new_order_message:{ color: "#3A82F8", fontFamily: "Cairo", fontWeight: "400" },
//   FlatList_container: {
//     flexDirection: "row",
//     width: width * 0.93,
//     height: height < 600 ? RFValue(80) : RFValue(68),
//     backgroundColor: "#fff",
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   FlatList_container_time_count: {
//     width: width * 0.17,
//     height: height < 600 ? RFValue(80) : RFValue(68),
//     // backgroundColor: "#0ff",
//   },

//   FlatList_style_time_count: {
//     width: width * 0.17,
//     height: height < 600 ? RFValue(40) : RFValue(34),
//     //  backgroundColor:"#f00",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   FlatList_container_count: {
//     width: width * 0.07,
//     height: height < 600 ? RFValue(35) : RFValue(22),
//     backgroundColor: "#F1BC43",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 100,
//     alignSelf: "flex-end",
//     marginRight: RFValue(5)
//   },
//   FlatList_text_time: { fontSize: RFPercentage(1.8), color: "#F1BC43", fontFamily: "Cairo", fontWeight: "400" },
//   FlatList_text_count: { fontSize: RFPercentage(1.8), color: "#fff", fontFamily: "Cairo", fontWeight: "400" },

//   FlatList_container_name_message: {
//     width: width * 0.59,
//     height: height < 600 ? RFValue(80) : RFValue(68),
//     // backgroundColor: "#f0f",
//     alignSelf: "center",
//   },

//   FlatList_style_name_message: {
//     width: width * 0.59,
//     height: height < 600 ? RFValue(40) : RFValue(34),
//     // backgroundColor: "#05f",
//     justifyContent: "center",
//   },
//   FlatList_text_name: {
//     fontSize: RFPercentage(3),
//     marginLeft: RFValue(10),
//     color: "#000",
//     fontFamily: "Cairo",
//     fontWeight: "400",
//     lineHeight: RFValue(30)
//   },
//   FlatList_text_message: {
//     fontSize: RFPercentage(2),
//     marginLeft: RFValue(10),
//     color: "#3A82F8",
//     fontFamily: "Cairo",
//     fontWeight: "400",
//     lineHeight: RFValue(22)
//   },
//   FlatList_Image_container: {
//     width: width * 0.17,
//     //   backgroundColor: "#f00",
//     height: height < 600 ? RFValue(73) : RFValue(63.81),
//     borderRadius: RFValue(100),
//   },
//   FlatList_Image_style: {
//     width: width * 0.17,
//     height: height < 600 ? RFValue(73) : RFValue(63.81),
//     // borderRadius: RFValue(1000),
//   },
//   FlatList_line_End: {
//     width: width * 0.769,
//     height: RFValue(1),
//     backgroundColor: "#575757",
//     alignSelf: "center",
//     marginVertical: RFValue(10),
//   }
// });
