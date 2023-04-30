// const itemDisplay = $('.tour-container').getAttribute('display-d');
// const items = $$('.tour-item')
// const tourWidth = $('.tour-container').offsetWidth
// // const margin = $('.tour-item').offsetRight
// // console.log(margin)
// // console.log(document.querySelector('.tour-item'))
// const margin = $('.tour-item')
// const style = window.getComputedStyle(margin);
// const marginRight = parseFloat(style.marginRight);

// // set width cho các tour item
// for (let i = 0; i < items.length; i++){
//       items[i].style.width = (tourWidth / itemDisplay ) - (marginRight*2 / itemDisplay +2)+ "px"
// }

// // căn chỉnh height tour-container
// const heightItem = $('.tour-list').offsetHeight
// const heightTour = $('.tour').offsetHeight
// const heightList = $('.tour-container')
// heightList.style.height = heightTour + heightItem + 100 + "px"

// ấn giữ di chuyển tour list
// const tourList = $('.tour-list')
// let start = false, prevScroll, prevX;

// const dragStart = (e)=>{
//       start = true;
//       prevScroll = tourList.scrollLeft;
//       prevX = e.pageX
// }

// const dragStop = ()=>{
//       start = false;
// }

// const dragging = (e) => {
//       if (!start) return;
//       e.preventDefault()
//       let position = e.pageX - prevX
//       tourList.scrollLeft = prevScroll - position
// }
// tourList.addEventListener("mousedown",dragStart)

// tourList.addEventListener("mousemove", dragging)

// tourList.addEventListener("mouseup",dragStop)

// next prev
// const nextBtn =$('.next-btn')
// const prevBtn = $('.prev-btn')

// function nextSlide(e) {
//       const listItem = $$('.tour-item')
//       tourList.append(listItem[0])
//       // e.preventDefault()
// }

// function prevSlide(e) {
//       const listItem = $$('.tour-item')
//       tourList.prepend(listItem[listItem.length - 1])
//       // e.preventDefault()
// }

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const prevBtn = $(".prev");
const nextBtn = $(".next");
const tourList = $(".tour-list");
const tourItemWidth = $(".tour-item").offsetWidth;
const items = $$(".tour-item");
const length = items.length;

let curentIndex = 0;

function next() {
  if (curentIndex < length - 3) {
    curentIndex++;
    const widthChange = (tourItemWidth + 12) * curentIndex;
    tourList.style.transform = `translateX(-${widthChange}px)`;
    if (!(curentIndex < length - 3)) {
        prevBtn.style.display = "block";
        nextBtn.style.display = "none";
      }
}
}
function prev() {
      if (curentIndex > 0 ) {
            curentIndex--;
            const widthChange = (tourItemWidth + 12) * curentIndex;
            tourList.style.transform = `translateX(-${widthChange}px)`;
            if (!(curentIndex > 0 )) {
                  prevBtn.style.display = "none";
                  nextBtn.style.display = "block";
            }
      }
}