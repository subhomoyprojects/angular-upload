import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addmoreinformation',
  templateUrl: './addmoreinformation.component.html',
  styleUrls: ['./addmoreinformation.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class AddmoreinformationComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(){
    
  }

  open(open_big_image) {
    this.modalService.open(open_big_image);
  }
}


