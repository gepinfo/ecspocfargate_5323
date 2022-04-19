import { Component, OnInit } from '@angular/core';
import { CreatestudentService } from './createstudent.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.scss'],
})

export class CreatestudentComponent implements OnInit {
    public student:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        studentname: '',
        studentaddress: '',
    }

    constructor (
        private createstudentService: CreatestudentService,
    ) { }

    ngOnInit() {
        this.student.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createstudentService.GpCreate(this.student).subscribe(data => {
            this.student.studentname = ''
 	 	this.student.studentaddress = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}