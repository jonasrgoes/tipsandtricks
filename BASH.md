# :+1: BASH TIPS AND TRICKS :+1:

### PATTERNS
```
[:alnum:], [:alpha:], [:cntrl:], [:digit:], [:graph:], [:lower:], [:print:], [:punct:], [:space:], [:upper:], [:xdigit:]
```

### TRIM EM BASH 
`awk '{$1=$1};1'`

### STRING LENGTH
`echo "--- What about this line? ---" | awk '{print length}'`

### REMOVER COMENTÁRIOS HTML
`sed -e :a -re 's/<!--.*?-->//g;/<!--/N;//ba'`

### VALOR PADRÃO PARA VARIÁVEIS
```
comando param1 param2
${1:=20} Se não informado o primeiro parâmetro do comando (param1) então atribuirá o valor 20.
${VARIAVEL:=10} Se a variável não tiver valor atribuído à ela, então retornará o valor 10.
```

### CAPTURAR EMAILS DE UM ARQUIVO TXT
`grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b"`

### PROCURAR ARQUIVOS E DIRETORIOS COM MAIS DE 1G DE TAMANHO NO DIR ATUAL
`du -cha . | sed -En '/^([0-9]+,[0-9]+G)/p'`

### TO LOWER
```
tr '[:upper:]' '[:lower:]'
awk '{print tolower($0)}'
perl -ne 'print lc'
sed -e 's/\(.*\)/\L\1/'
```

### TO UPPER
`tr '[:lower:]' '[:upper:]'`

### CAPITALIZE
```
TESTE='PERL JAVA PHP' && TESTE=`echo ${TESTE} | tr '[:upper:]' '[:lower:]'` && echo ${TESTE^}
TESTE='PERL JAVA PHP' && TESTE=`echo ${TESTE} | tr '[:upper:]' '[:lower:]'` && echo ${TESTE^^[p,j]}
```

### CAPITALIZE ALL WORDS
`echo 'PERL JAVA PHP' | sed -e 's/\(.*\)/\L\1/' | sed -r 's/\w+/\u&/g'`

### REMOVER ACENTOS
`sed 'y/áÁàÀãÃâÂéÉêÊíÍóÓõÕôÔúÚçÇ/aAaAaAaAeEeEiIoOoOoOuUcC/'`

### REMOVER EXTENSÃO DO NOME DO ARQUIVO
`${FILENAME%.txt}`

### CORES

`RED='\033[0;31m'`
`NC='\033[0m'`

### TUDO EM 1 LINHA
`paste -sd' '`

### ESPAÇOS DUPLOS REMOVER
`sed 's/  */ /g'`

### ADICIONAR ELEMENTO EM UM ARRAY
```
ARRAY=()
ARRAY+=('ELEMENTO1')
ARRAY+=('ELEMENTO2')
```

### IMPRIMIR ARRAY 1 ELEMENTO POR LINHA
`printf "%s\n" "${ARRAY[@]}"`

### QUEBRA DE LINHA DO WINDOWS
`sed -i 's/$/^M/' ${TXT_RESULT}`

### CONTAR AS LINHAS DE UM CÓDIGO-FONTE
`find src public -type f | xargs wc -l | awk '{print $1}' | paste -sd+ - | bc`

### CRIAR UM ARQUIVO COM 10MB NO MAC OS X
`dd if=/dev/zero of=10MB.file bs=1m count=10`

### IDENTIFICANDO NÚMEROS REPETIDOS
##### POR EXEMPLO NÃO ACEITA CPF: 444.444.444-44 
`cpf.match(/^(\d)\1+$/g)`

### REMOVENDO ARQUIVOS COM EXPRESSÃO REGULAR
`find ~ -regextype posix-extended -regex '.*core\.([0-9])+$' -delete`

### LIST OF DIRS WITH ABSOLUTE PATHS - ONE IN EACH ROW
`ls -d -1 /var/spool/mail/vhosts/example.com/*/.Junk `

## SERVIÇOS `/usr/lib/systemd/system/`

```
systemctl daemon-reload

systemctl list-unit-files --state=enabled
systemctl list-unit-files --type service --state enabled,generated

systemctl list-units --type=service --state=running
systemctl list-units --type=service --state=active
```
