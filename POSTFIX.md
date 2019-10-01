# POSTFIX

## SPAM

```
journalctl | grep action=greylist
journalctl | grep spamd
```

#### ARQUIVO `/etc/mail/spamassassin/local.cf`

```
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
