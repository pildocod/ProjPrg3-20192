function openPlatformModalMessage(message) {
    document.querySelector("#pMessage").innerHTML = message;
    openModal('modalMessage');
}

function openConfirmationModal() {
    openModal("modalConfirmation")
}

let openModal = (modalId) => {
    var elem = document.querySelector(`#${modalId}`);
    let instance = M.Modal.init(elem, {});
    instance.open();
}
