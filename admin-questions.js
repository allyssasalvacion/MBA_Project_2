$(document).ready(function(){
    var index = 1;
    $("#dropdown-admin").change(function(){
        var selected = $(this).children("option:selected").text();
        if (selected === "Subquestion") {
            $("#modal-body").append(
                '<div class="form-group green-border-focus element" id="div_'+ index +'">'
                +'<div class="row vertical-center">'
                + '<div class="col-10">'
                + '<label for="subquestion-admin-box">Subquestion</label>'
                + '</div>'
                + '<div class="col-2">'
                + '<button type="button" class="close delete" id="delete_' + index + '" aria-label="Close">'
                + '<span aria-hidden="true">&times;</span>'
                + '</button>'
                + '</div>'
                + '</div>'
                + '<textarea class="form-control" id="subquestion-admin-box" rows="3"></textarea>' 
                + '</div>'
                );
        } else if (selected === "Multiple Answers") {
            $("#modal-body").append(
                '<div class="form-group green-border-focus" id="div_'+ index +'">'
                +'<div class="row vertical-center">'
                + '<div class="col-10">'
                + '<label for="multiple-answers-admin" id="answer">Answer: </label>'
                + '</div>'
                + '<div class="col-2">'
                + '<button type="button" class="close delete" id="delete_' + index + '" aria-label="Close">'
                + '<span aria-hidden="true">&times;</span>'
                + '</button>'
                + '</div>'
                +'<div class="col-10 answer-box">'
                +'<div class="custom-control custom-checkbox">'
                +'<input type="checkbox" class="custom-control-input" id="default1" editable>'
                +'<label contenteditable="true" class="custom-control-label" for="default1">Option 1</label>'
                +'</div>'
                +'<div class="custom-control custom-checkbox">'
                +'<input type="checkbox" class="custom-control-input" id="default2" editable>'
                +'<label contenteditable="true" class="custom-control-label" for="default2">Option 2</label>'
                +'</div>'
                +'</div>'
                // +'<div class="col-2">'
                // + '<button type="button" class="float-right" id="add-option">'
                // + '<i class="fas fa-plus"></i>'
                // + '</button>'
                // + '</div>'
                + '</div>'
            );
        } else if (selected === "Multiple Choice") {
            $("#modal-body").append(
                '<div class="form-group green-border-focus" id="div_'+ index +'">'
                +'<div class="row vertical-center">'
                + '<div class="col-10">'
                + '<label for="multiple-answers-admin" id="answer">Answer: </label>'
                + '</div>'
                + '<div class="col-2">'
                + '<button type="button" class="close delete" id="delete_' + index + '" aria-label="Close">'
                + '<span aria-hidden="true">&times;</span>'
                + '</button>'
                + '</div>'
                + '</div>'
                +'<div class="col-10 answer-box" id="radiogroup1">'
                +'<div class="custom-control custom-radio" >'
                +'<input type="radio" class="custom-control-input" id="default1" name="groupOfDefaultRadio">'
                +'<label contenteditable="true" class="custom-control-label" for="default1">Option 1</label>'
                +'</div>'
                +'<div class="custom-control custom-radio">'
                +'<input type="radio" class="custom-control-input" id="default2" name="groupOfDefaultRadio">'
                +'<label contenteditable="true" class="custom-control-label" for="default2">Option 2</label>'
                +'</div>'
                +'</div>'
                // +'<div class="col-2">'
                // + '<button type="button" class="float-right" id="add-option">'
                // + '<i class="fas fa-plus"></i>'
                 + '</button>'
                 +'</div>'
                + '</div>'
            );
        } else if (selected === "Identification") {
            $("#modal-body").append(
                '<div class="form-group green-border-focus" id="div_'+ index +'">'
            +'<div class="row vertical-center">'
            + '<div class="col-10">'
            + '<label for="subquestion-admin-box">Answer: </label>'
            + '</div>'
            + '<div class="col-2">'
            + '<button type="button" class="close delete" id="delete_' + index + '" aria-label="Close">'
            + '<span aria-hidden="true">&times;</span>'
            + '</button>'
            + '</div>'
            + '</div>'
            + '<input type="text" id="exampleForm2" class="form-control">'  
            + '</div>'
            );
        } else if(selected === "Essay") {
            $("#modal-body").append(
            '<div class="form-group green-border-focus" id="div_'+ index +'">'
            +'<div class="row vertical-center">'
            + '<div class="col-10">'
            + '<label for="subquestion-admin-box">Answer: </label>'
            + '</div>'
            + '<div class="col-2">'
            + '<button type="button" class="close delete" id="delete_' + index + '" aria-label="Close">'
            + '<span aria-hidden="true">&times;</span>'
            + '</button>'
            + '</div>'
            + '</div>'
            + '<textarea class="form-control" id="subquestion-admin-box" rows="3"></textarea>' 
            + '</div>'
            );
        } else if(selected === "Image") {
            $("#modal-body").append(
                '<div class="form-group green-border-focus" id="div_'+ index +'">'
                +'<div class="row vertical-center">'
                + '<div class="col-10">'
                + '<label for="subquestion-admin-box">Select Images</label>'
                + '</div>'
                + '<div class="col-2">'
                + '<button type="button" class="close delete" id="delete_' + index + '" aria-label="Close">'
                + '<span aria-hidden="true">&times;</span>'
                + '</button>'
                + '</div>'
                + '</div>'
                +'<form class="float-left span-browse" action="/action_page.php">'
                +'<input type="file" name="img" class="input-default-js" multiple>'
                +'</form>'
                + '</div>'
               
            );
        }
        index++;
        $("#dropdown-admin").val(0); 
    });

    $(document).on('click', '.delete', function() {
        var id = this.id;
        var split_id = id.split("_");
        var deleteindex = split_id[1];

        // Remove <div> with id
        $("#div_" + deleteindex).remove();
    });

    $("#add-option").click(function () {
        $("#radiogroup1").append(
            '<div class="custom-control custom-radio">'
                +'<input type="radio" class="custom-control-input" id="default3" name="groupOfDefaultRadio">'
                +'<label contenteditable="true" class="custom-control-label" for="default3">Option 3</label>'
                +'</div>');
      });
});

