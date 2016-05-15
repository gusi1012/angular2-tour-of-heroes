import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS} from '@angular/router-deprecated';

import { AppComponent } from './app.component';

// enableProdMode();

bootstrap(AppComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
    ROUTER_PROVIDERS


