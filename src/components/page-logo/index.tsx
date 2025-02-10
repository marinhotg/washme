import { Image } from "react-native";

export function PageLogoComponent() {
  return (
    <Image
      source={require("../../../assets/images/page-logo.png")}
      style={{
        width: 117,
        height: 50,
        resizeMode: "contain",
      }}
    />
  );
}
