var text=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
            ["some students like to study in the night","at night some students like to study"],
            ["John and Mary went to church","Mary and John went to church"],
            ["John went to church after eating","after eating John went to church","John after eating went to church"],
            ["did he go to market","he did go to market"],
            ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
            ["John goes to the library and studies","John studies and goes to the library"],
            ["John ate an apple so did she","she ate an apple so did John"],
            ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
            ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]
        ];

var text_hindi=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
            ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
            ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
            ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
            ["क्या वो बाजार गया","वो क्या बाजार गया","क्या बाजार वो गया","वो बाजार क्या गया","बाजार क्या वो गया","बाजार वो क्या गया","क्या वो गया बाजार","वो क्या गया बाजार","क्या गया वो बाजार","वो गया क्या बाजार","गया क्या वो बाजार","गया वो क्या बाजार","गया क्या बाजार वो","क्या गया बाजार वो","गया बाजार क्या वो","क्या बाजार गया वो","बाजार गया क्या वो","बाजार गया क्या वो","वो बाजार गया क्या","बाजार वो गया क्या","बाजार गया वो क्या","वो गया बाजार क्या","गया वो बाजार क्या","गया बाजार वो क्या"],
            ["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
            ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
            ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]
          ];
var total_hindi=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया"  ,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"];
var demo;var sentence;
var selection;
function langselect(){
    var corpus=[]
    document.getElementById("start").innerHTML="<b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b><br>(select the buttons in proper order)";
    if(document.getElementById("language").value=="English"){
        corpus=text;
    }
    else{
        corpus=text_hindi;
    }
division=document.getElementById("w_buttons");
    division.innerHTML="";
    if(document.getElementById("language").value=="English"){
        corpus=text;
    }
    else{
        corpus=text_hindi;
    }
    var temp;
    ind=Math.floor(Math.random()*corpus.length);
    sentence=corpus[ind][0];
    words=sentence.split(" ");
    for(var n=0;n<words.length;n++){
        ind=Math.floor(Math.random()*words.length);
        temp=words[ind];
        words[ind]=words[n];
        words[n]=temp;
    }
    demo=words;
    re_click(words);
  }
    var sel_sentence="";
    function re_click(words)
    {
      var sel_sentence="";var but=[];var word_length=words.length;
    for(var i=0;i<words.length;i++){
        but[i]=document.createElement("input");
        but[i].type="button";
        but[i].value=words[i];
        but[i].style.display="inline";
        but[i].style.margin="0px 5px";
        but[i].onclick=function(){
          word_length--;
            sel_sentence+=this.value+" ";
            document.getElementById("end").innerHTML=sel_sentence;
            this.style.display="none";
            document.getElementById("reform_button").style.visibility="visible";
            document.getElementById("reform_text").style.visibility="visible";
            if(word_length==0)
            {
              document.getElementById("check").style.visibility="visible";
            }
            };
        division.appendChild(but[i]);
        selection=sel_sentence;
    }
}
function reform_words()
{division=document.getElementById("w_buttons");
    division.innerHTML="";
    var sel_sentence="";selection="";
    document.getElementById("end").innerHTML=sel_sentence;
  re_click(demo);

}
function check_sent()
{
  var demo_str="";
  var demo_str=document.getElementById("end").innerHTML;
  var dem_str=demo_str.substring(0,demo_str.length-1);
  if(document.getElementById("language").value=="English"){
      corpus=text;
  }
  else{
      corpus=text_hindi;
  }
  for(var i=0;i<corpus.length;i++)
  {
  for(var j=0;j<corpus[i].length;j++)
  {
    if(sentence==corpus[i][j])
    {
      if(dem_str==corpus[i][j])
      {
        var s1="Correct Answer!"
        document.getElementById("correct").style.color="green";
        break;
      }
      else
        {
          var s1="Wrong Answer!"
          document.getElementById("correct").style.color="red";
          document.getElementById("get_ans").style.visibility="visible";
        }
      }
    }
  }
document.getElementById("correct").innerHTML=s1;
}
function get_ans()
{
  var arr=[];
  division=document.getElementById("answer");
  for(var i=0;i<corpus.length;i++)
  {
  for(var j=0;j<corpus[i].length;j++)
  {
    if(sentence==corpus[i][j]){
      var correct_answers=corpus[i];
      break;
    }}}
    for(var k=0;k<correct_answers.length;k++){
    arr[k]=document.createElement("p");
    arr[k].type="text";
    arr[k].innerHTML=correct_answers[k];
    // arr[i].onclick=
    division.appendChild(arr[k]);
  }

}
