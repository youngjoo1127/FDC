function marginBottom(x) {
    return 1.5/x;
}

function lineHeight(x){
   return Math.ceil(x/1.5) * marginBottom(x);
}

function fontSize(x, ratio) {
    ratio = ratio || 1.25;
    var headings = {};
    headings.h6 = x * ratio;
    headings.h5 = x * ratio * ratio;
    headings.h4 = x * ratio * ratio * ratio;
    headings.h3 = x * ratio * ratio * ratio * ratio;
    headings.h2 = x * ratio * ratio * ratio * ratio * ratio;
    headings.h1 = x * ratio * ratio * ratio * ratio * ratio * ratio;
    return headings;
}
