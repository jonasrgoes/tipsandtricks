# CENTOS TIPS AND TRICKS

### CONFIGURAÇÃO DO UTF-8 NO CENTOS 7
```
vim ~/.bashrc
export TERM=xterm-256color
localedef -c -f UTF-8 -i pt_BR pt_BR.UTF-8
export LC_ALL=pt_BR.UTF-8

vim /etc/locale.conf
LANG="pt_BR.UTF-8"

vim /etc/environment
LANG=pt_BR.utf-8
LC_ALL=pt_BR.utf-8

vim /etc/profile.d/lang.sh
export LANG="pt_BR.utf8"
export LANGUAGE="pt_BR.utf8"
export LC_ALL="pt_BR.utf8"
```

### USAR VIM EM UTF-8
```
Arquivo: vim-utf8
#!/bin/bash
vim -c "set encoding=utf8" -c "set termencoding=iso-8859-1" "$@"
sudo cp bin/vim-utf8 /etc/skel/bin/
```

### TIMEZONE
```
Arquivo: /etc/profile.d/sh.local
TZ=America/Sao_Paulo
LANG="pt_BR.UTF-8"
```

### SECURITY

#### FAIL2BAN

```
firewall-cmd --direct --get-all-rules
ipset list fail2ban-sshd
```

#### CHECK FAIL2BAN STATUS
```
fail2ban-client status sshd
fail2ban-client status apache-common
fail2ban-client status dovecot
fail2ban-client status postfix-sasl

route -n
iptables -L -n
iptables -L INPUT -v -n
zgrep 'Ban:' /var/log/fail2ban.log*
```

#### FIREWALLD AVANÇADO

[Firewalld](https://github.com/taw00/howto/blob/master/howto-configure-firewalld.md)
