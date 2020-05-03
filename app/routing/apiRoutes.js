//Dependencies
var friends = require("../data/friends.js");

module.exports = function(app){
    //display arrays
 
     app.get("/api/friends", function(req, res) {
        return res.json(friends);
     })

     app.post("/api/friends", function(req, res) {
    
        var user = req.body;
        for(var i = 0; i < user.nums.length; i++) {
          user.nums[i] = parseInt(user.nums[i]);
        }
    
        var index = 0;
        
        for(var i = 0; i < friends.length; i++){
            var min = 40;
            var temp = Math.abs(total(friends[i].nums) - total(user.nums))
            if(temp < min){
                min = temp;
                index = i;
            }
        }
    
        friends.push(user);
    
        res.json(friends[index]);
      });
}

function total(arr){
    var total = arr[0];
    for(var i = 1; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}