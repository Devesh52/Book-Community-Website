/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

function likePost(button) {
    button.innerHTML = "Liked!";
    button.disabled = true;
}

function dislikePost(button) {
    button.innerHTML = "Disliked!";
    button.disabled = true;
}

function addComment(button) {
    var post = button.closest(".post");
    var commentText = post.querySelector(".comment-input").value;

    var newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = `<p class="comment-content">User123: ${commentText}</p>`;

    post.querySelector(".comment-section").insertBefore(newComment, post.querySelector(".comment-input").nextSibling);
    post.querySelector(".comment-input").value = "";
}

function SubmitForm(event) {
    event.preventDefault();
    var title = document.getElementById("postTitle").value;
    var content = document.getElementById("postContent").value;

    var newPost = document.createElement("article");
    newPost.classList.add("post");
    newPost.innerHTML = `
        <h3 class="post-title">${title}</h3>
        <p class="post-content">${content}</p>
        <div class="post-actions">
            <button class="btn-like" onclick="likePost(this)">Like</button>
            <button class="btn-dislike" onclick="dislikePost(this)">Dislike</button>
        </div>
        <div class="comment-section">
            <h4 class="comment-title">Comments</h4>
            <textarea class="comment-input" placeholder="Add a comment"></textarea>
            <button class="btn-comment" onclick="addComment(this)">Add Comment</button>
        </div>
    `;

    document.querySelector(".posts .container").appendChild(newPost);
    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";
}


