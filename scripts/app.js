window.onload = function() {
	console.log("javascript working for wedding site part 2?")
}



/*==============CommentBox==============*/


var commentsBox = {
	comments: ["comment1", "comment2", "comment3"],
	
	displayComments: function() {
		console.log(this.comments)
	},
	addComments: function(newComment) {
		this.comments.push(newComment);
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