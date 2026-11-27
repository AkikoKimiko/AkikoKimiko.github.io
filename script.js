const stories={
en:{heading:"The story behind the art",text:`Two souls finding each other.

The moment they recognize one another. As if they had shared a thousand lifetimes and found their way back to each other again and again.

When two worlds meet and something emerges that is greater than the sum of its parts. A magic that cannot be explained and needs no words.

Sometimes, we do not meet someone for the first time. We simply remember them.

Because sometimes, everything has already been said without a single word.`},
de:{heading:"Die Geschichte hinter dem Werk",text:`Eine Begegnung zweier Seelen, die sich finden.

Der Moment, in dem sie einander erkennen. Wiedererkennen. Als hätten sie bereits tausende Leben miteinander geteilt und sich immer wieder gefunden.

Wenn zwei Welten aufeinandertreffen und etwas entsteht, das größer ist als die Summe ihrer Teile. Eine Magie, die sich nicht erklären lässt und keiner Worte bedarf.

Denn manchmal begegnet man einem Menschen nicht zum ersten Mal. Man erinnert sich lediglich wieder an ihn.

Wo keine Worte nötig sind, weil längst alles gesagt ist.`}
};
function setStoryLanguage(language){
const heading=document.getElementById("story-heading"),text=document.getElementById("story-text"),en=document.getElementById("lang-en"),de=document.getElementById("lang-de");
if(!heading||!text||!en||!de)return;
heading.textContent=stories[language].heading;text.textContent=stories[language].text;
en.classList.toggle("active",language==="en");de.classList.toggle("active",language==="de");
}
