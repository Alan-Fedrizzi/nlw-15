import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { colors } from "@/styles/colors";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, StatusBar, View } from "react-native";
import { homeStyles } from "./styles";

const { base, image, inputContainer, link } = homeStyles();

// para expo route entender que é a rota inicial, exportar como default (nome do arquivo já é index, que ele procura)
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleRegister() {
    if (!name.trim() || !email.trim()) {
      return Alert.alert("Inscrição", "Preencha todos os campos.");
    }

    router.push("/ticket");
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
          <FontAwesome6
            name="user-circle"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Nome completo" onChangeText={setName} />
        </Input>

        <Input>
          <MaterialIcons
            name="alternate-email"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </Input>

        <Button
          title="Realizar inscrição"
          // onPress={() => handleRegister()}
          onPress={handleRegister}
        />

        <Link href="/" className={link()}>
          Já possui ingresso?
        </Link>
      </View>
    </View>
  );
}
