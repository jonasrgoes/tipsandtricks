# GOOGLE FIREBASE

#### Estrutura de Dados NoSQL

- `Coleção` :open_file_folder: Usuários
    - `Documento` :page_facing_up: Usuário 1
        - `Coleção` :open_file_folder: Pública
            - `Documento` :page_facing_up: Questionário 1
                - `Coleção` :open_file_folder: Respostas
                    - `Documento` :page_facing_up: Resposta da Questão 1
                    - `Documento` :page_facing_up: Resposta da Questão 2
                    - `Documento` :page_facing_up: Resposta da Questão 3
            - `Documento` :page_facing_up: Questionário 2
            - `Documento` :page_facing_up: Questionário 3
        - `Coleção` :open_file_folder: Privada
            - `Documento` :page_facing_up: Questionário 1
            - `Documento` :page_facing_up: Questionário 2
            - `Documento` :page_facing_up: Questionário 3
            
```
db.collection('usuarios').doc('email_usuario')
    .collection('publica').doc('questionario1')
        .collection('respostas').doc('questao1')
```

#### STRUCTURED QUERY
> Para integração com Google Sheets
```
{
  "select": { "fields": ["email","nome","cpf"] },
  "from": [ { "collectionId": "users" } ],
  "orderBy": [{"field": {"fieldPath": "nome"},"direction": "DESCENDING"}]
}
```
