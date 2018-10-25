import { Routes} from '@angular/router';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DefaultComponent } from './default/default.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'default',
        pathMatch: 'full',
    },
  {
      path: '',
      children: [
          {
              path: 'add',
              component: AddComponent,
              data: {
                  title: 'Add Test'
              }
          },
          {
              path: 'edit',
              component: EditComponent,
              data: {
                  title: 'Edit Test'
              }
          },
          {
              path: 'default',
              component:DefaultComponent,
              data: {
                  title: 'Tests'
              }
          }
      ]
  }
];

