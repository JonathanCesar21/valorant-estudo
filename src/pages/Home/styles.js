import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1822",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  icone: {
    alignSelf: 'flex-end',
    width: 170,
    height: 150,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerCard: {
   marginTop: 15,
   marginBottom: 15,
   backgroundColor: '#141E29',
   borderWidth: 2,
   borderColor: '#FF4655',
  },
  col1: {
    width: "10%",

  },
  col2: {
    width: "20%",
  },
  col2_5: {
    width: "25%",
  },
  col3: {
    width: "30%",

  },
  col4: {
    width: "40%",

  },
  col5: {
    width: "50%",
    justifyContent: "center",

  },
  col6: {
    width: "60%",

  },
  col7: {
    width: "70%",

  },
  col8: {
    width: "80%",
    justifyContent: 'center',

  },
  col9: {
    width: "90%",

  },
  col10: {
    width: "100%",

  },

});

export default styles;