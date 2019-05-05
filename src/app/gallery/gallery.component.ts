import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent)
  }

  //constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
