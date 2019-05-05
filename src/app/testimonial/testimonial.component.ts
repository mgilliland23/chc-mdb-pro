import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'

/* Disable view encapsulation so we can target bootstrap elements through css*/


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
