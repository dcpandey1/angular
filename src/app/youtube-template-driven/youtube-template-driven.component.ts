import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-youtube-template-driven',
  templateUrl: './youtube-template-driven.component.html',
  styleUrls: ['./youtube-template-driven.component.css']
})
export class YoutubeTemplateDrivenComponent {

  topics = ['angular','react','vue'];

  user = new User("Rob","Abc@gmail.com",4234774,"")

  submitForm(){
    debugger
    console.log("tets")
    console.log(this.user);
  }

}
