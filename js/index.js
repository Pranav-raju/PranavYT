var vid_cards = document.getElementsByClassName("video-card");

console.log(vid_cards.length);


for(let i=0;i<vid_cards.length;i++)
{
    vid_cards[i].onclick = function()
    {
        // console.log("sell");
        window.location = "/yt1.html";

    }
}