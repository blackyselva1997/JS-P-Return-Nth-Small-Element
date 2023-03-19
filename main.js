let a = [2,3,1,6,2,8,3,0,3,7,3,7,5];
let num = prompt("Enter a number");
let b = [];
for (i=0;i<a.length;i++) {
    for (j=0;j<a.length-i-1;j++) {
        if (a[j] > a[j+1]) {
            b = a[j];
            a[j] = a[j+1];
            a[j+1] = b;
        }
    }
}
console.log(a[num-1]);
console.log(a);