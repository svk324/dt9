/**
 * Theme: Tailfox - Tailwind Admin Dashboard Template
 * Author: Mannatthemes
 * Wizard Js
 */


const previousButton=document.getElementById("previous"),nextButton=document.getElementById("next"),submitButton=document.getElementById("validate"),form=document.getElementById("stepByStepForm"),dots=document.getElementsByClassName("progress-bar-dot"),numberOfSteps=3;let currentStep=1;for(let i=0;i<dots.length;++i)dots[i].addEventListener("click",()=>{goToStep(i+1)});function goNext(e){e.preventDefault(),goToStep(currentStep+=1)}function goPrevious(e){e.preventDefault(),goToStep(currentStep-=1)}function goToStep(e){currentStep=e;let t=document.getElementsByClassName("step"),o=document.getElementsByClassName(`step${currentStep}`),n=document.getElementsByClassName("progress-bar-dot");for(let s=n.length-1;s>=currentStep;--s)n[s].classList.remove("bg-primary-500");for(let r=0;r<currentStep;++r)n[r].classList.add("bg-primary-500");for(let l=0;l<t.length;++l)hide(t[l]);for(let u=0;u<o.length;++u)show(o[u]);3===currentStep?(enable(previousButton),hide(nextButton),show(submitButton)):1===currentStep?(disable(previousButton),enable(next),hide(submitButton),show(nextButton)):(enable(previousButton),enable(next),hide(submitButton),show(nextButton))}function enable(e){e.classList.remove("cursor-not-allowed"),e.classList.remove("opacity-50"),e.disabled=!1}function disable(e){e.classList.add("cursor-not-allowed"),e.classList.add("opacity-50"),e.disabled=!0}function show(e){e.classList.remove("hidden")}function hide(e){e.classList.add("hidden")}previousButton.onclick=goPrevious,nextButton.onclick=goNext;