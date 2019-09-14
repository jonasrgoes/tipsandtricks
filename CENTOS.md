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
