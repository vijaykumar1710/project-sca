import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-input-panel',
  templateUrl: './input-panel.component.html',
  styleUrls: ['./input-panel.component.css']
})
export class InputPanelComponent implements OnInit {

  constructor(public fb: FormBuilder) { }



  Tools: any = ['Cyvis', 'VCG', 'Jacoco', 'PMD', 'Simian'];

  registrationForm = this.fb.group({
    toolName: ['', [Validators.required]]
  })

  ngOnInit() {
  }

}