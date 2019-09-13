# DOCKER TIPS AND TRICKS

### REMOVER TODOS OS CONTAINERS
`docker ps -a | awk '{print $1}' | sed 1d | paste -s -d' ' -`

### EXECUTAR UM CONTAINER COMO DAEMON
`docker run -dit -v LOCAL_DIR:CONTAINER_DIR IMAGEM`

### INICIAR O CONTAINER
`docker start CONTAINERID`

### PARAR O CONTAINER
`docker stop CONTAINERID`

### DOWNLOAD OU ATUALIZAÇÃO DA IMAGEM
docker image pull docker.io/jonasrgoes/IMAGEM

### EXECUTAR A IMAGEM (GERAR UM CONTAINER)
`docker run -dit -v LOCAL_DIR:CONTAINER_DIR IMAGEM`

### VER CONTAINERS ATIVOS (EXECUTANDO)
`docker ps`

### VER CONTAINERS INATIVOS (DORMINDO)
`docker ps -a`

### INICIAR UM CONTAINER
`docker start CONTAINERID`
> (peque o CONTAINERID com o comando docker ps -a acima)

### ENTRAR NO CONTAINER
`docker exec -it CONTAINERID bash`

### SAIR DO CONTAINER
`exit`

### PARAR O CONTAINER  (MESMO QUE DESLIGAR O LINUX)
`docker stop CONTAINERID`

### VER SE O CONTAINER PAROU
`docker ps`

### QUANDO QUISER INICIAR O CONTAINER DENOVO
```
docker start CONTAINERID 
docker exec -it CONTAINERID bash
exit
docker stop CONTAINERID
```

### SALVAR TODAS AS ALTERAÇÕES FEITAS NO CONTAINER
`docker commit CONTAINERID`

### ENVIAR O CONTAINER PARA O REPOSITÓRIO
`docker push CONTAINERID`


################# LIMPEZA DE CONTAINERS #################
### Tem uma lista grande de containers inúteis?
```
docker ps -a
docker rm CONTAINERID
```

### REMOVER TODOS OS CONTAINERS
`docker ps -a | awk '{print $1}' | sed 1d | paste -s -d' ' -`

### Tem uma lista grande de imagens inúteis?
```
docker images
docker rmi CONTAINERID
```
> se não conseguir remover a imagem porque ela tem imagens filhas, tenta com outras primeiro.
