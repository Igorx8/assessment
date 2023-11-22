### Passo a passo para rodar a aplicação

## Passo 1
Instale as dependências necessárias
``` npm i ```
ou
``` yarn ```

## Passo 2
O docker é necessário para rodar o banco de dados, então instale o docker e rode o seguinte comando:
``` docker-compose up -d ```

## Passo 3
Existem dois servidores nesse sistema, um que recebe e salva os dados, e outro é uma simulação que emite informações, por isso teremos que abrir dois terminais, pois queremos em algum momento parar a execução do servidor que envia os dados

``` npm start``` 
ou
``` yarn start ```

para o servidor que recebe os dados, e para o servidor que emite os dados

``` npm run start:simulator```
ou
``` yarn start:simulator ```