var user = {
    name:'Hieu',
    age: 18,
    body: {
        haircolor: 'black',
        skincolor: 'white',
        height: 1700,
        weight: 68
    }
};
for (let key in user) {
    if (user.hasOwnProperty(key)) {
      console.log(`${key}: ${user[key]}`)
    }
}    
