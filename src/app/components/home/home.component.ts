import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dossierEnCours = false;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }

  initRequest() {
    this.requestService.createRequest().subscribe(res => {

    }, err => {

    });
  }

}
