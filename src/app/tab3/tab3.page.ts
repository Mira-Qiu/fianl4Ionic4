import { Component } from '@angular/core';
import { MyServiceService} from '../service.service';
import { NavController, AlertController , LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  public persons: Array<any> = [];
  public keyword: string;
  private loadingPopup :any;
  constructor(private navCtrl :NavController,
    private myService: MyServiceService,
    private  alartCtrl: AlertController,
    private loadingCtrl:LoadingController
    ){
      this.loadUser();
    }
    
    onKeyworkChange(e){
      console.log(e);
    }
    
    openDetail(person){
      this.myService.selectedUser = person;
      this.navCtrl.navigateForward('/detail');
    }

    async loadUser(){
      const persons = await this.myService.getUser();
      this.persons = persons.results;
      console.log(this.persons);
    }
}
