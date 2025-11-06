import { QRCode } from "@/components/Qrcode";
import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
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
  imageStyles,
  container,
  imageBackground,
  textContainer,
  text,
  shadow,
  avatar,
  buttonAvatar,
  name,
  email,
  qrcode,
  ampliarButton,
  ampliar,
} = credentialStyles();

type Props = {
  image?: string;
  onChangeAvatar?: () => void;
  onExpandQRCode?: () => void;
};

export function Credential({ image, onChangeAvatar, onExpandQRCode }: Props) {
  return (
    <View className={base()}>
      <Image
        className={imageStyles()}
        source={require("@/assets/ticket/band.png")}
      />

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

        {image ? (
          <TouchableOpacity activeOpacity={0.7} onPress={onChangeAvatar}>
            <Image
              className={avatar()}
              source={{
                // uri: "https://github.com/Alan-Fedrizzi.png",
                uri: image,
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            className={buttonAvatar()}
            onPress={onChangeAvatar}
          >
            <Feather name="camera" color={colors.green[400]} size={32} />
          </TouchableOpacity>
        )}

        <Text className={name()}>Alan Fedrizzi</Text>
        <Text className={email()}>test@email.com</Text>

        <QRCode value="teste" size={120} />
        {/* <Image
          className={qrcode()}
          source={require("@/assets/ticket/qrcode.png")}
        /> */}

        <TouchableOpacity
          className={ampliarButton()}
          activeOpacity={0.7}
          onPress={onExpandQRCode}
        >
          <Text className={ampliar()}>Ampliar QRCode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
