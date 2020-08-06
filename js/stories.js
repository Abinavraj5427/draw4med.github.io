// const baseURL = "";
$(document).ready(function () {

    var root = document.getElementById("stories-row");
    while (root.firstChild) {
        root.removeChild(root.lastChild);
    }
    var url = baseURL + "?action=read&sheetname=Stories";
    //reads  data
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "json",
        success: function (data) {

            // console.log(data);
            data.records.map(element => {
                let div1 = document.createElement("div");
                div1.className = "col mb-4";
                let div2 = document.createElement("div");
                div2.className = "card h-100";
                div2.setAttribute('data-toggle', 'modal');
                div2.setAttribute('data-target', '#storyModal');
                let div3 = document.createElement("div");
                div3.className = "imgHolder";



                storage.ref().child('stories/' + element.Image).getDownloadURL().then(function (url) {

                    let img = document.createElement("img");
                    img.src = url;
                    img.className = "card-img-top";
                    img.alt = element.Title;
                    // console.log(element);
                    // console.log(element.Title);

                    div3.appendChild(img);
                    div2.appendChild(div3);
                    div1.appendChild(div2);
                    root.appendChild(div1);

                }).catch(function (error) {
                    // Handle any errors
                    console.log(error);
                });


            });
        }
    });
});