# REDUX

```
STATE => VIEW => ACTIONS => APIS <= MIDDLEWARES => DISPATCHER => REDUCER => STATE
```

`Middleware` pode obter o conteúdo que a `Action` envia e alterar este conteúdo e informar ao `Reducer`.

O `Reducer` vai ser o único local onde poderemos alterar o estado da `App`.
