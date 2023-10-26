$(document).ready(function () {
  $("#myDiv").click(function () {
    $(this).css("background-color", "#f39c12");

    $.ajax({
      url: "http://data.nba.net/10s/prod/v1/2016/players.json",
      method: "GET",
      success: function (data) {
        console.log(data);
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
  });
});
