import { Component, OnInit } from '@angular/core';
import { StudentgetService } from './studentget.service';

@Component({
  selector: 'app-studentget',
  templateUrl: './studentget.component.html',
  styleUrls: ['./studentget.component.scss'],
})

export class StudentgetComponent implements OnInit {
    columnDefs: any = [{ headerName: 'StudentName', field: 'studentname'  },{ headerName: 'StudentAddress', field: 'studentaddress'  },];
    public student:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        studentname: '',
        studentaddress: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private studentgetService: StudentgetService,
    ) { }

    ngOnInit() {
        this.student.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.studentgetService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}