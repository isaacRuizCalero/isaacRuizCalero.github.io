<template>
    <div>
        <h1>Technologies</h1>
        <hr />
    </div>

    <div class="contain scroller" data-direction="left" data-animated="true">
        <ul id="baby-names" class="scroller__inner">
            <li onclick="buttonClick(this)">HTML</li>
            <li onclick="buttonClick(this)">CSS</li>
            <li onclick="buttonClick(this)">JS</li>
            <li onclick="buttonClick(this)">Figma</li>
            <li onclick="buttonClick(this)">Bootstrap</li>
            <li onclick="buttonClick(this)">Java</li>
            <li onclick="buttonClick(this)">PHP</li>
            <li onclick="buttonClick(this)">VUE</li>
            <li onclick="buttonClick(this)">Photoshop</li>
            <li onclick="buttonClick(this)">Premiere</li>
            <li onclick="buttonClick(this)">Lightroom</li>
        </ul>
    </div>

</template>

<script>
const scrollers = document.querySelectorAll(".scroller");
const list = document.querySelector("#baby-names");
const toggleButton = document.querySelector("#toggleAnimationButton");
const toggleDirectionButt = document.querySelector("#toggleDirection");
const docFooter = document.querySelector("footer");

/*Does user not want motion?*/
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  console.log("k, move");
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
  });
};

/*add the data-animated attribute*/
function addAnimation() {
  scrollers.forEach((scroller) => {
    toggleAnimation(scroller);
  });
  const list__content = Array.from(list.children);
  list__content.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
// Prevent screen reader from seeing extra node    
    duplicatedItem.setAttribute("aria-hidden", true);
    list.appendChild(duplicatedItem);
  });
}

function buttonClick(bname) {
  console.log(bname.innerText);
}
function toggleAnimationButton() {
  scrollers.forEach((scroller) => {
    toggleAnimation(scroller)
  });
}
function toggleDirection() {
  scrollers.forEach((scroller) => {
    if (scroller.getAttribute("data-direction") === "right") {
      scroller.setAttribute("data-direction", "left");
      toggleDirectionButt.innerHTML = "-->";
      return;
    }
      scroller.setAttribute("data-direction", "right");
      toggleDirectionButt.innerHTML = "<--";
  });
}
function toggleAnimation (scroller) {
  if (scroller.getAttribute("data-animated") === "true") {
    scroller.setAttribute("data-animated", false);
    toggleButton.innerHTML = "Play Animation?";
    return;
  }
    scroller.setAttribute("data-animated", true);
    toggleButton.innerHTML = "Stop Animation?";
}
</script>

<style>
:root {
  --clr-bkg: #1F0812;
  --clr-dark: #37515F;
  --clr-bright: #E4959E;
  --clr-tint: #B98B82;
  --clr-nice: #F3B3A6;
  --time-scroll: 20s;
  --direction-scroll: forwards;
}

.contain {
  width: 40%;
  margin-inline: auto;
  background: #37515F;
  border-radius: .5rem;
}

#baby-names, #baby-names_2 {
  margin: 0;
  padding-inline: 0;
  list-style: none;
}

#baby-names {
  background: #F3B3A6;
}

#baby-names_2 {
  background: #B98B82;
}

ul li {
  --_clr-bright: transparent;
  padding: 1rem;
  background: silver;
  border-radius: 0.5rem;
  user-select: none;
  border: 2px var(--_clr-bright) solid;
  margin-inline: auto;
}
li:hover {
  --_clr-bright: #E4959E;
  cursor: pointer;
  box-shadow: 1px 2px 2px 2px var(--clr-dark);
}

.scroller {
  max-width: 600px;
/*   border: 2px red solid; */
}
.scroller[data-animated="true"] {
  overflow: hidden;
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  /* For Chromium   */
  /*-webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);*/
}
.scroller[data-direction="left"] {
  --_direction-scroll: forwards;
}
.scroller[data-direction="right"] {
  --_direction-scroll: reverse;
}
.scroller[data-animated="true"] .scroller__inner {
  width: fit-content;
  flex-wrap: nowrap; 
  animation: scroll var(--time-scroll) var(--_direction-scroll, reverse) linear infinite;
  &:hover {
    animation-play-state: paused;
  }
}
.scroller__inner {
  padding-block: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.scroller__allow_scroll {
  /*  overflow-x: scroll;
  overflow-y: hidden;    */
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
@media (prefers-reduced-motion) {
  .scroller[data-animated="true"] .scroller__inner {
    animation: none;
  }
}
</style>