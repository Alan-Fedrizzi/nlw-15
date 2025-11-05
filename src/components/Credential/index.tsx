import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { credentialStyles } from "./styles";

const {
  base,
  image,
  container,
  imageBackground,
  textContainer,
  text,
  shadow,
  avatar,
  name,
  email,
  qrcode,
  ampliarButton,
  ampliar,
} = credentialStyles();

type Props = {};

export function Credential({}: Props) {
  return (
    <View className={base()}>
      <Image className={image()} source={require("@/assets/ticket/band.png")} />

      <View className={container()}>
        <ImageBackground
          source={require("@/assets/ticket/header.png")}
          className={imageBackground()}
        >
          <View className={textContainer()}>
            <Text className={text()}>Unite summit</Text>
            <Text className={text()}>#123</Text>
          </View>

          {/* efeito de sombra */}
          <View className={shadow()} />
        </ImageBackground>

        <Image
          className={avatar()}
          source={{
            uri: "https://github.com/Alan-Fedrizzi.png",
          }}
        />

        <Text className={name()}>Alan Fedrizzi</Text>
        <Text className={email()}>test@email.com</Text>

        <Image
          className={qrcode()}
          source={require("@/assets/ticket/qrcode.png")}
        />

        <TouchableOpacity className={ampliarButton()} activeOpacity={0.7}>
          <Text className={ampliar()}>Ampliar QRCode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
