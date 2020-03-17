document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});

function showUpdatedMessageModal(message) {
    let elem = document.querySelector("#updatedMessageModal");
    let instance = M.Modal.getInstance(elem);
    document.querySelector("#strUpdatedMessage").innerHTML = message;
    instance.open();
}

function initComps() {
    //alert("Elementos Cargados");

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.materialboxed');
        let instances = M.Materialbox.init(elems, {});
    });

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.tooltipped');
        var instances = M.Tooltip.init(elems, options);
    });

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, options);
    });
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {});
    });


}