let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true; //playerX, playerO
const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

const resetGame=()=>{
   turn0=true;
   enableboxes();
   msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
  
    if(turn0)
    {
      box.innerText="O";
      turn0=false;
    }
    else
    {
      box.innerText="X";
      turn0=true;
    }
    box.disabled=true;
    checkWinner(); 
 }) 
})

const disableBoxes=()=>
{
  for(box of boxes)
  {
    box.disabled=true;
  }
}

const enableboxes=()=>
{
  for(box of boxes)
  {
    box.disabled=false;
    box.innerText="";
  }
}

const showWinner=(winner)=>
{
  msg.innerText=`Congratulations,winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner=()=>
{
   for(let pattern of winPatterns)
   {
   
      let pos1val=boxes[pattern[0]].innerText;  //pos1
      let pos2val=boxes[pattern[1]].innerText;  //pos2
      let pos3val=boxes[pattern[2]].innerText ;//pos3

      if(pos1val!="" && pos2val!="" && pos3val!="")
      {
        if(pos1val===pos2val && pos2val===pos3val)
        {
          
          showWinner(pos1val);
        }
      }
   }
};


newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);