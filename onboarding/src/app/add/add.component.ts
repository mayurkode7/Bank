import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addForm = this.fb.group({

    name: [''],
    gender : ['']

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
