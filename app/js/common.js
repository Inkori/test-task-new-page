$(function() {

const addCommentButton = document.querySelector('#add');
const addCommentText = document.getElementById('commentText');
const reviewBlocks = document.querySelector('.section_3');

addCommentButton.addEventListener('click', (event) => {
	event.preventDefault();
	addNewComment();
});

addCommentText.addEventListener( 'keydown', (e) => {
	if (e.keyCode===13 && e.ctrlKey ) {
		addNewComment();
		}
});


function addNewComment() {
	const text = commentText.value;
	if ( text !== '' ) {
		const newReviewText = document.createElement('DIV');
		newReviewText.className = 'reviewText';
		newReviewText.innerText = text;

		const newCommentBox = document.createElement('DIV');
		newCommentBox.className = 'commentBox';

		const newName = document.createElement('DIV');
		newName.className = 'name';
		newName.innerText = 'Хочолава Роман';
		newCommentBox.appendChild(newName);

		const newDate = document.createElement('DIV');
		newDate.className = 'date';
		newDate.innerText = '07 ноября 2017';
		newCommentBox.appendChild(newDate);

		const newItem = document.createElement('DIV');
		newItem.className = 'newComment';
		newCommentBox.appendChild(newItem);
		newItem.appendChild(newReviewText);

		const triangleIn = document.createElement('DIV');
		triangleIn.className = 'triangleIn';
		newItem.appendChild(triangleIn);

		const triangleWrapper = document.createElement('DIV');
		triangleWrapper.className = 'triangleWrapper';
		newItem.appendChild(triangleWrapper);
		reviewBlocks.appendChild(newCommentBox);

		commentText.value = '';

	}
}




});
