console.log("=========== Assignment ===============");
let teacher = { };
teacher.firstName = "Ramesh";
teacher.lastName = "Acherkar";
teacher.degrees = {
    engineering: "CSC",
    PHD: "Material Science"
};
teacher.certificates = {
    cert1: "Certificate1",
    cert2: "Certificate2"
};
teacher.degreesAndCertificates = function() {
  console.log(`Total Degrees and certificates are : ${teacher.degrees.engineering}, ${teacher.degrees.PHD} ${teacher.certificates.cert1}  ${teacher.certificates.cert2}`)
  return `Total Degrees and certificates are : ${teacher.degrees.engineering}, ${teacher.degrees.PHD} ${teacher.certificates.cert1}  ${teacher.certificates.cert2}`;
}; 

let degrees_certs = teacher.degreesAndCertificates();
console.log(degrees_certs);
