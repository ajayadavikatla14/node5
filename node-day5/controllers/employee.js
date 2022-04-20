const getDetails = (req, res) =>{
    res.send ({
        name:"Harika",
        age:21,
        designation:"Software developer"
    })
}

module.exports.getDetails = getDetails;