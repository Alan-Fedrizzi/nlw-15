import { Button } from "@/components/Button";
import { Credential } from "@/components/Credential";
import { Header } from "@/components/Header";
import { QRCode } from "@/components/Qrcode";
import { colors } from "@/styles/colors";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ticketStyles } from "./ticket.styles";

const {
  base,
  scrollContainer,
  scrollContent,
  header,
  arrow,
  text,
  message,
  remove,
  removeText,
  modal,
  modalClose,
} = ticketStyles();

export default function Ticket() {
  const [image, setImage] = useState(""); // tipagem implícita
  const [expandedQRCode, setExpandedQRCode] = useState(false);

  async function handleSelectImage() {
    // https://app.rocketseat.com.br/classroom/nlw-15-unite-react-native/group/nlw-15-unite-react-native/lesson/desenvolvimento-avancado-e-upload-de-imagens
    // -23:40 mostra como adicionar imagem no emulador
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        // mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // MediaTypeOptions is deprecated
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [4, 4],
      });

      if (result.assets) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Foto", "Não foi possível selecionar a imagem.");
    }
  }

  return (
    <View className={base()}>
      <StatusBar barStyle="light-content" />
      <Header title="Minha Credencial" className={header()} />

      <ScrollView
        className={scrollContainer()}
        contentContainerClassName={scrollContent()}
        showsVerticalScrollIndicator={false}
      >
        <Credential
          // image="https://github.com/Alan-Fedrizzi.png"
          image={image}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={() => setExpandedQRCode(true)}
        />

        <FontAwesome
          className={arrow()}
          name="angle-double-down"
          size={24}
          color={colors.gray[300]}
        />

        <Text className={text()}>Compartilhar credencial</Text>
        <Text className={message()}>
          Moste ao mundo que você vai participar do Unite Summit
        </Text>

        <Button title="Compartilhar" />
        <TouchableOpacity activeOpacity={0.7} className={remove()}>
          <Text className={removeText()}>Remover Ingresso</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={expandedQRCode}
        onRequestClose={() => setExpandedQRCode(false)}
        animationType="slide"
        statusBarTranslucent
      >
        <View className={modal()}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setExpandedQRCode(false)}
          >
            <QRCode value="teste" size={300} />
            <Text className={modalClose()}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
