import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { colors } from "@/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Image, StatusBar, View } from "react-native";
import { homeStyles } from "./styles";

const { base, image, inputContainer, link } = homeStyles();

// para expo route entender que é a rota inicial, exportar como default (nome do arquivo já é index, que ele procura)
export default function Home() {
  const [code, setCode] = useState("");

  function handleAccessCredentials() {
    if (!code.trim()) {
      return Alert.alert("Ingresso", "Informe o código do ingresso.");
    }

    console.log(code);
  }

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
          <Input.Field
            placeholder="Código do ingresso"
            // onChangeText={(value) => setCode(value)}
            onChangeText={setCode}
          />
        </Input>

        <Button
          title="Acessar credencial"
          // onPress={() => handleAccessCredentials()}
          onPress={handleAccessCredentials}
        />
        {/* <Button title="Cadastrar" isLoading /> */}

        <Link href="/register" className={link()}>
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}
