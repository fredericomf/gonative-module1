# Android

Lista de erros comuns enfrentados no Android:

## Ao tentar baixar o SDK Android temos a exception: java.lang.NoClassDefFoundError: javax/xml/bind/annotation/XmlSchema

Para resolver, inclua no ~/.profile:
```bash
export JAVA_OPTS="-XX:+IgnoreUnrecognizedVMOptions --add-modules java.se.ee"
```

ou rode o comando acima antes de roda o ~/Android/Sdk/tools/bin/sdkmanager  "platform-tools" "platforms;android-27" "build-tools;27.0.3"


## SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable

Esse erro acontece quando, mesmo setando o ~/[USER]/.profiles, o caminho do SDK do android não é encontrado

Para corrigir:

1. Na raiz do projeto:

```bash
cd android
```

2. Crie o arquivo 'local.properties' com o seguinte conteúdo:

```bash
sdk.dir = /home/[NOME DO USUARIO]/Android/sdk
```

Tente novamente executar o projeto. Atenção para dar um 'cd ..' antes, voltando para a raiz.

## Unable to load script from assets 'index.android.bundle'. Make sure...

Esse erro geralmente acontece porque o sistema não conseguiu criar o bundle inicial que contém todo o código Javascript da aplicação.

Para resolver comece criando uma pasta `assets` dentro da pasta `android/app/src/main`.

Logo após, execute o comando:

```sh
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

Agora, feche as abas do terminal e rode `react-native run-android` novamente.

## react-native run-android: FAILURE: Build failed with an exception.

Esse erro pode acontecer por muitos motivos, mas na maioria das vezes é algum cache que precisa ser deletado.

Para resolver execute na pasta do seu projeto:

```sh
cd android && gradlew clean cd .. && react-native run-android
```

# iOS

Lista de erros comuns enfrentados no iOS:

## :CFBundleIdentifier does not exists

Esse erro geralmente acontece pois o React Native não conseguiu configurar as dependências e bibliotecas de terceiros dentro do iOS.

Para resolver acesse a pasta `node_modules/react-native/scripts` e execute:

```sh
./ios-install-third-party.sh
```

Assim que finalizar, acesse a pasta `third-party/glog-x-x-x`, preencha `x-x-x` com a versão instalada (você pode utilizar o TAB para completar digitando `glog-` e clicando TAB). Dentro dessa pasta execute:

```sh
../../ios-configure-glog.sh
```

Depois disso, volte à pasta do seu projeto e rode `react-native run-ios` (Pode ser necessário rodar duas vezes).

# iOS/Android

## The development server returned response error code: 500

Geralmente esse erro acontece quando você tenta importar um arquivo JS que não possui `export default` ou não possui nenhum componente dentro dele.

Primeiramente cheque todos arquivos e importações recentes que você fez para garantir que todos possuem import/exports e seus devidos componentes.

Caso isso não resolva, feche a janela do terminal `Metro Bundler` que abre automaticamente com o `run-ios/run-android` e na pasta do seu projeto execute:

```sh
react-native start --reset-cache
```

Esse comando irá limpar o cache do React Native provavelmente resolvendo o erro.

# Genymotion

## Your CPU is incompatible with virtualization technologies

Segundo o erro, sua CPU não permite virtualização.

Para tentar resolver, você pode acessar a BIOS da sua máquina e procurar por alguma opção com o nome VT-x ou Virtualizartion e alterar de "disabled" para "enabled".

Caso isso não resolva, você provavelmente terá que utilizar outro emulador, como o [Nox](https://pt.bignox.com) e configurar o React Native para conseguir executar dentro dele, [veja aqui](https://stackoverflow.com/questions/46235080/nox-emulator-with-react-native).
