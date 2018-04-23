$(function() {

const addCommentButton = document.querySelector('#add');
const addCommentText = document.getElementById('commentText');
const reviewBlocks = document.querySelector('.comment-wrapper');

addCommentButton.addEventListener('click', (event) => {
	event.preventDefault();
	addNewComment();
});

addCommentText.addEventListener( 'keydown', (e) => {
	if (e.keyCode===13 && e.ctrlKey ) {
		addNewComment();
		}
});

function getDate() {
  const monthes = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const date = new Date();

  const dd = date.getDate();
  if (dd < 10) dd = '0' + dd;
  const mm = monthes[date.getMonth()];
  const yy = date.getFullYear();

  return dd + ' ' + mm + ' ' + yy;
}


function addNewComment() {
	const text = commentText.value;
	if ( text !== '' ) {
		const newReviewText = document.createElement('DIV');
		newReviewText.className = 'review-text';
		newReviewText.innerText = text;

		const newCommentBox = document.createElement('DIV');
		newCommentBox.className = 'comment-box';

		const newName = document.createElement('DIV');
		newName.className = 'name';
		newName.innerText = 'Хочолава Роман';
		newCommentBox.appendChild(newName);

		const newDate = document.createElement('DIV');
		newDate.className = 'date';
		newDate.innerText = getDate();
		newCommentBox.appendChild(newDate);

		const newItem = document.createElement('DIV');
		newItem.className = 'comment-content';
		newCommentBox.appendChild(newItem);
		newItem.appendChild(newReviewText);

		const triangleIn = document.createElement('DIV');
		triangleIn.className = 'triangleIn';
		newItem.appendChild(triangleIn);

		const triangleWrapper = document.createElement('DIV');
		triangleWrapper.className = 'triangl-wrapper';
		newItem.appendChild(triangleWrapper);
		reviewBlocks.appendChild(newCommentBox);

		commentText.value = '';

	}
}




});
