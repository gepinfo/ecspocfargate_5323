import { Request, Response } from 'express';
import { studentService } from '../service/studentService';
import { CustomLogger } from '../config/Logger'
let student = new studentService();

export class studentController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
student.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: GpGetAllValues');
    })}


}