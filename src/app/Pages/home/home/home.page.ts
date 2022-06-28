import { Component, OnInit } from '@angular/core';
import {AnimationController, ModalController} from '@ionic/angular';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {UpdateMenuModalPage} from "../../Modal/update-menu-modal/update-menu-modal.page";
import {BehaviorSubject} from "rxjs";


export class MENU {
  $key: string;
  id: string;
  name: string;
  type: string;
  price: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  name;
  type;
  price;
  description;
  menuList: MENU[];

  constructor(
    private animationCtrl: AnimationController,
    private ngFirestore: AngularFirestore,
    private modalCtrl: ModalController

  ) {}

  ngOnInit() {
    this.getAllMenus().subscribe((res) => {
      this.menuList = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as MENU
        };
      });
      console.log(this.menuList);
    });


  }


  public addNewMenu(){

    const menu = {
      name : this.name,
      type : this.type,
      price : this.price,
      description: this.description
    };
    console.log(menu);
    this.create(menu).then((res) => {
                console.log('good');
                console.log(res);
              }).catch((err) => {
                console.log(err);
              });



  }


  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };



  create(todo: any) {
    // return this.ngFirestore.collection('menu').add(todo);
    return this.ngFirestore.collection('menu').add(todo);

  }

  getAllMenus(){
    return this.ngFirestore.collection('menu').snapshotChanges();

    // return this.ngFirestore.collection('menu',ref =>ref.where('price','==',20));
  }
  delete(id){

    this.ngFirestore.doc('menu/' + id).delete();
  }

  update(menu){
  console.log(menu);
    // this.ngFirestore.doc('menu/' + id).update();
  }

  async presentModal(menu) {
    const myMenu = new BehaviorSubject(menu);

    const modal = await this.modalCtrl.create({
      component: UpdateMenuModalPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5,
      handle: false,
      componentProps : {menu}
    });
    await modal.present();
    myMenu.subscribe((value: any) => {
      this.menuList = value;
    });

    modal.onDidDismiss().then((_ => {
      myMenu.unsubscribe();
    }));

  }

}
