import { StyleSheet } from "react-native"


type Role ={
  type: string
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "fff",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
  
    content: {
      flex: 1,
      marginLeft: 16,
    },
  
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#6F4E37",
      marginBottom: 16,
    },
    description: {
      fontSize: 16,
      color: "#000",
    },
    icone:{
        width: 50,
        height: 50,
    },
  });

export default styles;