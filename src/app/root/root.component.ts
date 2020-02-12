import { Component } from '@angular/core';

import deMessages from "devextreme/localization/messages/de.json";
import enMessages from "devextreme/localization/messages/en.json";
import { formatMessage, locale, loadMessages } from "devextreme/localization";

const customMessages = {
  de: {
    'greetingMessage': "Willkommen bei {0}"
  },
  en: {
    'greetingMessage': "Welcome on {0}"
  }
}

@Component({
  selector: 'cza-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.scss']
})
export class RootComponent {
  constructor() {
    console.debug(navigator.language);
    console.debug(deMessages);
    loadMessages(deMessages);
    loadMessages(enMessages);
    loadMessages(customMessages);
    locale(navigator.language);
  }

  get greeting() {
    return formatMessage('greetingMessage', 'CZA');
  }

  goDE(){
    locale('de-DE');
  }

  goEN(){
    locale('en-GB');
  }
}
