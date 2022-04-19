import * as mongoose from 'mongoose';
import studentModel from '../models/student';
import { CustomLogger } from '../config/Logger'


export class studentDao {
    private student = studentModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentDao.ts: GpGetAllValues');

    

    
    
    
    this.student.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}