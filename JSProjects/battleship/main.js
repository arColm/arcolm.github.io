(()=>{"use strict";class t{constructor(t){this.activePositions=t,this.length=t.length}getActivePositions(){return this.activePositions}isSunk(){return 0===this.activePositions.length}hit(t,e){let r=this.activePositions.findIndex((r=>r[0]===t&&r[1]===e));return r>=0&&(this.activePositions.splice(r,1),!0)}}class e{constructor(t){this.ships=[],this.size=t,this.board=[];for(let e=0;e<t;e++){this.board.push([]);for(let r=0;r<t;r++)this.board[e].push(0)}}getShips(){return this.ships}getSize(){return this.size}getBoard(){return this.board}addShip(e,r,i){let o=function(e,r,i){if(e<0)throw new Error("Invalid length");if(!Array.isArray(r))throw new Error("Invalid head position. Head position must be an array.");if(2!=r.length)throw new Error("Invalid head position. Head position must have 2 coordinates [x,y].");if("north"!==i&&"west"!==i)throw console.log(i),new Error("Invalid direction faced");let o=[],a=r[0],s=r[1];for(let t=0;t<e;t++)o.push([a,s]),"north"===i&&s++,"west"===i&&a++;return new t(o)}(e,r,i);switch(i){case"north":if(r[1]+e>this.size)throw new Error("Ship is out of bounds");break;case"west":if(r[0]+e>this.size)throw new Error("Ship is out of bounds")}let a=!1;return o.getActivePositions().forEach((t=>{let e=t[0],r=t[1];if(0!==this.board[r][e])return a=!0,-1})),a?-1:(o.getActivePositions().forEach((t=>{let e=t[0],r=t[1];this.board[r][e]=1})),this.ships.push(o),this.ships)}receiveAttack(t,e){if(t<0||e<0||t>=this.size||e>=this.size)throw new Error("Invalid coordinates");return!!this.ships.some((r=>{if(r.hit(t,e))return this.board[e][t]=3,!0}))||(0===this.board[e][t]?(this.board[e][t]=2,!0):2!==this.board[e][t]&&3!==this.board[e][t]&&void 0)}allShipsSunk(){return this.ships.every((t=>t.isSunk()))}randomizeBoard(t){let e=Math.random()>.5?"north":"west",r=!1;for(;!r;){let i=Math.floor(Math.random()*(t-2)),o=Math.floor(Math.random()*(t-2));-1!==this.addShip(3,[o,i],e)&&(r=!0)}for(let i=0;i<2;i++)for(e=Math.random()>.5?"north":"west",r=!1;!r;){let i=Math.floor(Math.random()*(t-1)),o=Math.floor(Math.random()*(t-1));-1!==this.addShip(2,[o,i],e)&&(r=!0)}for(let i=0;i<2;i++)for(e=Math.random()>.5?"north":"west",r=!1;!r;){let i=Math.floor(Math.random()*t),o=Math.floor(Math.random()*t);-1!==this.addShip(1,[o,i],e)&&(r=!0)}return!0}receiveRandomAttack(t){let e=!1;for(;!e;){let r=Math.floor(Math.random()*t),i=Math.floor(Math.random()*t);if(this.receiveAttack(i,r))return e=!0,!0}}}function r(t){return new e(t)}const i=document.querySelector("#content"),o=document.querySelector("#header");class a{constructor(t,e,r,i){this.playerBoard=t,this.playerBoardElement=e,this.computerBoard=r,this.computerBoardElement=i,this.inProgress=!0}getPlayerBoard(){return this.playerBoard}getPlayerBoardElement(){return this.playerBoardElement}getComputerBoard(){return this.computerBoard}getComputerBoardElement(){return this.computerBoardElement}finishGame(){return this.inProgress=!1,this.inProgress}}function s(t){r(t);const e=document.createElement("div");e.setAttribute("class","gameboard");const i=document.createElement("table");for(let e=0;e<t;e++){let e=document.createElement("tr");for(let r=0;r<t;r++){let t=document.createElement("td");e.appendChild(t),t.setAttribute("class","empty unhit"),t.addEventListener("click",(t=>{}))}i.appendChild(e)}return e.appendChild(i),e}function n(t,e){let r,i;switch(e){case"player":r=t.getPlayerBoard().getBoard(),i=t.getPlayerBoardElement().firstChild.children;break;case"computer":r=t.getComputerBoard().getBoard(),i=t.getComputerBoardElement().firstChild.children;break;default:throw new Error("Invalid player")}for(let t=0;t<6;t++){let o=i[t].children;for(let i=0;i<6;i++){let a=o[i];switch(r[t][i]){case 0:a.setAttribute("class","empty unhit");break;case 1:"player"===e&&a.setAttribute("class","ship unhit");break;case 2:a.setAttribute("class","empty hit");break;case 3:a.setAttribute("class","ship hit");break;default:throw new Error("Invalid game board.")}}}}function h(t){let e=t.getComputerBoard(),r=t.getPlayerBoard(),i=o.firstChild;return e.allShipsSunk()?(t.finishGame(),i.innerHTML="Player Wins","player"):!!r.allShipsSunk()&&(t.finishGame(),i.innerHTML="Computer Wins","computer")}function l(){i.replaceChildren();const t=r(6),e=s(6);e.setAttribute("class","gameboard playerBoard");const o=r(6),l=s(6);l.setAttribute("class","gameboard computerBoard"),i.appendChild(e),i.appendChild(l),t.randomizeBoard(6),o.randomizeBoard(6);let d=new a(t,e,o,l);return n(d,"player"),function(t){let e=t.getComputerBoard(),r=t.getPlayerBoard(),i=t.getComputerBoardElement().firstChild.children;for(let o=0;o<6;o++){let a=i[o].children;for(let i=0;i<6;i++){let s=a[i];s.addEventListener("click",(a=>{"empty unhit"!==s.getAttribute("class")&&"ship unhit"!==s.getAttribute("class")||t.inProgress&&(e.receiveAttack(i,o),n(t,"computer"),r.receiveRandomAttack(6),n(t,"player"),h(t))}))}}}(d),d}!function t(){o.replaceChildren();const e=document.createElement("h1");o.appendChild(e);const r=document.createElement("button");r.setAttribute("type","button"),r.innerHTML="New Game",r.addEventListener("click",(e=>{t(),l()})),o.appendChild(r)}(),l()})();