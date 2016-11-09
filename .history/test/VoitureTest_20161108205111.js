import Voiture from '../app/Voiture';

describe('Voiture', () => {
    var subject: Voiture;

    beforeEach(function() {
        // Datas for Vehicule & Voiture
        const datasVehicule = {
            marque: "BMW",
            modele: 'A3',
            prix: 30000,
            color: 'Noir',
            immatriculation: 'BC-446-AA'
        };
        const datasVehiculeTwo = {
            marque: "Audi",
            modele: 'Q3',
            prix: 25000,
            color: 'Blanc',
            immatriculation: 'AB-345-CA'
        };
        const datasVoiture = {
            kilometrage: 155151,
            annee: 2016
        };
        const user = {
            pseudo: "Juju",
            avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png",
            nom: "Boyer",
            ville: "Lyon"
        }
        const options = ['jantes alu', 'toit ouvrant'];

        subject = new Voiture(datasVehicule, datasVoiture, true, options, '5 portes', '6mois'); // with infos
    });



    describe('#toString', () => {
        it('Test on string an object of Vehicule', () => {
            var result: number = subject.toString();
            if (!result) {
                throw new Error('Expected 2 + 3 = 5 but was ' + result);
            }
        });
    });
});