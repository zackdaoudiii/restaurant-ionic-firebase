import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MENU} from '../../home/home/home.page';

@Component({
  selector: 'app-update-menu-modal',
  templateUrl: './update-menu-modal.page.html',
  styleUrls: ['./update-menu-modal.page.scss'],
})
export class UpdateMenuModalPage implements OnInit {

  @Input() menu: BehaviorSubject<MENU>;
  choice =0;

  constructor() { }

  ngOnInit() {
    console.log('modal');
    console.log(this.menu);
  }

  update(){
    console.log("sss");
  }

}
