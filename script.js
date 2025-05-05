//your JS code here. If required.
let form=document.querySelector("form");
let btn=document.querySelector("#submit"); 
let table=document.querySelector("table")
btn.addEventListener("click",(e)=>{
	e.preventDefault();
	let title=document.querySelector("#title").value;
	let author=document.querySelector("#author").value;
	let isbn=document.querySelector("#isbn").value;	
	let tbody=document.querySelector("#book-list")

	let tr=document.createElement("tr");
	let td1=document.createElement("td");
	td1.innerText=title;
	let td2=document.createElement("td");
	td2.innerText=author;
	let td3=document.createElement("td");
	td3.innerText=isbn;
	let td4=document.createElement("td");
	let del=document.createElement("button");
	del.innerText = "X";
	del.className = "delete";
	del.style.background="red";
	del.style.color="white";
	del.style.background="red";
	td4.append(del);
	del.addEventListener("click", () => {
        tr.remove();
      });
	tr.append(td1,td2,td3,td4);
	tbody.append(tr)
	table.append(tbody);
	
})