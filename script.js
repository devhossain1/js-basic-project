{/* <div class="counter-container">
    <i class="fas fa-users fa-3X"></i>
    <div class="counter" data-target="1500"></div>
    <span>our happy client</span>
   </div> */}

const counters = document.querySelectorAll('.counter');
counters.forEach((counter) =>{
    counter.innerHTML= 0;
    const updateCounter = () =>{
        const targetCount = +counter.getAttribute('data-target');
        //console.log(typeof targetCount);
        const startingCount = Number(counter.innerHTML);
        const incr = targetCount/100;
        if(startingCount< targetCount){
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 100);
        }else{
            counter.innerHTML = targetCount; 
        }

    }
    updateCounter();
})