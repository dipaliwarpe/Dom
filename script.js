const changeColorById = () => {
    document.getElementById("root").style.color = "red";
  }
  
  const changeColorByClass = () => {
    document.getElementsByClassName('blue-white')[0].style.color =
      "white";
    document.getElementsByClassName('blue-white')[0].style.backgroundColor =
      "blue";
    document.getElementsByClassName('blue-white')[1].style.color =
      "white";
    document.getElementsByClassName('blue-white')[1].style.backgroundColor =
      "blue";
  }
  
  const defaultFont = () => {
    document.getElementsByClassName('blue-white')[0].style.color =
      "black";
    document.getElementsByClassName('blue-white')[0].style.backgroundColor =
      "white";
    document.getElementsByClassName('blue-white')[1].style.color =
      "black";
    document.getElementsByClassName('blue-white')[1].style.backgroundColor =
      "white";
  }
  
  const changeFontSize = (x) => {
    x.style.fontSize = "50px";
  }
  
  const normalFontSize = (y) => {
    y.style.fontSize = "20px";
  }
  
  const defaultColor = (x) => {
    x.style.color = "black";
  }