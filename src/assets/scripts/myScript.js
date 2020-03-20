function showUpdatedMessageModal(message) {
    let elem = document.querySelector("#updatedMessageModal");
    let instance = M.Modal.getInstance(elem);
    document.querySelector("#strUpdatedMessage").innerHTML = message;
    instance.open();
}

function initComps() {
    //alert("Elementos Cargados");

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {});

        elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems, {});
        
        elems = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elems, {});

        elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});

        elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {});

        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    });
}