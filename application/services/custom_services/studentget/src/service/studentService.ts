import { Request, Response } from 'express';
import {studentDao} from '../dao/studentDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let student = new studentDao();

export class studentService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: GpGetAllValues')
     
     student.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
    
    
    
}