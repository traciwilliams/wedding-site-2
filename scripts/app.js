
window.onload = function() {
	console.log("javascript working for wedding site part 2?")
}



/*==============CommentBox -  this comment section is for people not attending==============*/


var commentsBox = {
	comments: [],
	
	displayComments: function() {
		if(this.comments.length === 0){
			console.log("Please complete your commment");
		} else {
			//console.log("My comment");
			for (var i=0; i < this.comments.length; i++) {
				if (this.comments[i].attending === false){
					console.log(this.comments[i].newComment, "Katie and Tom says: You will be missed")
				}
			}
		}
	},
	addComments: function(newComment) {
		this.comments.push({
			newComment: newComment,
			attending: false
		});
		this.displayComments();
	},
	changeComments: function(indexValue, newComment) {
		this.comments[indexValue].newComment = newComment;
		this.displayComments();
	},
	deleteComments: function(indexValue) {
		this.comments.splice(indexValue, 1);
		this.displayComments();
	},

};





/*==============how many friends are coming -   people attending==============*/




var myFriends = {
 friends: [],
	displayFriends: function() {

	if (this.friends.length === 0) {
		console.log("you have no friends :(")	
	} else { 
	for (var i = 0; i < this.friends.length; i++){

		if (this.friends[i].completed === true) {
		console.log ('(x)', this.friends[i].newFriend);
        } else {
		console.log ('()', this.friends[i].newFriend);
			}
    	}
      }	
	},
	addFriends: function(newFriend) {
		this.friends.push({
			newFriend: newFriend,
			completed: false
			
	});
		this.displayFriends();
	},
	changeFriends: function(index, newFriend) {
		this.friends[index].friend = newFriend;
		this.displayFriends();

	},
	deleteFriends: function(index) {
		this.friends.splice(index,1);
		this.displayFriends();
	},
	toggleFriends: function(index) {
		theFriends = this.friends[index];
		theFriends.completed = !theFriends.completed;
		this.displayFriends();

	}
};