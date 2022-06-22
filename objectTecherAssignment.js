let teacher = {
    name: "John",
    age: "30",
    language: "English",
    experience: "7 Year",
    degrees: {
        engineering: "CSC",
        PHD: "Adv Computing",
        PostGraduation: "MCA",
    },
    certificate: {
        certificate1: "Google Garege",
        certificate2: "Technical Quiz",
        certificate3: "Sport Academy",

    },
    degreesAndCertificate: function () {
        return this.degrees.engineering + this.degrees.PHD + this.certificate.certificate1 + this.certificate.certificate2;
    }
}

console.log(`Teachers Language  ${teacher.language}`);

console.log(`Degree ${teacher.degrees.PHD}`)


let degreesAndCertificates = teacher.degreesAndCertificate();
console.log(degreesAndCertificates);
