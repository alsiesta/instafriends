let posts = [
  {
    profileimage: "img/alex.jpg",
    author: "Alexander",
    source: "eigene Aufnahme",
    image: "img/img1.jpg",
    headline: "Die Krake. Der Klassiker",
    subheadline: "Lorem ipsum dolor sit amet.",
    comment:
      "Letzte Woche auf dem Bremer Freimarkt. Wie vor 30 Jahren ist die Krake immer noch mein Favorit 😊🔥.",
    location: "Bremen",
    likes: 0,
  },
  {
    profileimage: "img/elena.jpg",
    author: "Elena",
    source: "eigene Aufnahme",
    image: "img/img2.jpg",
    headline: "Happy Traveler",
    subheadline: "Lorem ipsum dolor sit amet.",
    comment:
      "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
    location: "Berlin",
    likes: 0,
  },
  {
    profileimage: "img/paloma.jpg",
    author: "Paloma",
    source: "eigene Aufnahme",
    image: "img/img3.jpg",
    headline: "Happy Traveler",
    subheadline: "Lorem ipsum dolor sit amet.",
    comment:
      "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
    location: "Hamburg",
    likes: 0,
  },
  {
    profileimage: "img/pepa.jpg",
    author: "Pepa",
    source: "eigene Aufnahme",
    image: "img/img4.jpg",
    headline: "Happy Traveler",
    subheadline: "Lorem ipsum dolor sit amet.",
    comment:
      "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
    location: "Celle",
    likes: 0,
  },
  {
    profileimage: "img/alex.jpg",
    author: "Alexander",
    source: "eigene Aufnahme",
    image: "img/img5.jpg",
    headline: "Krake",
    subheadline: "Lorem ipsum dolor sit amet.",
    comment:
      "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
    location: "Bremen",
    likes: 0,
  },
];

let postscomments = [
  {
    comments: ["Hallo", "Jahrmarkt is geil"],
  },
  {
    comments: ["Yeaaahhhhh", "Wooowww"],
  },
  {
    comments: ["Palomita!!"],
  },
  {
    comments: [],
  },
  {
    comments: [],
  },
];

// renders all posts in main div
function show() {
  document.getElementById("postcontainer").innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    // console.log(post['image']);
    renderPost(post, i);
  }
}

// called by show(), renders all JSON posts as HTML code
function renderPost(post, i) {
  document.getElementById("postcontainer").innerHTML += `
    <div class="post" id="post${i}">
    <div class="postheader"  id="postheader${i}">
   
    <img class="profileimage" id="profileimage${i}" src="${post["profileimage"]}">
        <table>
            <tr class="row">
                <td class="author" id="author${i}">${post["author"]}</td>
            </tr>
            <tr class="row">
                <td class="location" id="location${i}">Ort: ${post["location"]}</td>
            </tr>
        </table>
    </div>
    <img class="image" id="image${i}" src="${post["image"]}">
    <div class="postdialog id="dialog${i}"">
    <div><img onclick="likePost(${i})" src="img/iheart_icon.png" alt=""></div>
    <div><img onclick="showDialog(${i})" src="img/ispeechbubble_icon.png" alt=""></div>
    <div><img src="img/iarrow_icon.png" alt=""></div>
    <div><img src="img/ibookmark_icon.png" alt=""></div>
    </div>
    <div class="headline" id="headline${i}">${post["headline"]}</div>
    <div class="subheadline" id="subheadline${i}">${post["subheadline"]}</div>
    <div class="comment" id="comment${i}">${post["comment"]}</div>
    <div class="source" id="source${i}">Quelle: ${post["source"]}</div>
</div>
        `;
}

// shows the dialog div for further user interaction
function showDialog(i) {
  document.getElementById("dialogcontainerbkg").innerHTML = ``;
  document.getElementById("dialogcontainerbkg").classList.remove("d-none");
  let post = posts[i];
  console.log(post);
  document.getElementById("dialogcontainerbkg").innerHTML = `
    <div class="dialogcontainerclose" onclick="event.stopPropagation()">
    <span>
            <img onclick="closeDialog()" src="img/x-icon_white.png">
    </span>
</div>
<div class="dialogcontainer" id="dialogcontainer" onclick="event.stopPropagation()">
    <div class="dialogleft" id="dialogleft">
        <img class="image" id="image${i}" src="${post["image"]}">
    </div>
    <div class="dialogright" id="dialogright">
        
    <div class="dialogrightauthor" id="dialogrightauthor"><img class="profileimage" src="${
      post["profileimage"]
    }">${post["headline"]}</div>
       
        <div class="dialogrightcomments" id="dialogrightcomments"></div>
        
        <div class="dialogrightlikes" id="dialogrightlikes"><img onclick="${i}" src="img/iheart_icon.png" alt="">${getPostLikes(
    i
  )} Likes</div>
        
        <div class="dialogrightcommentinput" ><input type="text" name="" placeholder="Add a comment..." id="dialogrightcommentinput"><button onclick="addComment(${i})"type="submit">Post</button></div>
    </div>
            `;
  renderPostsComments(i);
}

function closeDialog() {
  document.getElementById("dialogcontainerbkg").classList.add("d-none");
}

function save() {
  let postsAsText = JSON.stringify(posts);
  let postcommentsAsText = JSON.stringify(postscomments);
  localStorage.setItem("posts", postsAsText);
  localStorage.setItem("postcomments", postcommentsAsText);
}

function load() {
  let postsAsText = localStorage.getItem("posts");
  let postscommentsAsText = localStorage.getItem("postscomments");
  if (postsAsText) {
    posts = JSON.parse(postsAsText);
  }
  if (postscommentsAsText) {
    postscomments = JSON.parse(postscommentsAsText);
  }
  return { posts, postscomments };
}

function likePost(i) {
  let post = posts[i];
  post["likes"]++;
  save();
}

function getPostLikes(i) {
  let likes = load().posts[i].likes;
  return likes;
}

// renders all Post Comments of specific index i in JSON 'postscomments'
function renderPostsComments(i) {
  let post = posts[i];
  content = document.getElementById("dialogrightcomments");
  content.innerHTML = "";
  content.innerHTML = `
    <span><img class="profileimage" src="${post["profileimage"]}">${post["comment"]}</span>`;
  let comments = getPostsComments(i);
  if (comments == null) {
    return;
  } else {
    for (let j = 0; j < comments.length; j++) {
      let comment = comments[j];
      document.getElementById("dialogrightcomments").innerHTML += `
        <div id="comment${j}"><p><img class="profileimagecomments" src="${post["profileimage"]}">${comment}<img class="icon" src="img/x-icon_grey.png" onclick="deleteComment(${i},${j})"></p></div>
        `;
    }
  }
}

// adds a new User Comment to the JSON postscomments
function addComment(id) {
  let newcomment = document.getElementById("dialogrightcommentinput").value;
  if (newcomment === "") {
    alert("please submit a comment");
  } else {
    postscomments[id].comments.push(newcomment);
    console.log(postscomments[id].comments);
  }
  renderPostsComments(id);
  save();
}

function deleteComment(i, j) {
  postscomments[i].comments.splice(j, 1);
  console.log(postscomments[i].comments);
  renderPostsComments(i);
  save();
}

// returns specific index i array of JSON 'postscomments'
function getPostsComments(i) {
  let comments = load().postscomments[i].comments;
  return comments;
}

function getPostId(i) {
  let id = load()[i].id;
  return id;
}
