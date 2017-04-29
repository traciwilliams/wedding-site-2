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