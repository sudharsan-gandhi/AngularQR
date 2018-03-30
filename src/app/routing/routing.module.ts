import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GateOperatorComponent } from '../gate-operator/gate-operator.component';
import { DepotOperatorComponent } from '../depot-operator/depot-operator.component';



const routes: Routes = [
    {
        path: '',
        component: GateOperatorComponent
    }, {
      path: 'operator',
      component: DepotOperatorComponent
    }];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RoutingModule { }
