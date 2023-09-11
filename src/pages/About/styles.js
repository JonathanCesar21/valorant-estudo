import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0f1822",
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    title: {
      fontSize: 48,
      fontWeight: "bold",
      color: "#fff",
      letterSpacing: 7,
      
    },
    subTitle: {
      fontSize: 24,
      fontWeight: "300",
      color: "#C9C9C9",
      marginLeft: 7,
      
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
    iconeSkill:{
      width: 65,
      height: 65,
    },
    skillName:{
      fontSize: 14,
      fontWeight: '600',
      color: '#fff',
      alignSelf: "center",
      textAlign: "center",
    },
    skillDescription:{
      alignSelf: "center",
      paddingLeft: 5,
      color: '#fff'
    },
    containerSkills:{
      marginTop: 15,
      marginBottom: 15,
    },
    row:{
      flexDirection: "row",
    },
    col1:{
      width: "10%",
      
    },
    col2:{
      width: "20%",
      
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