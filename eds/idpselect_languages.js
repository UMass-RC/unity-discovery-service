/** @class IdP Selector UI */
function IdPSelectLanguages() {
  //
  // Globalization stuff
  //
  this.langBundles = {
    en: {
      "fatal.divMissing":
        '<div> specified  as "insertAtDiv" could not be located in the HTML',
      "fatal.noXMLHttpRequest":
        "Browser does not support XMLHttpRequest, unable to load IdP selection data",
      "fatal.wrongProtocol":
        'Policy supplied to DS was not "urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single"',
      "fatal.wrongEntityId":
        "entityId supplied by SP did not match configuration",
      "fatal.noData": "Metadata download returned no data",
      "fatal.loadFailed": "Failed to download metadata from ",
      "fatal.noparms":
        "No parameters to discovery session and no defaultReturn parameter configured",
      "fatal.noReturnURL": "No URL return parameter provided",
      "fatal.badProtocol":
        "Return parameter must start with https:// or http://",
      "fatal.badReturnString": "Return parameter is not whitelisted",
      "idpPreferred.label": "Use a suggested selection:",
      "idpEntry.label": "Or enter your organization's name",
      "idpEntry.NoPreferred.label": "Enter your organization's name",
      "idpList.label": "Or select your organization from the list below",
      "idpList.NoPreferred.label":
        "Select your organization from the list below",
      "idpList.defaultOptionLabel": "Please select your organization...",
      "idpList.showList": "Pick from a list instead",
      "idpList.showSearch": "Search instead",
      "submitButton.label": "Continue",
      helpText: "Help",
      defaultLogoAlt: "DefaultLogo",
      "autoFollow.message": "Always follows this selection",
      "autoFollow.never": "Never",
      "autoFollow.time0": "One day",
      "autoFollow.time1": "3 months",
      "autoFollow.time2": "9 months",
      "search.others": "Or Search for Others Below",
      "org.click": "Select an Organization to Sign In",
    },
    de: {
      "fatal.divMissing": "Das notwendige Div Element fehlt",
      "fatal.noXMLHttpRequest":
        "Ihr Webbrowser unterst\u00fctzt keine XMLHttpRequests, IdP-Auswahl kann nicht geladen werden",
      "fatal.wrongProtocol":
        'DS bekam eine andere Policy als "urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single"',
      "fatal.wrongEntityId": "Die entityId ist nicht korrekt",
      "fatal.noData": "Heruntergeladene Metadata waren leer",
      "fatal.loadFailed": "Metadaten konnten nicht heruntergeladen werden: ",
      "fatal.noparms":
        "Parameter f\u00fcr das Discovery Service oder 'defaultReturn' fehlen",
      "fatal.noReturnURL": "URL return Parmeter fehlt",
      "fatal.badProtocol":
        "return Request muss mit https:// oder http:// beginnen",
      "fatal.badReturnString":
        "Return Parameter ist nicht auf Positivliste enthalten",
      "idpPreferred.label": "Vorherige Auswahl:",
      "idpEntry.label": "Oder geben Sie den Namen (oder Teile davon) an:",
      "idpEntry.NoPreferred.label":
        "Namen (oder Teile davon) der Institution angeben:",
      "idpList.label": "Oder w\u00e4hlen Sie Ihre Institution aus einer Liste:",
      "idpList.NoPreferred.label":
        "Institution aus folgender Liste w\u00e4hlen:",
      "idpList.defaultOptionLabel": "W\u00e4hlen Sie Ihre Institution aus...",
      "idpList.showList": "Institution aus einer Liste w\u00e4hlen",
      "idpList.showSearch": "Institution selbst angeben",
      "submitButton.label": "OK",
      helpText: "Hilfe",
      defaultLogoAlt: "Standard logo",
      "autoFollow.message":
        "Auswahl merken und diesen Dialog nicht mehr anzeigen",
      "autoFollow.never": "Nicht merken",
      "autoFollow.time0": "Nur f\u00fcr Heute",
      "autoFollow.time1": "Drei Monate lang",
      "autoFollow.time2": "Neun Monate lang",
    },
    ja: {
      "fatal.divMissing":
        '"insertAtDiv" の ID を持つ <div> が HTML 中に存在しません',
      "fatal.noXMLHttpRequest":
        "ブラウザが XMLHttpRequest をサポートしていないので IdP 情報を取得できません",
      "fatal.wrongProtocol":
        'DSへ渡された Policy パラメータが "urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single" ではありません',
      "fatal.wrongEntityId": "SP から渡された entityId が設定値と異なります",
      "fatal.noData": "メタデータが空です",
      "fatal.loadFailed":
        "次の URL からメタデータをダウンロードできませんでした: ",
      "fatal.noparms":
        "DSにパラメータが渡されておらず defaultReturn も設定されていません",
      "fatal.noReturnURL": "戻り URL が指定されていません",
      "fatal.badProtocol":
        "戻り URL は https:// か http:// で始まらなければなりません",
      "idpPreferred.label": "選択候補の IdP:",
      "idpEntry.label": "もしくはあなたの所属機関名を入力してください",
      "idpEntry.NoPreferred.label": "あなたの所属機関名を入力してください",
      "idpList.label": "もしくはあなたの所属機関を選択してください",
      "idpList.NoPreferred.label": "あなたの所属機関を一覧から選択してください",
      "idpList.defaultOptionLabel": "所属機関を選択してください...",
      "idpList.showList": "一覧から選択する",
      "idpList.showSearch": "機関名を入力する",
      "submitButton.label": "選択",
      "autoFollow.message": "次の期間選択した機関に自動的に遷移する:",
      "autoFollow.never": "自動遷移しない",
      "autoFollow.time0": "1日",
      "autoFollow.time1": "3か月",
      "autoFollow.time2": "9か月",
      "fatal.badReturnString": "戻り URL が不正です",
      helpText: "ヘルプ",
      defaultLogoAlt: "ロゴ未設定",
    },
    "pt-br": {
      "fatal.divMissing":
        'A tag <div> com "insertAtDiv" não foi encontrada no arquivo HTML',
      "fatal.noXMLHttpRequest":
        'Seu navegador não suporta "XMLHttpRequest", impossível de carregador os dados do IdP selecionado',
      "fatal.wrongProtocol":
        'A política "Policy" fornecida para o DS não foi "urn:oasis:names:tc:SAML:profiles:SSO:idpdiscovery-protocol:single"',
      "fatal.wrongEntityId":
        "entityId oferecido pelo SP não confere com o da configuração",
      "fatal.noData": "O arquivo de metadados não retornou nada;",
      "fatal.loadFailed": "Falhou ao realizar download do metadado de ",
      "fatal.noparms":
        'Sem parâmetros para sessão de descoberta e sem parâmetro "defaultReturn" configurado',
      "fatal.noReturnURL":
        "Não foi definida um endereço (URL) de retorno no parâmetro",
      "fatal.badProtocol":
        "Retorno do endereço requisitado deve começar com https:// ou http://",
      "idpPreferred.label": "Use estas Instituições sugeridas: ",
      "idpEntry.label": "Ou informe o nome da sua Instituição",
      "idpEntry.NoPreferred.label": "Informe o nome da sua Instituição",
      "idpList.label": "Ou selecione sua Instituição através da lista abaixo",
      "idpList.NoPreferred.label":
        "Selecione sua Instituição através da lista abaixo",
      "idpList.defaultOptionLabel": "Por favor, selecione sua Instituição: ",
      "idpList.showList": "Permitir que eu escolha um IdP através de uma lista",
      "idpList.showSearch": "Permitir que eu especifique o IdP",
      "submitButton.label": "Continuar ",
      helpText: "Ajuda",
      defaultLogoAlt: "Logo padrão",
    },
  };
}
