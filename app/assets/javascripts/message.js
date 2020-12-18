$(function(){
  $('.form').on("submit",function(e){
    e.preventDefault();
    let formData = new FormData(this);
