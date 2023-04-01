import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/responsiveSize";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    width: verticalScale(275), // for responsive design, convert the size fitting into emulator
    height: horizontalScale(50), // horizontal/vertialScale(pixel size on Figma file)
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  testText: {
    fontFamily: "BalooBhaijaan2-Regular",
    fontSize: 30,
  },
});

export default styles;
