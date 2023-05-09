import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import 'firebase/auth';


export default async function SignIn(email: string, password: string) {
    const auth = getAuth();
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return '';
    } catch (error) {
        console.error('Usuario no válido');            
        return error;
    }
}