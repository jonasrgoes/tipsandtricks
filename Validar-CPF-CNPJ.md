# FUNÇÕES EM JAVASCRIPT PARA VALIDAR CPF E CNPJ

> Não aceita números repetidos ex: 444.444.444-44

## VALIDAR CPF
```
function CPF(number) {

    let cpf = number.replace(/\D/g, '');

    let sum;
    let rest;

    sum = 0;

    // repeated numbers
    if (cpf.match(/^(\d)\1+$/g)) return false;

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) return false;
    return true;
}
```

## VALIDAR CNPJ
```
function CNPJ(s) {
    let cnpj = s.replace(/[^\d]+/g, '')

    // Valida a quantidade de caracteres
    if (cnpj.length !== 14)
        return false

    // Elimina inválidos com todos os caracteres iguais
    if (/^(\d)\1+$/.test(cnpj))
        return false

    // Cáculo de validação
    let t = cnpj.length - 2,
        d = cnpj.substring(t),
        d1 = parseInt(d.charAt(0)),
        d2 = parseInt(d.charAt(1)),
        calc = x => {
            let n = cnpj.substring(0, x),
                y = x - 7,
                s = 0,
                r = 0

            for (let i = x; i >= 1; i--) {
                s += n.charAt(x - i) * y--;
                if (y < 2)
                    y = 9
            }

            r = 11 - s % 11
            return r > 9 ? 0 : r
        }

    return calc(t) === d1 && calc(t + 1) === d2
}
```
