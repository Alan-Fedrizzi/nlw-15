import { Credential } from "@/components/Credential";
import { Header } from "@/components/Header";
import { colors } from "@/styles/colors";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { ticketStyles } from "./ticket.styles";

const { base, scrollContainer, scrollContent, header, arrow, text, message } =
  ticketStyles();

export default function Ticket() {
  return (
    <View className={base()}>
      <StatusBar barStyle="light-content" />
      <Header title="Minha Credencial" className={header()} />

      <ScrollView
        className={scrollContainer()}
        contentContainerClassName={scrollContent()}
      >
        <Credential />

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
      </ScrollView>
    </View>
  );
}
