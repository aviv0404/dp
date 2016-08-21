var commentBot = function() {
    setInterval(function() {
        var o = null,
            t = "",
            e = document.getElementById("qr_submit"),
            l = document.getElementsByTagName("iframe");
        for (i = 0; i < l.length; i++)
            if (attr = l[i].getAttribute("title"), "Rich text editor, vB_Editor_QR_editor, press ALT 0 for help." == attr) {
                o = l[i];
                break
            }
        textarea = o.contentDocument.getElementsByClassName("forum")[0];
        var r = ["shtok","1","mone"],
            c = Math.floor(Math.random() * r.length + 1),
            n = Math.floor(18 * Math.random() + 1);
        for (i = 0; i <= n; i++) t += r[c - 1], c = Math.floor(Math.random() * r.length + 1);
        t.includes("[size") && (t += "[/size][color=white]b[/color]"), t.includes("[u") && (t += "[/u][color=white]b[/color]"), t.includes("[i") && (t += "[/i][color=white]b[/color]"), t.includes("[font") && (t += "[/font][color=white]b[/color]"), t.includes("[color") && (t += "[/color][color=white]b[/color]"), t.includes("[b") && (t += "[/b][color=white]b[/color]"), textarea.innerHTML = t, e.click()
    }, 5001)
};
commentBot();
