const add = document.getElementById("add");

const notes = document.getElementById("notes");
const maker = document.getElementById("note-maker");

const cancel = document.getElementById("cancel");
const back = document.getElementById("back");
const delet = document.getElementById("delet");

const noteNamer = document.getElementById("note-name");
const tags = document.getElementById("tags");

const save = document.getElementById("save");

let noteName = "";

add.addEventListener("click", () => {
	notes.style.display = "none";
	maker.style.display = "block";
});

cancel.addEventListener("click", () => {
	notes.style.display = "flex";
	maker.style.display = "none";
	noteNamer.value = "";
});
back.addEventListener("click", () => {
	notes.style.display = "flex";
	maker.style.display = "none";
});
delet.addEventListener("click", () => {
	notes.style.display = "flex";
	maker.style.display = "none";
	noteNamer.value = "";
});

save.addEventListener("click", () => {
	const newDiv = document.createElement("div"); //<div></div>
	const newContent = document.createElement("h2"); //<p></p>
	const tag1 = document.createElement("p");
	const tag2 = document.createElement("p");
	const containerDiv = document.createElement("div");
	const hr = document.createElement("hr")

	notes.style.display = "flex";
	maker.style.display = "none";

	noteName = noteNamer.value;

	newContent.textContent = noteName;
	tag1.textContent = "Dev";
	tag2.textContent = "React";

	newDiv.appendChild(newContent); // <div> <p>noteName</p> </div>7
	newDiv.appendChild(containerDiv);

	containerDiv.appendChild(tag1); // <div> <p>noteName</p> </div>
	containerDiv.appendChild(tag2); // <div> <p>noteName</p> </div>

	newDiv.appendChild(hr)

	newDiv.classList.add("newDiv");
	containerDiv.classList.add("containerDiv");
	tag1.classList.add("tags")
	tag2.classList.add("tags")

	notes.appendChild(newDiv);

	//notes.insertBefore(notes.firstChild, newDiv);
	noteNamer.value = "";
});
