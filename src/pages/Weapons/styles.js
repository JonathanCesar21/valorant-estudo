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
  cardWeapon: {
    alignItems: "center",
    backgroundColor: '#141E29',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 15,
    paddingBottom: 15,
    borderWidth: 1,
    borderColor: '#FF4655'
  },
  header: {
    marginTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 42,
    color: '#fff'
  },
  description: {
    fontSize: 16,
    color: "#000",
  },
  icone: {
    width: 150,
    height: 120,
  },
  titleCard: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
    marginTop: 16,
  },
  boxFlatList: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  row: {
    flexDirection: "row",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
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