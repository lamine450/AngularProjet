import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { DetailUserComponent } from './admin/detail-user/detail-user.component';
import { HeaderComponent } from './header/header.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AddProfilComponent } from './profils/add-profil/add-profil.component';
import { ListProfilComponent } from './profils/list-profil/list-profil.component';
import { DetailProfilComponent } from './profils/detail-profil/detail-profil.component';
import { EditProfilComponent } from './profils/edit-profil/edit-profil.component';
import { ListProfilDeSortieComponent } from './profils-de-sortie/list-profil-de-sortie/list-profil-de-sortie.component';
import { AddProfilDeSortieComponent } from './profils-de-sortie/add-profil-de-sortie/add-profil-de-sortie.component';
import { EditProfilDeSortieComponent } from './profils-de-sortie/edit-profil-de-sortie/edit-profil-de-sortie.component';
import { DetailProfilDeSortieComponent } from './profils-de-sortie/detail-profil-de-sortie/detail-profil-de-sortie.component';
import { AddGrpCompetenceComponent } from './group-competence/add-grp-competence/add-grp-competence.component';
import { ListGrpCompetenceComponent } from './group-competence/list-grp-competence/list-grp-competence.component';
import { EditGrpCompetenceComponent } from './group-competence/edit-grp-competence/edit-grp-competence.component';
import { DetailGrpCompetenceComponent } from './group-competence/detail-grp-competence/detail-grp-competence.component';
import { AddCompetenceComponent } from './competence/add-competence/add-competence.component';
import { ListCompetenceComponent } from './competence/list-competence/list-competence.component';
import { EditCompetenceComponent } from './competence/edit-competence/edit-competence.component';
import { DetailCompetenceComponent } from './competence/detail-competence/detail-competence.component';
import { AddPromosComponent } from './promos/add-promos/add-promos.component';
import { AddReferentielComponent } from './referentiel/add-referentiel/add-referentiel.component';
import { ListReferentielComponent } from './referentiel/list-referentiel/list-referentiel.component';
import { EditReferentielComponent } from './referentiel/edit-referentiel/edit-referentiel.component';
import { ProfilReferentielComponent } from './referentiel/profil-referentiel/profil-referentiel.component';
import { FooterComponent } from './footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginInterceptor} from './login/login.interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserPipe } from './admin/user.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    ListUserComponent,
    DetailUserComponent,
    HeaderComponent,
    EditUserComponent,
    AddProfilComponent,
    ListProfilComponent,
    DetailProfilComponent,
    EditProfilComponent,
    ListProfilDeSortieComponent,
    AddProfilDeSortieComponent,
    EditProfilDeSortieComponent,
    DetailProfilDeSortieComponent,
    AddGrpCompetenceComponent,
    ListGrpCompetenceComponent,
    EditGrpCompetenceComponent,
    DetailGrpCompetenceComponent,
    AddCompetenceComponent,
    ListCompetenceComponent,
    EditCompetenceComponent,
    DetailCompetenceComponent,
    AddPromosComponent,
    AddReferentielComponent,
    ListReferentielComponent,
    EditReferentielComponent,
    ProfilReferentielComponent,
    FooterComponent,
    UserPipe,
    NotFoundComponent,
    HomeComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },[{provide: LocationStrategy, useClass: HashLocationStrategy}],],
  bootstrap: [AppComponent]
})
export class AppModule { }
