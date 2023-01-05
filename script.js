(function(){
    const spanE1 = document.querySelector("main h2 span");

    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer',
    'UX Designer', 'Back-End Developer'];

    let index = 0;

    let currentTxt = txtArr[index].split("");

    function writeTxt(){
        spanE1.textContent += currentTxt.shift();
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        } else{
            currentTxt = spanE1.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }

    function deleteTxt(){
        currentTxt.pop();
        spanE1.textContent = currentTxt.join("");
        if(currentTxt.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        }else{
            index = (index+1) %txtArr.length;
            currentTxt = txtArr[index]. split("");
            writeTxt();
        }
    }
writeTxt();
})();

const headerE1 = document.querySelector("header");
window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0){
        headerE1.classList.add("active")
    }else{
        headerE1.classList.remove("active");
    }
}

const animationMove = function(selector){
    /* selector 매개 변수로 이동할 대상 요소 노드 가져오기 */
    const targetE1 = document.querySelector(selector);

    /* 현재 웹 브라우저의 스크롤 정보 */
    const browserScrollY = window.pageYOffset;

    /* 이동할 대상 위치 (y값)*/
    const targetScrollY = targetE1.getBoundingClientRect().top + browserScrollY;

    /* 스크롤 이동 */
    window.scrollTo({top : targetScrollY, behavior:'smooth'});
};

const scrollMoveE1 = document.querySelectorAll("[data-animation-scroll = 'true']");
for(let i = 0; i< scrollMoveE1.length; i++){
    scrollMoveE1[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}
