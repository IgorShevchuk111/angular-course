import { FormControl } from "@angular/forms";

export class MyValidators {

    static restrictedEmail(control: FormControl) {
        if (['i@gg', 'h@gg'].includes(control.value)) {
            return { restrictedEmail: true }
        }
        return null
    }
}