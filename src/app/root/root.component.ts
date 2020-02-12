import { Component } from '@angular/core';

import "devextreme/localization/globalize/number";
import "devextreme/localization/globalize/date";
import "devextreme/localization/globalize/currency";
import "devextreme/localization/globalize/message";

import deMessages from "devextreme/localization/messages/de.json";
import enMessages from "devextreme/localization/messages/en.json";

import supplemental from "devextreme-cldr-data/supplemental.json";
import deCldrData from "devextreme-cldr-data/de.json";
import enCldrData from "devextreme-cldr-data/en.json";

import Globalize from "globalize";
import { Router } from '@angular/router';

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
  constructor(private router: Router) {
    Globalize.load(
      supplemental, deCldrData, enCldrData
    );

    Globalize.loadMessages(deMessages);
    Globalize.loadMessages(enMessages);
    Globalize.loadMessages(customMessages);

    Globalize.locale(navigator.language);
  }

  get greeting() {
    return Globalize.formatMessage('greetingMessage', 'CZA');
  }

  switchLanguage(lang: string) {

    Globalize.locale(lang);

    let currentUrl = this.router.url;

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
