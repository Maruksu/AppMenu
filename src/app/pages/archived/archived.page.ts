import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.page.html',
  styleUrls: ['./archived.page.scss'],
})
export class ArchivedPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

}
