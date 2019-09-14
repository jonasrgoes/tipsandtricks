# GIT TIPS AND TRICKS

### GIT CONFIG
Arquivo: `.gitconfig`
```
[user]
email = jonasrgoes@gmail.com
name = Jonas Roberto de Goes Filho
```

### ARMAZENAR/SALVAR A SENHA NO GIT
`git config credential.helper store`

### CONECTAR A UM REPOSITORIO REMOTO
`git remote add origin https://github.com/jonasrgoes/REPO.GIT`

### ENVIAR AS ALTERAÇÕES PARA O REPOSITÓRIO REMOTO CONECTADO
`git push origin master`

### COMMIT E ENVIO PARA O REPOSITÓRIO REMOTO
`git commit -a -m "updates" && git push origin master`
