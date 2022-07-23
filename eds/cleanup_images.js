var changed_images = [];

$("img.IdPSelectIdPImg").on("error", function() {
    let entityID = $(this).parent().parent().parent().attr("data-entityid");
    entityID = entityID.replaceAll("/", ".");
    entityID = entityID.replaceAll(":", ".");

    if ($.inArray(entityID, changed_images) != -1) {
        return;
    } else {
        changed_images.push(entityID);
    }

    let imagePath = "missing_logos/" + entityID + ".png";
    console.log(imagePath);
    $(this).attr("src", imagePath);
    $(this).removeAttr("width");
    $(this).removeAttr("height");
});