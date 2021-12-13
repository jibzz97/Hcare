

export class Patient {

    id: Number;
    email: string;
    firstName: string;
    surname: string;
    dateInscription: Date;
    password: string;

    constructor(
        id: Number,

        email: string,
        firstName: string,
        surname: string,
        dateInscription: Date,
        password: string,

    ) {

        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.surname = surname;
        this.dateInscription = dateInscription;
        this.password = password;

    }

}

export enum Roles {

    doctor = "doctor",
    farmer = "farmer",
}
