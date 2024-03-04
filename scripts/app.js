// alert('ok');
const cardContainer = document.getElementById('card');

// async function fetchData() {
//     const url = 'https://openapi.programming-hero.com/api/retro-forum/posts';
//     const obj = await fetch(url);
//     const data = await obj.json();
//     const posts = data.posts;

//     console.log(posts);
// }

const displayAllCards = () => {
    const url = 'https://openapi.programming-hero.com/api/retro-forum/posts';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const posts = data.posts;
            const len = posts.length;

            //! Added all Posts
            for (let i = 0; i < len; ++i) {

                const newCard = document.createElement('div');
                newCard.className = 'bg-[#7B7DFC1A]';
                newCard.innerHTML = `
                <div class="w-20 h-20">
                        <img src=${posts[i].image} alt="" />
                    </div>
                    <div class="space-y-1">
                        <p class="mr-4"># ${posts[i].category}</p>
                        <p>Author : ${posts[i].author.name}</p>
                        <h4 class="text-xl text-[#12132D] font-bold">${posts[i].title}</h4>
                        <p class="text-base text-[#12132D99] font-bold">It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>
                        <p class="bg-[#12132D40] border-b-2 border-dashed"></p>

                        <div class="flex justify-between">
                            <div class="dbg-blue flex w-full space-x-8">
                                <div class="flex space-x-3">
                                    <div><img src="./images/message-2.svg" alt="" /></div>
                                    <p>${posts[i].comment_count}</p>
                                </div>
                                <div class="flex space-x-3">
                                    <div><img src="./images/eye.svg" alt="" /></div>
                                    <p>${posts[i].view_count}</p>
                                </div>
                                <div class="flex space-x-3">
                                    <div><img src="./images/clock-hour-9.svg" alt="" /></div>
                                    <p>${posts[i].posted_time} min</p>
                                </div>
                            </div>
                            <div id="read-btn" class="dbg-tomato">
                                <button onclick="titleAdd(${i})"><img src="./images/email.svg" alt="" /></button>
                            </div>
                        </div>
                    </div>
                `;
                cardContainer.appendChild(newCard);
            }
        });
}
displayAllCards();


let count = 0;
const titleAdd = (index) => {
    count++;
    const titleCount = document.getElementById('title-count');
    titleCount.innerText = count;

    const readBtn = document.getElementById('titleContainer');

    const url = 'https://openapi.programming-hero.com/api/retro-forum/posts';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const posts = data.posts;

            const newTitleCard = document.createElement('div');
            newTitleCard.className = 'flex justify-between my-5 bg-[#FFF]';
            newTitleCard.innerHTML = `
                    <p class="mr-4">${posts[index].title}</p>
                    <div class="flex w-20 h-20">
                        <div><img src="./images/eye.svg" alt="" /></div>
                        <p>${posts[index].view_count}</p>
                    </div>
                    `;
            readBtn.appendChild(newTitleCard);
        });
}


const latestPost = () => {
    const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const len = data.length;
            console.log(len);

            const latestPostContainer = document.getElementById('latestPostContainer');
            for (let i = 0; i < len; ++i) {
                console.log(data[i].author);
                const newLatestPost = document.createElement('div');
                newLatestPost.innerHTML = `
                <div class="mb-6 bg-[#12132DC]"><img src=${data[i].cover_image} alt="" /></div>

                
                <div class="#12132D26">
                    <div class="flex">
                        <div><img src="./images/Frame.svg" alt="" /></div>
                        <p id="date-show" class="text-base font-normal text-[#12132D99]">${data[i].author.posted_date || 'No Publish Date'}</p>
                    </div>
                    <p class="text-lg font-bold">${data[i].title}</p>
                    <p class="text-base font-normal">${data[i].description}</p>
                    <div class="flex">
                        <div class="h-11 w-11">
                            <img src=${data[i].profile_image} alt="" />
                        </div>
                        <div>
                            <p class="text-base font-semibold">${data[i].author.name}</p>
                            <p class="text-sm font-normal">${data[i].author.designation || 'Unknown'}</p>
                        </div>
                    </div>
                </div>
                `;

                latestPostContainer.appendChild(newLatestPost);
            }
        });
}
latestPost();
