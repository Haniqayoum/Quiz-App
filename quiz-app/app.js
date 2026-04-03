*{
    font-size: 20px;
    text-align: center;
    justify-content: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.hidden{
    display: none;
}
.container{
    margin-top: 50px;
}
header{
    background-color: black;
    color: white;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* box-shadow: -17px -6px 20px -6px rgba(0, 0, 0, 0.6); */

}
#profilePhotoImg{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: none;
    overflow: hidden;
    cursor: pointer;
}
.profile-Photo{
    width: 10px;
    height: 10px;
    border-radius: 50px;
    overflow: hidden;
    cursor: pointer;
}
.profile-Photo img{
    width: 50%;
    height: 50%;
    object-fit: cover;
    border-radius: 50%;
}
#submit{
    float: right;
}
#result-container{
    width: 400px;
}
.heading{
    color: white;
}
#score{
    color: green;
}
.options{
    border: 1px solid gray;
    border-radius:5px ;
    margin: 10px;
    padding: 8px;
}
.options:hover{
    transition: 0.5s;
    transform: scale(1.03);
    border: 2px solid green;
}
label:hover{
    transition: 0.5s;
    transform: scale(1.03);
    border: 2px solid black;
}
.btn:hover{
    cursor: pointer;
    transition: 1s;
    transform: scale(1.1);
}
#previousButton{
    text-align: center;
    justify-content: center;
}
#nextButton{
    text-align: center;
    justify-content: center;
}
