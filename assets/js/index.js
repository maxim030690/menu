$(document).ready(() => {
    $('.sub-menu-item__list li, .links__parent').hover((event) => {
        $(event.currentTarget).toggleClass('active');
        overlayHeight();
    })

    const overlayHeight = () => {
        const overlay = $('.sub-menu-item--top');
        const lists = $('.menu-items ul');

        const heights = [];
        lists.each((index, item) => {
            heights.push($(item).outerHeight());
        });

        const maxHeight = Math.max(...heights);
        overlay.css('min-height', `${maxHeight + 30}px`);
    }

    $('.menu-items').on('click', (event) => {
        $('.mobile-search').removeClass( "active" );
        $('.close-menu').addClass( "active" );
        $('.menu-items-mobile').find('.sub-menu-item').slideDown( "slow" );
    });

    $('.close-menu').on('click', (event) => {
        $('.mobile-search').toggleClass( "active" );
        $('.close-menu').toggleClass( "active" );
    });

    $('.mobile-search').on('click', (event) => {
        $('.mobile-search-input').toggleClass( "active" );
        $('.menu-items').toggleClass( "hide" );
    });
})