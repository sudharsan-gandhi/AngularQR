import { GateOperatorComponent } from './gate-operator-component/gate-operator.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'signup',
                component: SignupComponent,
            }
        ]
    },
    {
        path: 'gate-opt',
        component: GateOperatorComponent
    },
    {
        path: 'miller',
        loadChildren: 'app/miller/miller.module#MillerModule'
    },

    {
        path: 'depot-manager',
        loadChildren: 'app/depot-manager/depot-manager.module#DepotManagerModule'
    },
    {
        path: 'depot-operator',
        loadChildren: 'app/depot-operator/depot-operator.module#DepotOperatorModule'
    },
    {
        path: 'gate-operator',
        loadChildren: 'app/gate-operator/gate-operator.module#GateOperatorModule'
    }
    // ,
    // {
    //     path: 'shed-management',
    //     loadChildren: 'app/shed-management/shed-management.module#ShedManagementModule'
    // }
    // {
    //   path: '**',
    //   redirectTo: 'login',
    // }
];

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
