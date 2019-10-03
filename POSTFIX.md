# POSTFIX

## GREYLIST

#### ARQUIVO `/etc/postfix/postgrey_whitelist_clients.local`

```
/.*\.websitewelcome\.com$/
```

## SPAM

```
journalctl | grep action=greylist
journalctl | grep spamd

sa-learn --spam </path/to/spam/folder>
sa-learn --ham </path/to/inbox> (non-spam)
```

#### ARQUIVO `/etc/mail/spamassassin/local.cf`

```
man Mail::SpamAssassin::Conf

spamassassin --lint -D 

required_hits 5
required_score 5
report_safe 0
rewrite_header Subject [SPAM]

header LOCAL_SUBJECT            Subject =~ /\bsaúde\b/i
score LOCAL_SUBJECT             0.1

header LOCAL_UNSUBSCRIBE        List-Unsubscribe =~ /.*/i
score LOCAL_UNSUBSCRIBE         0.1
```

## POSTFIX

`postconf | grep message_size_limit`

## SERVIÇOS `/usr/lib/systemd/system/`

```
systemctl daemon-reload

systemctl list-unit-files --state=enabled
systemctl list-unit-files --type service --state enabled,generated

systemctl list-units --type=service --state=running
systemctl list-units --type=service --state=active
```

## FIREWALL

```
firewall-cmd --list-ports
firewall-cmd --list-services
```
## PYZOR RAZOR
```
firewall-cmd --permanent --add-port=2703/tcp
firewall-cmd --permanent --add-port=24441/udp

razor-admin -create
razor-admin -discover
razor-admin -register

sa-learn --sync

pyzor ping

pyzor check

pip install --upgrade pyzor

spamassassin -t -D razor2 < /usr/share/doc/spamassassin-3.4.0/sample-spam.txt
```
