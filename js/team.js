const teamB = document.querySelectorAll(".team__button");
const teamI = document.querySelectorAll(".team__item");
const teamL = document.querySelectorAll(".team__item team__item_folded")

console.log(teamB);
// console.log(teamI);


teamB[0].addEventListener('click', e => {
  console.log(teamB[0]);
  teamB[0].classList.add('team__button_folded');
  console.log(teamB[0]);
  // const teamL = teamB[0];
  teamI[0].classList.remove('team__item_folded');
  teamI[1].classList.add('team__item_folded');
  teamI[2].classList.add('team__item_folded');
  teamI[3].classList.add('team__item_folded');
  const teamF = document.querySelector(".team__button_folded");
  console.log(teamF);
  
  // console.log(teamL);
  
  teamF.addEventListener('click', e=> {
    
    teamI[0].classList.add('team__item_folded');
    console.log(teamB[0]);
    teamB[0].classList.remove('team__button_folded');
    console.log(teamB[0]);

    teamB[0].addEventListener('click', e => {
      
    if (teamL == 'team__item team__item_folded') {teamI[0] ='team__item_folded';}
    })
    // console.log(teamI);
    // console.log(teamB);
    
    
  })
  
})


// if (teamL == 'team__item team__item_folded') {teamI[0] ='team__item_folded';}
//     } else { teamI !='team__item' } teamB[0].classList.remove('team__button_folded');