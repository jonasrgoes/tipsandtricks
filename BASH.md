# BASH TIPS AND TRICKS 

### PATTERNS
````
[:alnum:], [:alpha:], [:cntrl:], [:digit:], [:graph:], [:lower:], [:print:], [:punct:], [:space:], [:upper:], [:xdigit:]
`

### TRIM EM BASH 
`awk '{$1=$1};1'`

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
#### POR EXEMPLO NÃO ACEITA CPF: 444.444.444-44 
`cpf.match(/^(\d)\1+$/g)`
