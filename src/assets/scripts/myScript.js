M.AutoInit();

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