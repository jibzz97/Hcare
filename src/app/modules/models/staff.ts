
export class Staff {

    id: Number;
    email: string;
    firstName: string;
    surname: string;
    dateInscription: Date;
    password: string;
    role: Roles;

    constructor(
        id: Number,

        email: string,
        firstName: string,
        surname: string,
        dateInscription: Date,
        password: string,
        role: Roles

    ) {

        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.surname = surname;
        this.dateInscription = dateInscription;
        this.password = password;
        this.role = role;

    }

}

export enum Roles {

    doctor = "doctor",
    farmer = "farmer",
}
