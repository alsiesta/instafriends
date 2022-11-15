
let posts = [
    {
        'profileimage': 'img/alex.jpg',
        'author': 'Alexander',
        'source': 'eigene Aufnahme',
        'image': 'img/img1.jpg',
        'headline': 'Die Krake. Der Klassiker',
        'subheadline': 'Lorem ipsum dolor sit amet.',
        'comment': 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
        'location': 'Bremen',
    },
    {
        'profileimage': 'img/elena.jpg',
        'author': 'Elena',
        'source': 'eigene Aufnahme',
        'image': 'img/img2.jpg',
        'headline': 'Happy Traveler',
        'subheadline': 'Lorem ipsum dolor sit amet.',
        'comment': 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
        'location': 'Berlin',
    },
    {
        'profileimage': 'img/paloma.jpg',
        'author': 'Paloma',
        'source': 'eigene Aufnahme',
        'image': 'img/img3.jpg',
        'headline': 'Happy Traveler',
        'subheadline': 'Lorem ipsum dolor sit amet.',
        'comment': 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
        'location': 'Hamburg',
    },
    {
        'profileimage': 'img/pepa.jpg',
        'author': 'Pepa',
        'source': 'eigene Aufnahme',
        'image': 'img/img4.jpg',
        'headline': 'Happy Traveler',
        'subheadline': 'Lorem ipsum dolor sit amet.',
        'comment': 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
        'location': 'Celle',
    },
    {
        'profileimage': 'img/alex.jpg',
        'author': 'Alexander',
        'source': 'eigene Aufnahme',
        'image': 'img/img5.jpg',
        'headline': 'Krake',
        'subheadline': 'Lorem ipsum dolor sit amet.',
        'comment': 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
        'location': 'Bremen',
    },
];

// const to establish max width. Depending on this width, it determines, if the sidebar or footer- & topbar navigations are show

//////////////////// checks Window Width ////////////////////
const mql = window.matchMedia('(max-width: 700px)');
//////////////////// checks Window Width ////////////////////


// renders all post in div
function show() {
    document.getElementById('postcontainer').innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        renderPost(post,i);
        
    };
};

// get called by show() and renders HTML code
function renderPost(post,i) {
    document.getElementById('postcontainer').innerHTML += `
    <div class="post" id="post${i}">
    <div class="postheader"  id="postheader${i}">
   
    <img class="profileimage" id="profileimage${i}" src="${post['profileimage']}">
        <table>
            <tr class="row">
                <td class="author" id="author${i}">${post['author']}</td>
            </tr>
            <tr class="row">
                <td class="location" id="location${i}">Ort: ${post['location']}</td>
            </tr>
        </table>
    </div>
    <img class="image" id="image${i}" src="${post['image']}">
    <div class="dialog id="dialog${i}"">
    <div><img src="img/iheart_icon.png" alt=""></div>
    <div><img src="img/ispeechbubble_icon.png" alt=""></div>
    <div><img src="img/iarrow_icon.png" alt=""></div>
    <div><img src="img/ibookmark_icon.png" alt=""></div>
    </div>
    <div class="headline" id="headline${i}">${post['headline']}</div>
    <div class="subheadline" id="subheadline${i}">${post['subheadline']}</div>
    <div class="comment" id="comment${i}">${post['comment']}</div>
    <div class="source" id="source${i}">Quelle: ${post['source']}</div>
</div>
        `;
}

//////////////////// checks Window Width ////////////////////
//checks Window width to determine, which nav bar to show
function checkWindow() {
    let windowwidth = window.innerWidth;
    if (windowwidth <= 700) {
        /* the viewport is 700 pixels wide or less */
        belowMaxWidth()
    } else {
        /* the viewport is more than 700 pixels wide */
        aboveMaxWidth()
    }
}

//instance of window that reacts when window is resized
mql.onchange = (e) => {
    if (e.matches) {
        /* the viewport is 700 pixels wide or less */
        belowMaxWidth()
    } else {
        /* the viewport is more than 700 pixels wide */
        aboveMaxWidth()
    }
}

//shows or hides respective bar with navigation inside
function belowMaxWidth() {
    document.getElementById('footerbar').classList.remove('d-none');
    document.getElementById('headerbar').classList.remove('d-none');
    document.getElementById('sidebar').classList.add('d-none');
}

function aboveMaxWidth() {
    document.getElementById('sidebar').classList.remove('d-none');
    document.getElementById('footerbar').classList.add('d-none');
    document.getElementById('headerbar').classList.add('d-none');
}
//////////////////// checks Window Width ////////////////////

function showDialog() {
    document.getElementById('dialogcontainerbkg').classList.remove('d-none');
}