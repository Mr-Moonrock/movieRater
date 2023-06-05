// function to get the info
let currentId = 0;
let movieList = [];

$(document).ready(function () {
  $("#movieForm").on("submit", function (evt) {
    evt.preventDefault();

    let title = $(".title").val();
    let rating = $(".rating").val();
    let movieInfo = { title, rating, currentId };
    const combineInfo = createMovieInfo(movieInfo);

    currentId++;
    movieList.push(movieInfo);

    $("#tableBody").append(combineInfo);
    $("#movieForm").trigger("reset");
  });

  function createMovieInfo(info) {
    return `<tr>
    <td>${info.title}</td>
    <td>${info.rating}</td>
    <td> <button class="deleteBtn" info-delete-id="${info.currentId}">Delete</button>`;
  }

  $("tbody").on("click", ".deleteBtn", function (evt) {
    let removeRow = movieList.findIndex(
      (row) => row.currentId === +$(evt.target).data("deleteId")
    );
    movieList.splice(removeRow, 1);
    $(evt.target).closest("tr").remove();
  });
});
