
import { FormControl} from "@angular/forms";
import { Observable } from "rxjs";

export class MyValidators {
    
// Restricted Email Array
    static restrictedEmail(control: FormControl): {[key: string]:  boolean} | null {
        if (['i@gg', 'h@gg'].includes(control.value)) {
            return { restrictedEmail: true }
        }
        return null
    }

    // async Validator
    static uniqEmail (control: FormControl): Promise<any> | Observable<any>{
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if (control.value === 'h@g') {
                    resolve ({
                        uniqEmail: true
                    })
                }
            }, 1000);
        })
    }

}