# REDUX

```
STATE => VIEW => ACTIONS => APIS <= MIDDLEWARES => DISPATCHER => REDUCER => STATE
```

`Middleware` pode obter o conteúdo que a `Action` envia e alterar este conteúdo e informar ao `Reducer`.

O `Reducer` vai ser o único local onde poderemos alterar o estado da `App`.

O `Reducer` pode ouvir várias `Actions`.

Cada `Reducer` vai estar conectado com uma funcionalidade da `App`.

Um `Reducer` gera um novo estado da `App`, só faz isso, altera estados.

### DEPENDENCIES

```
"dependencies": {
  "react": "^16.9.0",
  "react-dom": "^16.9.0",
  "react-redux": "^7.1.1",
  "react-scripts": "3.1.2",
  "redux": "^4.0.4"
},
```
