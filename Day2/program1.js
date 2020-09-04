console.log("Program to search for a particular character in a string")
a='abishek'
c='q'


for(i=0;i<a.length;i++){
    if(a[i]==c){
        console.log(c,"Found in",a);
    }
    else{
        console.log(c,'Not Found in',a);
    }
}