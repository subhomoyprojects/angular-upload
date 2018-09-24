import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addoffers',
  templateUrl: './addoffers.component.html',
  styleUrls: ['./addoffers.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AddoffersComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

  open(open_big_image) {
    this.modalService.open(open_big_image);
  }

}
