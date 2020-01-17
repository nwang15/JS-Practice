function addComment()
{
    var validOption = document.getElementById("gameOption");
    if(validOption.selectedIndex <= 0)
    {
        alert("Please select a game")
    }
    else
    {
        var ul = document.getElementById("comment-list");
        var comment = document.getElementById("message");
        var li = document.createElement("li");
        li.setAttribute("id",comment.value);
        li.appendChild(document.createTextNode(comment.value))
        ul.appendChild(li);
        comment.value=''; 
    }
   
}