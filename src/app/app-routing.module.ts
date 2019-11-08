import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { AboutComponent} from  './about/about.component';
import { DataComponent} from  './data/data.component';




const routes: Routes = [

{

        path:"",component: HomePageComponent

},

{

        path: "about",component: AboutComponent

},
{

        path: "data",component: DataComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
