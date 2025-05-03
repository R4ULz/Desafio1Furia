# FURIA Fan App - Documentação

Aplicativo desenvolvido em **React Native** com **Expo**, voltado para fãs da equipe de eSports **FURIA**. Permite navegar por telas com informações sobre o time e jogadores, utilizando um menu drawer personalizado.

## 📄 Sumário

* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Funcionalidades](#funcionalidades)
* [Estrutura de Pastas](#estrutura-de-pastas)
* [Instalação e Execução](#instalação-e-execução)
* [Build Android (APK)](#build-android-apk)
* [Possíveis Problemas](#possiveis-problemas)

---

## ⚙️ Tecnologias Utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [React Navigation (Drawer & Stack)](https://reactnavigation.org/)
* [React Native SVG](https://github.com/software-mansion/react-native-svg)

---

## 🔧 Funcionalidades

* **Header Personalizado**: com logo clicável para home e ícone de menu.
* **Menu Drawer**: lateral direita, com transição e estilização personalizada.
* **Telas de Conteúdo**: Home, Estatísticas e Jogadores, com opção de expandir.

---

## 📂 Estrutura de Pastas

```bash
src/
├── components/         # Header, MatchCard, etc.
├── icons/              # SVGs personalizados
├── screens/            # Telas principais
├── assets/             # Imagens locais (se usadas)
```

---

## 🚀 Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie com Expo:

```bash
npx expo start
```

Escaneie o QR code com o app **Expo Go** no Android.

---

## ⚠️ Possíveis Problemas

* É necessário conexão com a internet, pois algumas imagens são carregadas da web.
* Para carregar SVGs da web, considere usar [`react-native-remote-svg`](https://github.com/kristerkari/react-native-remote-svg) ou converter para componentes.

---

Feito por \Raul Araujo.

