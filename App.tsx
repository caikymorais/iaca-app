import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
} from "react-native";

const Stack = createNativeStackNavigator();

type UserType = "feirante" | "empresa";

const HomeScreen = ({ navigation }: any) => {
  const [userType, setUserType] = useState<UserType>("feirante");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como funciona o Yaçá?</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Sou vendedor de açaí</Text>
        <Switch
          value={userType === "empresa"}
          onValueChange={(val) => setUserType(val ? "empresa" : "feirante")}
        />
        <Text style={styles.label}>Sou uma empresa</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cadastro", { userType })}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const CadastroScreen = ({ route }: any) => {
  const { userType } = route.params;
  const isFeirante = userType === "feirante";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Cadastro {isFeirante ? "Feirante" : "Empresa"}
      </Text>

      {isFeirante ? (
        <>
          <TextInput placeholder="Seu nome" style={styles.input} />
          <TextInput placeholder="Seu telefone/Whatsapp" style={styles.input} />
          <TextInput
            placeholder="Nome da banca (Opcional)"
            style={styles.input}
          />
          <TextInput
            placeholder="Localização aproximada"
            style={styles.input}
          />
          <TextInput
            placeholder="Quantos caroços por semana?"
            style={styles.input}
          />
          <Text style={styles.label}>Aceita receber aviso por WhatsApp?</Text>
          <Switch />
        </>
      ) : (
        <>
          <TextInput placeholder="Nome da empresa" style={styles.input} />
          <TextInput placeholder="CNPJ" style={styles.input} />
          <TextInput placeholder="Nome do responsável" style={styles.input} />
          <TextInput placeholder="Telefone de contato" style={styles.input} />
          <TextInput placeholder="E-mail" style={styles.input} />
          <TextInput placeholder="Endereço" style={styles.input} />
          <TextInput placeholder="Área de atuação" style={styles.input} />
          <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
          <TextInput
            placeholder="Confirmar senha"
            style={styles.input}
            secureTextEntry
          />
        </>
      )}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Concluir Cadastro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const LoginScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Entrar</Text>
    <TextInput placeholder="E-mail ou telefone" style={styles.input} />
    <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Yaçá" }}
        />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#6A1B9A",
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
});
