import { StyleSheet } from "react-native";
import colors from '../../contants/colors'

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#82ccdd'
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    borderColor: "gray",
    borderWidth: 1,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#008000",
    width: "100%",
    padding: 15,
    borderRadius: 18,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#008000",
    marginTop: 5,
    borderColor: "#008000",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  CarLogo: {
    width: 300,
    height: 300,
  },
  CarLogoContainer: {
    marginBottom: 80,
    marginTop: -95,
  },
  // footer
  footer: {
   
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
    marginTop:30,
  },
  footerText: {
    color: colors.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color:colors.primary ,
    fontWeight: 'bold',
  },
});
export default loginStyle;
