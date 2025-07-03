// Username Generator

    document.getElementById("btn").addEventListener("click", function() {
        let input = document.getElementById("get-input").value; // Get Input
        let remove_space = input.replace(/\s/g, ""); // Removing all spaces
        let low_case = remove_space.toLocaleLowerCase(); // convert all char into lower case
        let user_sign = "@"; // add @ sign for username
        let add_user_sign = user_sign.concat(low_case); // concat the sign before the username
        let user_length = remove_space.length; // detecting the length
        let username = add_user_sign.concat(user_length); // add the length after username
        // now the username is ready
        document.getElementById("output").innerHTML = username; // give it to the output

    });

