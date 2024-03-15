function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    let compare = /^pet_[\p{Nd}]+\p{L}+$/u;
    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (compare.test(input)){
            result = "Valid syntax";
        } 
        else{
            result = "Invalid syntax";
        }
            document.getElementById('result').innerText = result;
}


