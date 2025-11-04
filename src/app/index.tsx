import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { colors } from "@/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, StatusBar, View } from "react-native";
import { homeStyles } from "./styles";

const { base, image, inputContainer, link } = homeStyles();

// para expo route entender que é a rota inicial, exportar como default (nome do arquivo já é index, que ele procura)
export default function Home() {
  return (
    <View className={base()}>
      <StatusBar barStyle="light-content" />

      <Image
        source={require("@/assets/logo.png")}
        className={image()}
        resizeMode="contain"
      />

      <View className={inputContainer()}>
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Código do ingresso" />
        </Input>

        <Button
          title="Acessar credencial"
          onPress={() => console.log("Acessar credencial")}
        />
        {/* <Button title="Cadastrar" isLoading /> */}

        <Link href="/register" className={link()}>
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}
