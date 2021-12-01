import { StateManager } from "./StateManager.js";
import { updateControls } from "./interface.js";
import { bindEvents } from "./events.js";
import { get } from "./HTTP.js";

window.photos = [];

window.STATE = new StateManager({
    val: 'val',
})

STATE.deserialize();

document.addEventListener('DOMContentLoaded', async function () {

    window.$grid = $('#grid');
    // window.$something = $('#something');
    // $something.chosen({ multiple: true, width: 608 }).trigger('chosen:updated');
    // bindEvents();
    // updateControls();

    const photos = await get('/api/photo');

    console.log(photos);

    for (const photo of photos) {

        if (photo.title.endsWith('mp4')) {
            // let $video = $('<video />', {
            //     src: `../storage/${photo.album.title}/${photo.title}`,
            //     type: 'video/mp4',
            //     controls: true
            // });
            // $video.appendTo($grid);
        } else {

            let $img = $('<img />', {
                // id: 'Myid',
                src: `../storage/${photo.album.title}/${photo.title}`,
                alt: photo.description
            });
            $img.appendTo($grid);
        }
    }

})
