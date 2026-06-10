function Consonent(str){
    let vowels = "aeiouAEIOU"
    let count = 0;
    for (let char of str){
        if(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z' && !vowels.includes(char))
        {
            count++;
        }
    }
    return count;
}
console.log(Consonent("this is a test123@"));
