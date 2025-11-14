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
import { BadgeStore } from "@/store/badge-store";

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
  data: BadgeStore;
  image?: string;
  onChangeAvatar?: () => void;
  onExpandQRCode?: () => void;
};

export function Credential({
  data,
  image,
  onChangeAvatar,
  onExpandQRCode,
}: Props) {
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
            <Text className={text()}>{data.eventTitle}</Text>
            {/* o bak não manda o id */}
            <Text className={text()}>#{data.id}</Text>
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

        <Text className={name()}>{data.name}</Text>
        <Text className={email()}>{data.email}</Text>

        <QRCode value={data.checkInURL} size={120} />
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
