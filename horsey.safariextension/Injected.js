document.addEventListener('contextmenu', handleContextMenu, false);

function handleContextMenu(event)
{
    var target = event.target;
    var info = new Object();
    
    if (target.nodeName.toLowerCase() === "img")
    {
        info.imageSrc = target.src;
    }
    
    while(target != null && target.nodeType == Node.ELEMENT_NODE && target.nodeName.toLowerCase() != "a")
    {
        target = target.parentNode;
    }

    if(target.href)
    {
        info.href = target.href;
    }

    safari.self.tab.setContextMenuEventUserInfo(event, info);
}
