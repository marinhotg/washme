import { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { BottomMenu } from "../../components/bottom-menu";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Select } from "../../components/select";
import { TermsText } from "../../components/terms-text";

export function LaundryRegistration() {
  const [plan, setPlan] = useState("");
  const [washers, setWashers] = useState(0);
  const [dryers, setDryers] = useState(0);
  const [limit, setLimit] = useState(1);
  const [washerDuration, setWasherDuration] = useState("");
  const [dryerDuration, setDryerDuration] = useState("");

  const planOptions = [
    { label: "Free", value: "free" },
    { label: "Basic", value: "basic" },
    { label: "Plus", value: "plus" },
  ];

  const numberOptions = Array.from({ length: 7 }, (_, i) => ({
    label: i.toString(),
    value: i,
  }));

  const limitOptions = Array.from({ length: 6 }, (_, i) => ({
    label: (i + 1).toString(),
    value: i + 1,
  }));

  const durationOptions = [
    { label: "30 minutos", value: "00:30" },
    { label: "45 minutos", value: "00:45" },
    { label: "1 hora", value: "01:00" },
    { label: "1 hora e 30 minutos", value: "01:30" },
    { label: "2 horas", value: "02:00" },
  ];

  return (
    <View style={styles.container}>
      <Header title="Cadastro da lavanderia" onBack={() => {}} />

      <ScrollView style={styles.content}>
        <View style={styles.fields}>
          <Input
            topLabel="Código"
            placeholder="ABC123"
            editable={false}
            value="ABC123"
          />

          <Select
            topLabel="Plano"
            options={planOptions}
            value={plan}
            onChange={setPlan}
          />

          <Input topLabel="Endereço" placeholder="Digite o endereço" />

          <Select
            topLabel="Quantidade de lavadoras"
            options={numberOptions}
            value={washers}
            onChange={setWashers}
          />

          <Select
            topLabel="Quantidade de secadoras"
            options={numberOptions}
            value={dryers}
            onChange={setDryers}
          />

          <Select
            topLabel="Limite de reservas simultâneas"
            options={limitOptions}
            value={limit}
            onChange={setLimit}
          />

          <Select
            topLabel="Duração da reserva da lavadora"
            options={durationOptions}
            value={washerDuration}
            onChange={setWasherDuration}
          />

          <Select
            topLabel="Duração da reserva da secadora"
            options={durationOptions}
            value={dryerDuration}
            onChange={setDryerDuration}
          />

          <TermsText
            onPressTerms={() => console.log("Abrir termos de serviço")}
          />

          <Button title="Concordar e continuar" onPress={() => {}} />
        </View>
      </ScrollView>

      <BottomMenu currentRoute="home" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
  },
  fields: {
    padding: 16,
    gap: 16,
  },
  terms: {
    fontSize: 14,
    lineHeight: 20,
    color: "#020617",
  },
  termsLink: {
    color: "#276672",
    textDecorationLine: "underline",
  },
});
