const add = document.getElementById("add");

const notes = document.getElementById("notes");
const maker = document.getElementById("note-maker");

const cancel = document.getElementById("cancel");
const back = document.getElementById("back");
const delet = document.getElementById("delet");

const noteNamer = document.getElementById("note-name");

const save = document.getElementById("save");

let noteName = "";

add.addEventListener("click", () => {
	notes.style.display = "none";
	maker.style.display = "block";
});

cancel.addEventListener("click", () => {
	notes.style.display = "flex";
	maker.style.display = "none";
});
back.addEventListener("click", () => {
	notes.style.display = "flex";
	maker.style.display = "none";
});
delet.addEventListener("click", () => {
	notes.style.display = "flex";
	maker.style.display = "none";
});

save.addEventListener("click", () => {
	const newDiv = document.createElement("div"); //<div></div>
	const newContent = document.createElement("p"); //<p></p>

	notes.style.display = "flex";
	maker.style.display = "none";

	noteName = noteNamer.value;
	newContent.textContent = noteName;
	newDiv.appendChild(newContent); // <div> <p>noteName</p> </div>
	notes.appendChild(newDiv);

	//notes.insertBefore(notes.firstChild, newDiv);

	noteNamer.value = "";
});
