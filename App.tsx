import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";


type Produto = {
  id: string;
  nome: string;
  preco: string;
  imagem: string;
};

type RootStackParamList = {
  Home: undefined;
  Cadastro: { userType: string };
  Login: undefined;
  BuscaProdutos: undefined;
  DetalhesProduto: { produto: Produto };
  Carrinho: undefined;
  ProdutosFeirante: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();
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
          <TextInput placeholder="Nome da banca (Opcional)" style={styles.input} />
          <TextInput placeholder="Localização aproximada" style={styles.input} />
          <TextInput placeholder="Quantos caroços por semana?" style={styles.input} />
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
          <TextInput placeholder="Confirmar senha" style={styles.input} secureTextEntry />
        </>
      )}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Concluir Cadastro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = () => {
    if (email === "feirante" && senha === "1234") {
      navigation.navigate("ProdutosFeirante");
    } else if (email === "empresa" && senha === "1234") {
      navigation.navigate("BuscaProdutos");
    }
    else {
      setErro("E-mail ou senha inválidos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <TextInput
        placeholder="E-mail ou telefone"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erro ? <Text style={{ color: "red" }}>{erro}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};
const CarrinhoScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Seu carrinho está vazio.</Text>
  </View>
);

const BuscaProdutosScreen = () => {
  const [busca, setBusca] = useState("");
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const produtos: Produto[] = [
    {
      id: "1",
      nome: "Saca de Açaí - 1kg",
      preco: "R$ 20,00",
      imagem: "https://agenciapara.com.br/midias/2024/grandes/up_ag_59095_1996c773-386d-9857-a9e4-faeba6b79352.jpg"
    },
    {
      id: "2",
      nome: "Saca de Açaí - 500kg",
      preco: "R$ 400,00",
      imagem: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3351251:1679955685/acai.JPG?f=default&$p$f=bbb6a90"
    },
    {
      id: "3",
      nome: "Saca de Açaí - 700kg",
      preco: "R$ 600,00",
      imagem: "https://www.istockphoto.com/br/foto/fruta-do-a%C3%A7a%C3%AD-harvest-gm120504418-15982695"
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Carrinho")}
          style={{
            backgroundColor: "#6A1B9A",
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 8,
            marginRight: 12,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>🛒</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const resultados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.containerTop}>
      <TextInput
        placeholder="Buscar produto de açaí..."
        value={busca}
        onChangeText={setBusca}
        style={styles.input}
        placeholderTextColor="#666"
      />

      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.cardImage} resizeMode="cover" />
            <Text style={styles.produtoNome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
            <TouchableOpacity
              style={styles.botaoCard}
              onPress={() => navigation.navigate("DetalhesProduto", { produto: item })}
            >
              <Text style={styles.botaoCardTexto}>Ver detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const DetalhesProdutoScreen = ({ route }: { route: { params: { produto: Produto } } }) => {
  const { produto } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.containerTop}>
      <Image source={{ uri: produto.imagem }} style={styles.produtoImagem} />

      <Text style={styles.produtoNome}>{produto.nome}</Text>
      <Text style={styles.preco}>{produto.preco}</Text>

      <Text style={styles.label}>Vendedor:</Text>
      <Text style={styles.vendedorNome}>Feirante do Ver-o-Peso</Text>

      <TouchableOpacity style={styles.botaoCard}>
        <Text style={styles.botaoCardTexto}>Iniciar Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario}>
        <Text style={styles.botaoCardTexto}>Formas de Pagamento</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Detalhes:</Text>
      <Text style={styles.detalhesTexto}>
      Caroço fresco, proveniente da moagem recente do açaí. Ideal para reaproveitamento sustentável e uso em bioenergia, compostagem ou artesanato. Retirada ou entrega a combinar via WhatsApp.
      </Text>
    </ScrollView>
  );
};

const ProdutosFeiranteScreen = () => {
  const [produtos, setProdutos] = useState([
    {
      id: "1",
      nome: "Caroço de Açaí - 10kg",
      preco: "R$ 45,00",
      imagem: "https://picsum.photos/seed/1/200",
      data: "07/05/2025",
      status: "Disponível",
    },
    {
      id: "2",
      nome: "Caroço úmido - 20kg",
      preco: "R$ 80,00",
      imagem: "https://picsum.photos/seed/2/200",
      data: "06/05/2025",
      status: "Vendido",
    },
  ]);

  const adicionarProduto = () => {
    const novo = {
      id: Math.random().toString(),
      nome: "Novo Caroço - 15kg",
      preco: "R$ 60,00",
      imagem: "https://picsum.photos/seed/" + Math.random() + "/200",
      data: new Date().toLocaleDateString(),
      status: "Disponível",
    };
    setProdutos([novo, ...produtos]);
  };

  return (
    <SafeAreaView style={styles.containerTop}>
      <Text style={styles.title}>Bem-vindo, Feirante</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        Nome: Banca do João{"\n"}
        Localização: Feira do Ver-o-Peso{"\n"}
        Contato: (91) 91234-5678
      </Text>

      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
        Você tem {produtos.length} produtos cadastrados
      </Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.cardImage} />
            <Text style={styles.produtoNome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Postado em: {item.data}</Text>

            <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
            <TouchableOpacity style={styles.botaoEditar}>
          <Text style={styles.textoBotaoClaro}>Editar</Text>
        </TouchableOpacity>

              <TouchableOpacity
                style={[styles.botaoSecundario, { flex: 1 }]}
                onPress={() =>
                  setProdutos(produtos.filter((p) => p.id !== item.id))
                }
              >
                <Text style={styles.botaoExcluir}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        style={[styles.botaoCard, { marginTop: 20 }]}
        onPress={adicionarProduto}
      >
        <Text style={styles.botaoCardTexto}>+ Adicionar Produto</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Yaçá" }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BuscaProdutos" component={BuscaProdutosScreen} />
        <Stack.Screen name="DetalhesProduto" component={DetalhesProdutoScreen} />
        <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
        <Stack.Screen name="ProdutosFeirante" component={ProdutosFeiranteScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  produtoImagem: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  vendedorNome: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  botaoSecundario: {
    backgroundColor: "#9C27B0",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  detalhesTexto: {
    fontSize: 15,
    marginTop: 10,
    color: "#444",
    lineHeight: 22,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  containerTop: {
    flex: 1,
    padding: 20,
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
    marginBottom: 15,
    backgroundColor: "#f0f0f0",
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
  card: {
    backgroundColor: "#fdfdfd",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  produtoNome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#333",
  },
  preco: {
    fontSize: 16,
    color: "#6A1B9A",
    marginBottom: 10,
  },
  botaoCard: {
    backgroundColor: "#6A1B9A",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoCardTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  botaoEditar: {
    backgroundColor: "#4A0072", 
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  
  botaoExcluir: {
    backgroundColor: "#8E24AA", 
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  
  textoBotaoClaro: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    gap: 10,
  },
  
});
