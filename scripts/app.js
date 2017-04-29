window.onload = function() {
	console.log("javascript working for wedding site part 2?")
}



/*==============CommentBox -  this comment section is for people not attending==============*/


var commentsBox = {
	comments: [],
	
	displayComments: function() {
		console.log(this.comments)
	},
	addComments: function(newComment) {
		this.comments.push({
			newComment: newComment,
			attending: false
		});
		this.displayComments();
	},
	changeComments: function(indexValue, newComment) {
		this.comments[indexValue] = newComment;
		this.displayComments();
	},
	deleteComments: function(indexValue) {
		this.comments.splice(indexValue, 1);
		this.displayComments();
	}

};