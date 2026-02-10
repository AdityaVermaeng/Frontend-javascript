let student = {
        name: "Aditya",
        // address: {
        //     city: "Delhi"
        // }
    }
    // console.log(student.address.city);
    // console.log(student.address ? student.address.city : undefined);
    // console.log(student.address && student.address.city);


//nested object

let customerDetails = {
        userId: 123,
        account: {
            name: "private",
            holder: {
                // profile: {
                //     firstName: "Aditya",
                //     lastName: "Verma",
                //     age: 23
                // }

            }
        }
    }
    // console.log(customerDetails.account && customerDetails.account.holder && customerDetails.account.holder.profile && customerDetails.account.holder.profile.firstName);
console.log(customerDetails ? .account ? .holder ? .profile ? .firstName);
console.log(customerDetails ? .account ? .holder ? .profile ? .firstName);