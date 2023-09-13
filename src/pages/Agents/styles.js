import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0F1822',
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      icon:{
        width: 20,
        height: 20,
      },
      header:{
        marginTop:50,
        alignItems: "center",
      },
      title:{
        fontSize: 42,
        color: '#fff'
      },
      description: {
        fontSize: 16,
        color: "#000",
      },
      icone:{
          width: 185,
          height: 185,
      },
      titleCard:{
          fontSize: 20,
          fontWeight: "bold",
          color: "#fff",
          marginBottom: 16,
          marginTop: 16,
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