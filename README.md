### Passo a passo para rodar a aplicação

# Observação
O env nunca deve ser commitado, mas como é um teste, deixei ele aqui para facilitar a execução do projeto, caso seja executado em máquina local

## Passo 1
Instale as dependências necessárias
``` npm i ```
ou
``` yarn ```

## Passo 2
O docker é necessário para rodar o banco de dados, então instale o docker e rode o seguinte comando:
``` docker-compose up -d ```

Como o env está incluso no arquivo, ele cria o banco de forma automática, apenas sendo necessário executar o docker compose mesmo

## Passo 3
Existem dois servidores nesse sistema, um que recebe e salva os dados, e outro é uma simulação que emite informações, por isso teremos que abrir dois terminais, pois queremos em algum momento parar a execução do servidor que envia os dados

``` npm start``` 
ou
``` yarn start ```

para o servidor que recebe os dados

### Passo 4
Ligar o servidor que emite os dados

``` npm run start:simulation```
ou
``` yarn start:simulation ```

Por fim a aplicação está rodando, além de salvar no banco, as mensagens também são salvas na pasta de logs.