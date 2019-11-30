$(document).ready(function () {
    $('#dtBasicExample').DataTable({
        "language": {
            "url": "../lib/dataTables/DataTables-1.10.20/Portuguese-Brasil.json"
        },
        "lengthChange": false
    });
    $('.dataTables_length').addClass('bs-select');
});