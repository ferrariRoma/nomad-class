/* 3-0강
js는 html과 상호작용하기 위해서 사용한다.
각각의 element들을 js를 통해서 변경하고 읽을 수 있음.
접근해서 값을 js의 관점에서 볼 수 있고,
그 값을 변경해줄 수도 있다.
당장에 콘솔에서 document를 치면 html을 볼 수 있고
document.title를 치면 (document라는 object의
    title멤버) 페이지의 title을 확인 할 수 있고,
console.dir(document)를 치면 페이지의 상세한
정보들을 볼 수 있다.

수정도 가능함!
document.title="I am Iron man";
 */

// document.title = "WHat a js from js";

/* 3-1강
그럼 js에서 html을 이용해서 어떻게 원하는 정보를
가져올 수 있을까?
있다. 
js에서는 html의 element들을 볼 수 있지만
전체를 볼 수는 없다. html의 객체(object)들을 보여줄 뿐이다.
js에서 html의 elements들을 얼마든지 가져올 수 있고,
얼마든지 변경할 수 있다.
 */
const title = document.getElementById("title");
console.dir(title);
title.innerText = "got you";
