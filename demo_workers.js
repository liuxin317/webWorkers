var i=0;

function timedCount()
{
i=i+1;
postMessage(i); // 向页面传回消息
setTimeout("timedCount()",500);
}

timedCount();