/* 
ACESSAR EM: https://script.google.com/home/my
- Em `Recursos > Bibliotecas` adicione a biblioteca **Firestore**:
    - `1VUSl4b1r1eoNcRWotZM3e87ygkxvXltOgyDZhixqncz9lQ3MjfT1iKFw`
    - `identificador: firestore`
- Em `Recursos > Projeto do Cloud Plataform` adicione o Nº do Projeto: 
    `783093011031`
*/

var PROJECT_ID = 'advance-topic-??????';
var PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\n\n-----END PRIVATE KEY-----\n';
var CLIENT_EMAIL = '[XXXXXXXXX]@advance-topic-[XXXXXX].iam.gserviceaccount.com';

function run() {
  ei.firebaseToSheets();
}

var ei = {
  
  db: firestore.getFirestore(CLIENT_EMAIL, PRIVATE_KEY, PROJECT_ID),
  prop: PropertiesService.getScriptProperties(),

  firebaseToSheets: function () {
    Logger.log('firebaseToSheets');

    var users = this.getUsers();
      
    users.forEach(function(uid) {
      var user = this.getUser(uid);
      var ss = this.getSreadSheet(user.fields.email);
      var userSheet = this.getUserSheet(ss, user.fields.email);
      var publicas = this.getPublicas(uid);
      var privadas = this.getPrivadas(uid);
      
      userSheet.setFrozenColumns(1);
      userSheet.getRange('a1').setValue('Nome:');
      userSheet.getRange('b1').setValue(user.fields.nome);
      userSheet.getRange('a2').setValue('Email:');
      userSheet.getRange('b2').setValue(user.fields.email);
      userSheet.getRange('a3').setValue('CPF:');
      userSheet.getRange('b3').setValue(user.fields.cpf);
      userSheet.getRange('a4').setValue('EI! Públicas:');
      userSheet.getRange('b4').setValue(publicas.length);
      userSheet.getRange('a5').setValue('EI! Privadas:');
      userSheet.getRange('b5').setValue(privadas.length);
      userSheet.autoResizeColumns(1,2);

      publicas.forEach(function(form_id) {
        
        var publica = this.getPublica(uid, form_id);
        var publicaSheet = this.getSheet(ss, publica.fields.nome);
        publicaSheet.setFrozenColumns(1);

        var respostas = this.getRepostas(uid, 'publica', form_id);
        
        respostas.forEach(function(resp_id) {
          var resposta = this.getReposta(uid, 'publica', form_id, resp_id);
          switch (resp_id) {
            case 'questao_1':
              publicaSheet.getRange('a1').setValue('Nome:');
              publicaSheet.getRange('b1').setValue(resposta.fields.nome);
              publicaSheet.getRange('a2').setValue('CNPJ:');
              publicaSheet.getRange('b2').setValue(resposta.fields.cnpj);
              break;
            case 'questao_2':
              publicaSheet.getRange('a3').setValue('Autoridade Nome:');
              publicaSheet.getRange('b3').setValue(resposta.fields.auto_nome);
              publicaSheet.getRange('a4').setValue('Autoridade Cargo:');
              publicaSheet.getRange('b4').setValue(resposta.fields.auto_cargo);
              publicaSheet.getRange('a5').setValue('Outro Cargo:');
              publicaSheet.getRange('b5').setValue(resposta.fields.outros);
              publicaSheet.getRange('a6').setValue('Autoridade Celular:');
              publicaSheet.getRange('b6').setValue(resposta.fields.auto_celular);
              publicaSheet.getRange('a7').setValue('Autoridade Email:');
              publicaSheet.getRange('b7').setValue(resposta.fields.auto_email);
              publicaSheet.getRange('a8').setValue('Consultoria Nome:');
              publicaSheet.getRange('b8').setValue(resposta.fields.cons_nome);
              publicaSheet.getRange('a9').setValue('Consultoria Email:');
              publicaSheet.getRange('b9').setValue(resposta.fields.cons_email);
              publicaSheet.getRange('a10').setValue('Consultoria Celular:');
              publicaSheet.getRange('b10').setValue(resposta.fields.cons_celular);
              publicaSheet.getRange('a11').setValue('Consultoria Razão Social:');
              publicaSheet.getRange('b11').setValue(resposta.fields.cons_rs);
              publicaSheet.getRange('a12').setValue('Consultoria CNPJ:');
              publicaSheet.getRange('b12').setValue(resposta.fields.cons_cnpj);
              publicaSheet.getRange('a13').setValue('Observações:');
              publicaSheet.getRange('b13').setValue(resposta.fields.obs_txt);
              break;
            case 'questao_3':
              publicaSheet.getRange('a14').setValue('Situação:');
              publicaSheet.getRange('b14').setValue(resposta.fields.situacao);
              publicaSheet.getRange('a15').setValue('Extrato CAUC:');
              publicaSheet.getRange('b15').setValue('=HYPERLINK("'+resposta.fields.cauc_url+'";'+'"Acessar Arquivo"'+')');
              publicaSheet.getRange('a16').setValue('Declarações:');
              publicaSheet.getRange('b16').setValue(typeof resposta.fields.declaracoes == 'object' ? Object.keys(resposta.fields.declaracoes).join(', ') : '');
              publicaSheet.getRange('a17').setValue('Observações:');
              publicaSheet.getRange('b17').setValue(resposta.fields.observacoes);
              break;
            case 'questao_4':
              publicaSheet.getRange('a18').setValue('Categoria:');
              publicaSheet.getRange('b18').setValue(resposta.fields.categoria);
              break;
            case 'questao_5':
              publicaSheet.getRange('a19').setValue('Destino:');
              publicaSheet.getRange('b19').setValue(resposta.fields.destino);
              publicaSheet.getRange('a20').setValue('Aplicação:');
              publicaSheet.getRange('b20').setValue(resposta.fields.apl_txt);
              publicaSheet.getRange('a21').setValue('Justificativa:');
              publicaSheet.getRange('b21').setValue(resposta.fields.jus_txt);
              publicaSheet.getRange('a22').setValue('Valor:');
              publicaSheet.getRange('b22').setValue(resposta.fields.valor).setNumberFormat("R$ #,##0.00");
              publicaSheet.getRange('a23').setValue('Capacidades:');
              publicaSheet.getRange('b23').setValue(typeof resposta.fields.capacidades == 'object' ? Object.keys(resposta.fields.capacidades).join(', ') : '');
              publicaSheet.getRange('a24').setValue('Observações:');
              publicaSheet.getRange('b24').setValue(resposta.fields.obs_txt);
              publicaSheet.getRange('a25').setValue('Apresentação:');
              publicaSheet.getRange('b25').setValue('=HYPERLINK("'+resposta.fields.doc_url+'";'+'"Acessar Arquivo"'+')');
              break;
            case 'questao_6':
              publicaSheet.getRange('a26').setValue('Governo Digital:');
              publicaSheet.getRange('b26').setValue('=HYPERLINK("'+resposta.fields.govdigital_url+'";'+'"Acessar Arquivo"'+')');
              publicaSheet.getRange('a27').setValue('Escolas:');
              publicaSheet.getRange('b27').setValue('=HYPERLINK("'+resposta.fields.escolas_url+'";'+'"Acessar Arquivo"'+')');
              publicaSheet.getRange('a28').setValue('Um por Todos:');
              publicaSheet.getRange('b28').setValue('=HYPERLINK("'+resposta.fields.umportodos_url+'";'+'"Acessar Arquivo"'+')');
              publicaSheet.getRange('a29').setValue('Municípios:');
              publicaSheet.getRange('b29').setValue('=HYPERLINK("'+resposta.fields.municipios_url+'";'+'"Acessar Arquivo"'+')');
              break;
            case 'questao_7':
              publicaSheet.getRange('a30').setValue('Declarações:');
              publicaSheet.getRange('b30').setValue(resposta.fields.declaracoes);
              break;
          }
          publicaSheet.autoResizeColumn(1);
          publicaSheet.setColumnWidth(2,200);
        }.bind(this));
        
      }.bind(this));
      
      privadas.forEach(function(form_id) {
        
        var privada = this.getPrivada(uid, form_id);
        var privadaSheet = this.getSheet(ss, privada.fields.nome);
        privadaSheet.setFrozenColumns(1);

        var respostas = this.getRepostas(uid, 'privada', form_id);
        
        respostas.forEach(function(resp_id) {
          var resposta = this.getReposta(uid, 'privada', form_id, resp_id);
          switch (resp_id) {
            case 'questao_1':
              privadaSheet.getRange('a1').setValue('Entidade:');
              privadaSheet.getRange('b1').setValue(resposta.fields.entidade);
              privadaSheet.getRange('a2').setValue('Nome:');
              privadaSheet.getRange('b2').setValue(resposta.fields.nome);
              privadaSheet.getRange('a3').setValue('CNPJ:');
              privadaSheet.getRange('b3').setValue(resposta.fields.cnpj);
              privadaSheet.getRange('a4').setValue('Cidade:');
              privadaSheet.getRange('b4').setValue(resposta.fields.cidade);
              privadaSheet.getRange('a5').setValue('CNES:');
              privadaSheet.getRange('b5').setValue(resposta.fields.cnes);
              privadaSheet.getRange('a6').setValue('Estatuto:');
              privadaSheet.getRange('b6').setValue('=HYPERLINK("'+resposta.fields.estatuto_url+'";'+'"Acessar Arquivo"'+')');
              break;
            case 'questao_2':
              privadaSheet.getRange('a7').setValue('Autoridade Nome:');
              privadaSheet.getRange('b7').setValue(resposta.fields.nome);
              privadaSheet.getRange('a8').setValue('Autoridade Cargo:');
              privadaSheet.getRange('b8').setValue(resposta.fields.cargo);
              privadaSheet.getRange('a9').setValue('Autoridade Celular:');
              privadaSheet.getRange('b9').setValue(resposta.fields.celular);
              privadaSheet.getRange('a10').setValue('Gestor Nome:');
              privadaSheet.getRange('b10').setValue(resposta.fields.conv_nome);
              privadaSheet.getRange('a11').setValue('Gestor Cargo:');
              privadaSheet.getRange('b11').setValue(resposta.fields.conv_cargo);
              privadaSheet.getRange('a12').setValue('Gestor CPF:');
              privadaSheet.getRange('b12').setValue(resposta.fields.conv_cpf);
              privadaSheet.getRange('a13').setValue('Gestor Celular:');
              privadaSheet.getRange('b13').setValue(resposta.fields.conv_celular);
              privadaSheet.getRange('a14').setValue('Gestor Email:');
              privadaSheet.getRange('b14').setValue(resposta.fields.conv_email);
              privadaSheet.getRange('a15').setValue('Observações:');
              privadaSheet.getRange('b15').setValue(resposta.fields.obs_txt);
              break;
            case 'questao_3':
              privadaSheet.getRange('a16').setValue('Capacidades:');
              privadaSheet.getRange('b16').setValue(typeof resposta.fields.capacidades == 'object' ? Object.keys(resposta.fields.capacidades).join(', ') : '');
              break;
            case 'questao_4':
              privadaSheet.getRange('a17').setValue('Categoria:');
              privadaSheet.getRange('b17').setValue(resposta.fields.categoria);
              privadaSheet.getRange('a18').setValue('Destino:');
              privadaSheet.getRange('b18').setValue(resposta.fields.destino);
              break;
            case 'questao_5':
              privadaSheet.getRange('a19').setValue('Aplicação:');
              privadaSheet.getRange('b19').setValue(resposta.fields.apl_txt);
              privadaSheet.getRange('a20').setValue('Justificativa:');
              privadaSheet.getRange('b20').setValue(resposta.fields.jus_txt);
              privadaSheet.getRange('a21').setValue('Valor:');
              privadaSheet.getRange('b21').setValue(resposta.fields.valor).setNumberFormat("R$ #,##0.00");
              privadaSheet.getRange('a22').setValue('Capacidades:');
              privadaSheet.getRange('b22').setValue(typeof resposta.fields.capacidades == 'object' ? Object.keys(resposta.fields.capacidades).join(', ') : '');
              privadaSheet.getRange('a23').setValue('Observações:');
              privadaSheet.getRange('b23').setValue(resposta.fields.obs_txt);
              privadaSheet.getRange('a24').setValue('Apresentação:');
              privadaSheet.getRange('b24').setValue('=HYPERLINK("'+resposta.fields.doc_url+'";'+'"Acessar Arquivo"'+')');
              break;
            case 'questao_6':
              privadaSheet.getRange('a25').setValue('Entidade Transparente:');
              privadaSheet.getRange('b25').setValue('=HYPERLINK("'+resposta.fields.entidade_url+'";'+'"Acessar Arquivo"'+')');
              privadaSheet.getRange('a26').setValue('NF Paulista:');
              privadaSheet.getRange('b26').setValue('=HYPERLINK("'+resposta.fields.nfpaulista_url+'";'+'"Acessar Arquivo"'+')');
              privadaSheet.getRange('a27').setValue('Um por Todos:');
              privadaSheet.getRange('b27').setValue('=HYPERLINK("'+resposta.fields.umportodos_url+'";'+'"Acessar Arquivo"'+')');
              privadaSheet.getRange('a28').setValue('Municípios:');
              privadaSheet.getRange('b28').setValue('=HYPERLINK("'+resposta.fields.municipios_url+'";'+'"Acessar Arquivo"'+')');
              break;
            case 'questao_7':
              privadaSheet.getRange('a29').setValue('Declarações:');
              privadaSheet.getRange('b29').setValue(resposta.fields.declaracoes);
              break;
          }
          privadaSheet.autoResizeColumn(1);
          privadaSheet.setColumnWidth(2,200);
        }.bind(this));
        
      }.bind(this));
      
    }.bind(this));
    
  },

  // retorna todos os UID's
  getUsers: function () {
    Logger.log('getUsers');
    return this.db.getDocumentIds("users");
    //return ['okMi6eeznhWCCcv5PHlffB01SW92'];
  },

  getUser: function (uid) {
      return this.db.getDocument("users/" + uid);
  },

  getPublicas: function (uid) {
      return this.db.getDocumentIds('users/' + uid + '/publica');
  },
  
  getPrivadas: function (uid) {
      return this.db.getDocumentIds('users/' + uid + '/privada');
  },
  
  getPublica: function (uid, form_id) {
      return this.db.getDocument('users/' + uid + '/publica/' + form_id);
  },
  
  getPrivada: function (uid, form_id) {
      return this.db.getDocument('users/' + uid + '/privada/' + form_id);
  },
  
  getRepostas: function (uid, tipo, form_id) {
      return this.db.getDocumentIds('users/' + uid + '/' + tipo + '/' + form_id + '/respostas');
  },
  
  getReposta: function (uid, tipo, form_id, resp_id) {
      return this.db.getDocument('users/' + uid + '/' + tipo + '/' + form_id + '/respostas/' + resp_id);
  },
  
  getSreadSheet: function (nome) {
    
    var ss = null;
    var sheet = null;
    var id = null;
  
    var ssId = this.prop.getProperty(nome);
    
    try {
      if (ssId !== null) ss = SpreadsheetApp.openById(ssId);
    } catch (e) {
      Logger.log(e);
    }
    
    if ( ss === null ) {
      ss = SpreadsheetApp.create(nome);
      id = ss.getId();
      this.prop.setProperty(nome, id);
      return ss;
    }
    
    return ss;
    
  },
  
  getUserSheet: function (ss, email) {
    
    var userSheet = ss.getSheets()[0];
    userSheet.setName(email);
    
    userSheet.activate();
  
    return userSheet;
    
  },
  
  getSheet: function (ss, nome) {
    
    var sheet = ss.getSheetByName(nome);
  
    if ( sheet === null ) {
      sheet = ss.insertSheet();
      sheet.setName(nome);
    }
    
    sheet.activate();
  
    return sheet;
  },
  
  isEmptySheet: function (sheet) {
    return sheet.getDataRange().getValues().join("") === "";
  }

};
