import {connect} from 'mongoose';
import {MONGODB_URI} from './config'

export const connectdb = async () => {
    try {
        await connect(MONGODB_URI);
        console.log('conectado a db')
    } catch (error) {
        console.log(error)   ;     
    }

    
}