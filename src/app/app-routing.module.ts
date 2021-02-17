import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ListUserComponent} from './admin/list-user/list-user.component';
import {AddUserComponent} from './admin/add-user/add-user.component';
import {AddProfilComponent} from './profils/add-profil/add-profil.component';
import {ListProfilComponent} from './profils/list-profil/list-profil.component';
import {ListProfilDeSortieComponent} from './profils-de-sortie/list-profil-de-sortie/list-profil-de-sortie.component';
import {AddProfilDeSortieComponent} from './profils-de-sortie/add-profil-de-sortie/add-profil-de-sortie.component';
import {ListGrpCompetenceComponent} from './group-competence/list-grp-competence/list-grp-competence.component';
import {AddGrpCompetenceComponent} from './group-competence/add-grp-competence/add-grp-competence.component';
import {ListCompetenceComponent} from './competence/list-competence/list-competence.component';
import {AddCompetenceComponent} from './competence/add-competence/add-competence.component';
import {AddPromosComponent} from './promos/add-promos/add-promos.component';
import {ListReferentielComponent} from './referentiel/list-referentiel/list-referentiel.component';
import {AddReferentielComponent} from './referentiel/add-referentiel/add-referentiel.component';
import {EditUserComponent} from './admin/edit-user/edit-user.component';
import {EditProfilComponent} from './profils/edit-profil/edit-profil.component';
import {AuthGuard} from './guards/auth.guard';
import {DetailUserComponent} from './admin/detail-user/detail-user.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'listUsers', component: ListUserComponent},
      {path: 'addUsers' , component: AddUserComponent},
      {path: 'addProfils' , component: AddProfilComponent},
      {path: 'listProfils' , component: ListProfilComponent},
      {path: 'listerProfilsSortie' , component: ListProfilDeSortieComponent},
      {path: 'addProfilsSortie' , component: AddProfilDeSortieComponent},
      {path: 'listGroupCompetence' , component: ListGrpCompetenceComponent},
      {path: 'addGroupCompetence' , component: AddGrpCompetenceComponent},
      {path: 'listCompetence' , component: ListCompetenceComponent},
      {path: 'addCompetence' , component: AddCompetenceComponent},
      {path: 'addPromos' , component: AddPromosComponent},
      {path: 'listReferentiel' , component: ListReferentielComponent },
      {path: 'addReferentiel' , component: AddReferentielComponent},
      {path: 'editUser' , component: EditUserComponent },
      {path: 'detailUsers/:id' , component: DetailUserComponent },
      {path : '', canActivate: [AuthGuard], children: [
          {path: 'editProfils/:id' , component: EditProfilComponent}
    ]},
      {path : '', canActivate: [AuthGuard], children: [
          {path: 'editUsers/:id' , component: EditUserComponent}
        ]},
      {path : '', canActivate: [AuthGuard], children: [
          {path: 'listUsers/:id' , component: EditUserComponent}
        ]},


    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
