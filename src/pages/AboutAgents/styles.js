import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0f1822",
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    title: {
      marginLeft: -5,
      fontSize: 48,
      fontWeight: "bold",
      color: "#fff",
      letterSpacing: 7,
      
    },
    subTitle: {
      fontSize: 24,
      fontWeight: "300",
      color: "#C9C9C9",
      
    },
    titleSkills:{
      marginLeft: 5,
      fontSize: 32,
      fontWeight: "600",
      color: "#fff",
      marginBottom: 15,
    },
    description: {
      fontSize: 16,
      color: "#fff",
      marginTop: 30,
      marginBottom: 25,
    },
    containerImagemPrincipal:{
      alignItems: "center",
    },
    backgroundImage:{
    },
    imagemPersonagem:{
        width: 500,
        height: 400,
    },
    iconeRole:{
      width: 45,
      height: 45,
      marginTop:15,
      alignSelf: "flex-end",
    },
    boxIconeSkill:{
      backgroundColor: '#B2B8B211',
      padding: 7,
      marginLeft: 3,
      marginRight: 3,
      alignItems: "center",
      borderRadius: 10,
    },
    iconeSkill:{
      width: 64,
      height: 64,
    },
    skillName:{
      fontSize: 14,
      fontWeight: '600',
      color: '#fff',
      alignSelf: "center",
      textAlign: "center",
    },
    skillDescriptionBox:{
      marginTop: 20,
      marginBottom: 20,
    },
    skillDescription:{
      alignSelf: "center",
      textAlign: "center",
      paddingLeft: 0,
      color: '#fff'
    },
    containerSkills:{
      marginTop: 15,
      marginBottom: 15,
    },
    row:{
      flexDirection: "row",
    },
    rowCenter:{
      flexDirection: "row",
      justifyContent:"center",
    },
    col1:{
      width: "10%",
      
    },
    col2:{
      width: "20%",
    },
    col2_5:{
      width: "25%",
    },
    col3:{
      width: "30%",
      
    },
    col4:{
      width: "40%",
      
    },
    col5:{
      width: "50%",
      
    },
    col6:{
      width: "60%",
      
    },
    col7:{
      width: "70%",
      
    },
    col8:{
      width: "80%",
      justifyContent: 'center',

    },
    col9:{
      width: "90%",
      
    },
    col10:{
      width: "100%",
      
    },
  });

export default styles;