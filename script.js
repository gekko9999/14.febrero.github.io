$(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".carta").stop().animate(
          {
            top: "-90px",
          },
          "slow"
        );
      })
      .mouseleave(function () {
        $(".carta").stop().animate(
          {
            top: 0,
          },
          "slow"
        );
      });
  });