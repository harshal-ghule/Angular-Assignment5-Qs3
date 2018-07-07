import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public UserName;
  public Password;

  constructor() { }

  public sendData()
  {
      console.log(this.UserName);
      console.log(this.Password);
  }


  ngOnInit() {
  }

}
