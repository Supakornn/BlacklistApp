import { StyleSheet, Text, View, Image, ImageBackground,ScrollView, TouchableOpacity } from 'react-native'
import { Button } from '@rneui/themed';
import React from 'react'
import ImageViewer from 'react-native-image-zoom-viewer';
const Detail = ({navigation}) => {
    const[clickPicture,onChangeclickPicture] = React.useState(false)
    const [navOpen,OnChangenavOpen] = React.useState(false);
    const onPressPicture =(source) =>{  
        navigation.navigate('Imagezoom', { source });
    }
    return (
    <>
        <ImageBackground source={require("../img/BG_page.png")} style={styles.ImageBackground}>
            <View style={styles.container}>
            <TouchableOpacity  style= {styles.IconBack} onPress={()=> navigation.goBack()}>
            <Image source={require("../icon/BackButton.png")} style={{width:55,height:55}}/>
         </TouchableOpacity>
         {!navOpen && (<TouchableOpacity  style ={styles.Profile}onPress={()=>OnChangenavOpen(true)}>
                 <Image source={require("../icon/Profile_icon.png")} style={styles.Profile}></Image>
                </TouchableOpacity>
                )}
                {navOpen && (<TouchableOpacity  style ={styles.Profile}onPress={()=>OnChangenavOpen(false)}>
                 <Image source={require("../icon/Profile_icon.png")} style={styles.Profile}></Image>
                </TouchableOpacity>
                )}
                 {navOpen && (
                    <View style={styles.MenuContainer}>
                <TouchableOpacity  style ={styles.Menu} onPress={()=>navigation.navigate("Profile")||OnChangenavOpen(false)}>
                <Text style={styles.Textbox}>
                โปรไฟล์ 
                </Text>
                </TouchableOpacity>
                <TouchableOpacity  style ={styles.Menu} onPress={()=>navigation.navigate("Login")||OnChangenavOpen(false)}>
                    <Text style={styles.Textbox}>
                    ออกจากระบบ 
                    </Text>
                    </TouchableOpacity>
                    </View>
            )}  
            <Text style={styles.Topic}>
            รายละเอียด
            </Text>
            <View style={styles.Line}></View>
            <View style={styles.PictureContainer}>
                <TouchableOpacity onPress={() => onPressPicture("../img/Test1.png")}>
                    <Image source={require("../img/Test1.png")} style={styles.PictureDetails}/>
                </TouchableOpacity>
                <Image source={require("../img/Test2.jpg")} style={styles.PictureDetails}/>
            </View>
            <View style={styles.box}>
                <Text style={styles.TextBoxTopic}>เลขบัตรประชาชน:
                <Text style={styles.TextBoxDetail}>1-111-111111-11</Text></Text>
                 <Text style={styles.TextBoxTopic}>ชื่อผู้โกง:
                <Text style={styles.TextBoxDetail}>นายมนัส เตชะพัตราภรณ์</Text></Text>
                 <Text style={styles.TextBoxTopic}>เบอร์โทร:
                <Text style={styles.TextBoxDetail}>000-000-0000</Text></Text>
                 <Text style={styles.TextBoxTopic}>ธนาคาร:
                <Text style={styles.TextBoxDetail}>กสกร</Text></Text>
                <Text style={styles.TextBoxTopic}>วันโอนเงิน:
                <Text style={styles.TextBoxDetail}>10/11/2566</Text></Text>
                <Text style={styles.TextBoxTopic}>วันประกาศโพสต์:
                <Text style={styles.TextBoxDetail}>10/11/2566 22:33</Text></Text>
            </View>

            <View style={styles.navbar}>
                <TouchableOpacity  onPress={()=> navigation.navigate("Search")}>
                    <Image source={require("../icon/Search.png")} style={styles.IconNavSearch}></Image> 
                </TouchableOpacity>
                <Button
                                title="ค้นหา"
                                buttonStyle={{
                                    marginLeft:55,
                                    padding:0,
                                    width: 110,
                                    height: 40,
                                    borderRadius: 40,
                                    backgroundColor: "#FFE500"
                                }}
                                titleStyle={{ fontWeight: 'bold', fontSize: 23,color: "#0E599E"}}

                                />
                <Image source={require("../icon/add.png")} style={styles.IconNav}></Image>
                </View>
            </View>
        </ImageBackground>
    </>
  )
}

export default Detail

const styles = StyleSheet.create({
    ImageBackground:{
        alignContent: 'center',
        flex: 1
    },
    container: {
        position:'relative',
        alignItems: 'center'
    },
    navbar:{
        alignContent: 'center',
        flexDirection:'row',
        position:'absolute',
        paddingTop:20,
        top:660,
        bottom:0,
        left:0,
        right:0,
        width: 420,
        height: 75,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: "rgba(255, 255, 255, 1)"
    },
    IconNav:{
        marginLeft:70,
        marginRight:10,
        bottom:0,
        right:0,
        left:0,
        width:40,
        height:40,
    },
    Topic: {
        marginTop: 50,
        fontSize: 24,
        fontWeight: "700",
        fontStyle: "normal",
        color: "#0E599E"

    },
    IconNavSearch:{
        marginLeft:55,
        bottom:0,
        right:0,
        left:0,
        width:40,
        height:40,
    },
    IconNavAdd:{
        marginLeft:90,
        bottom:0,
        right:0,
        left:0,
        width:40,
        height:40,
    },
    Topic: {
        height:35,
        marginTop: 50,
        fontSize: 24,
        fontWeight: "700",
        fontStyle: "normal",
        color: "#0E599E"
    },
    Line: { 
        width: 110,
        height: 0,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: "rgba(160, 82, 172, 1.0)"
    },
    box:{        
        padding:10,
        width: 340,
        height: 290,
        borderRadius: 30,
        backgroundColor: "#FFFFFF",
        marginBottom:100,
    },
    TextBoxTopic:{
        margin:15,
        fontSize: 18,
        fontWeight: "700",
        fontStyle: "normal",
        color:'#0E599E',
        marginBottom:5,
    },
    TextBoxDetail:{
        color:'#000000'
    },
    Profile:{
        position:'absolute',
        width:50,
        height:50,
        right:10 ,
        top:15,
    },
    IconBack:{
        width:60,
        height:60,
        position:'absolute',
        left:10,
        top:30,
    },
    PictureContainer:{
        justifyContent:'center',
        flexDirection:'row',
        width:160,
        height:270,
        margin:0
    },
    PictureDetails:{
        width:150,
        height:240,
        marginRight:10,
    },
    MenuContainer:{
        zIndex: 1,
        position:'absolute',
        right:20,
        top:80, 
        height:60,
        width:110,
    },
    Menu:{
        backgroundColor:'#F3F0F0',
        height:40,
        width:110,
    },
    Textbox:{
        marginLeft:5,
        marginTop:5,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#0E599E"
    },
})
