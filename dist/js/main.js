Modernizr.load([
	{
		test: Modernizr.placeholder,
		nope: 'js/placeholders.min.js'
	},
	{
		test: Modernizr.touch,
		yep: ['js/fastclick.min.js'],
		complete: function(){
			if (Modernizr.touch) {
				FastClick.attach(document.body);
			}
		}
	},
	{
		test: Modernizr.svg,
		nope: 'js/svg4everybody.legacy.js',
		complete: function() {
			// Svg falback, replace all .svg to .png in <img src="" />
			if (!Modernizr.svg) {
				var imgs = document.getElementsByTagName('img');
				var svgExtension = /.*\.svg$/
				var l = imgs.length;
				for (var i = 0; i < l; i++) {
					if (imgs[i].src.match(svgExtension)) {
						imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
						console.log(imgs[i].src);
					}
				}
			}
		}
	}
]);


$(document).ready(function() {
	$('select, input').styler();

	$('.content-wrapper table').basictable({baseClass: 'table'});

	// Here insert modules scripts
	// Accordion
	$('.accordion').each(function(index, el) {
		var $that = $(this);
		var $items = $(this).find('.accordion__item');
		var $headers = $(this).find('.accordion__header');
		var $contents = $(this).find('.accordion__content');
		var speed = 300;
	
		$items.each(function(index, el) {
			var findActive = false;
	
			if (!findActive) {
				if ($(this).hasClass('accordion__item_active')) {
					$(this).children('.accordion__content').show();
					return false;
				}
			}
			else {
				$(this).removeClass('accordion__item_active');
			}
		});
	
		$headers.click(function(event) {
			event.preventDefault();
	
			var $item = $(this).parent();
	
			if (!$item.hasClass('accordion__item_active')) {
				$items.removeClass('accordion__item_active');
				$item.addClass('accordion__item_active');
				$contents.slideUp(speed);
				$item.children('.accordion__content').slideDown(speed);
			}
			else {
				$item.children('.accordion__content').slideUp(speed);
				$item.removeClass('accordion__item_active');
			}
		});
	});
	
	
	$('.alert__close').on('click', function() {
		$(this).closest('.alert').fadeOut();
	});
	
	
	$('.browsehappy').click(function() {
		$(this).slideUp();
	});
	
	
	(function () {
		var $advanced = $('.filters__row_advanced'),
			$buttonHide = $('.filters__hide-button'),
			$buttonShow = $('.filters__show-button');
	
		$buttonShow.on('click', function (e) {
			e.preventDefault();
	
			$advanced.slideDown("fast");
			$buttonShow.hide();
			$buttonHide.show();
		});
	
		$buttonHide.on('click', function (e) {
			e.preventDefault();
	
			$advanced.slideUp("fast");
			$buttonHide.hide();
			$buttonShow.show();
		});
	
	})();
	
	
	
	
	(function () {
	
		var $pageFilters = $('.page__filters');
	
	
	
	
	})();
	
	
	var mmenu = {
		trigger: $('.mobile-menu-trigger'),
		panel: $('.page__mobile-menu'),
		pageContent: $('.page__content'),
		cover: true,
		menuPosition: 'right',
	
		show: function(){
			mmenu.panel.show();
			var menuWidth = mmenu.panel.width();
	
			if (mmenu.menuPosition === 'right') {
				var menuWidth = '-' + menuWidth;
			}
	
			// mmenu.pageContent.transition({
			// 	x: menuWidth + 'px',
			// 	complete: function(){
			// 		$('.page').addClass('page_mmenu-open');
			// 		$('html, body').css({
			// 			"overflow": "hidden",
			// 			"height": "auto"
			// 		});
			// 	}
			// });
			$('.page').addClass('page_mmenu-open', function(){
				$('.page').addClass('page_mmenu-open');
				$('html, body').css({
					"overflow": "hidden",
					"height": "auto"
				});
			});
		},
	
		hide: function(){
			$('.page').removeClass('page_mmenu-open', function(){
					mmenu.panel.hide();
					$('html, body').removeAttr('style');
					$(this).removeAttr('style');
				});
			// mmenu.pageContent.transition({
			// 	x: 0,
			// 	complete: function(){
			// 		mmenu.panel.hide();
			// 		$('html, body').removeAttr('style');
			// 		$(this).removeAttr('style');
			// 	}
			// });
		}
	};
	
	if (mmenu.cover) {
		mmenu.pageContent.append('<div class="page__cover">');
	}
	
	mmenu.trigger.click(function(event) {
		event.preventDefault();
		mmenu.show();
	});
	
	$('.page__cover').on('click', function(event) {
		event.preventDefault();
	
		if ($('.page').hasClass('page_mmenu-open')) {
			event.preventDefault();
			mmenu.hide();
		}
	});
	
	
	// Remodal init
	$('[data-remodal-id]').remodal();
	
	
	;(function () {
	
		var $slider = $('.product-slider');
		var pswpElement = document.querySelectorAll('.pswp')[0];
	
		// build items array
		var items = [];
	
		$slider.find($slider.selector + '__item').each(function (index) {
			var t = $(this);
	
			t.attr('data-gallery-index', index);
	
			items.push({
				src: t.attr('href'),
				w: 0,
				h: 0
			});
	
			t.on('click', function (e) {
				e.preventDefault();
	
				var t = $(this);
	
				var options = {
					index: +t.data('gallery-index')
				};
	
				// Initializes and opens PhotoSwipe
				var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	
				gallery.listen('gettingData', function(index, item) {
					if (item.w < 1 || item.h < 1) { // unknown size
						var img = new Image();
						img.onload = function() { // will get size after load
							item.w = this.width; // set image width
							item.h = this.height; // set image height
							gallery.invalidateCurrItems(); // reinit Items
							gallery.updateSize(true); // reinit Items
						};
						img.src = item.src; // let's download image
					}
				});
	
				gallery.init();
			});
		});
	
		$slider.slick({
			infinite: false,
			slidesToShow: 3
		});
	
	
	
	})();
	
	
	$('.pseudo-dropdown').each(function(index, el) {
		var $that = $(this);
		var $trigger = $(this).find('.pseudo-dropdown__trigger');
		var $top = $(this).find('.pseudo-dropdown__top');
		var $list = $(this).find('.pseudo-dropdown-list__item');
		var $active = $(this).find('.pseudo-dropdown-list__item_active');
		var $dropdown = $(this).find('.pseudo-dropdown__list');
		var $scroll = $(this).find('.pseudo-dropdown-list');
		var triggerCheckbox = $(this).find('.pseudo-dropdown__trigger-checkbox');
		var triggerCheckboxText = '';
	
		var isCheckbox = $that.hasClass('pseudo-dropdown_checkbox');
		var isServices = $that.hasClass('pseudo-dropdown_services');
		var isOpenned = $that.hasClass('pseudo-dropdown_checkbox-openned');
	
		var checkedClass = "";
	
		if (isServices) checkedClass = "pseudo-dropdown_services-checked";
	
		var $triggerText = '';
	
		if (!isServices)
			$scroll.perfectScrollbar();
	
		if (!isCheckbox && !isServices) {
	
			// Set initial state
			if ($active.length > 0) {
				$triggerText = $active.text();
			}
			else {
				$triggerText = $list.first().text()
			}
		}
	
		if (isCheckbox || isServices) {
			triggerCheckboxText = triggerCheckbox.text();
	
			if ($dropdown.find('[type=checkbox]:checked').length > 0) {
				triggerCheckbox.text('Выбрано: ' + $dropdown.find('[type=checkbox]:checked').length);
				$that.addClass(checkedClass);
			} else {
				triggerCheckbox.text(triggerCheckboxText);
				$that.removeClass(checkedClass);
			}
	
			$dropdown.find('[type=checkbox]').on('change', function () {
				if ($dropdown.find('[type=checkbox]:checked').length > 0) {
					triggerCheckbox.text('Выбрано: ' + $dropdown.find('[type=checkbox]:checked').length);
					$that.addClass(checkedClass);
				} else {
					triggerCheckbox.text(triggerCheckboxText);
					$that.removeClass(checkedClass);
				}
			});
		}
	
		$trigger.text($triggerText);
	
		// Show Dropdown
		if (!$that.hasClass('pseudo-dropdown_dropdown_open')) {
			$top.click(function(event) {
				event.preventDefault();
				// Close all open dropdowns
				if ($that.hasClass('pseudo-dropdown_dropdown_open')) {
					$that.toggleClass('pseudo-dropdown_dropdown_open');
					return;
				}
	
				$('.pseudo-dropdown').removeClass('pseudo-dropdown_dropdown_open');
				$that.toggleClass('pseudo-dropdown_dropdown_open');
	
				$scroll.perfectScrollbar('update');
			});
		}
	
		// Dropdown item click
		$list.click(function(event) {
			if (isCheckbox || isServices) return;
	
			event.preventDefault();
	
			var $triggerText = '';
	
			if ($(this).is('li') && $(this).text() != '') {
				$triggerText = $(this).text();
			}
			else {
				$triggerText = $(this).children('a').text();
			}
			$trigger.text($triggerText);
	
			$list.removeClass('pseudo-dropdown-list__item_active');
			$(this).addClass('pseudo-dropdown-list__item_active');
	
			$that.toggleClass('pseudo-dropdown_dropdown_open');
	
			if ($(this).attr('data-value').length > 0) {
				//alert('Selected: "' + $(this).attr('data-value') + '" (' + $triggerText + ')');
			}
		});
	
		// Outer click
		$(document).on('click', function(event) {
			var closeClassName = 'pseudo-dropdown';
			var $hideObject = $('.pseudo-dropdown__list');
	
			if (!$(event.target).closest('.'+closeClassName).length) {
				if ($hideObject.is(":visible")) {
					$('.pseudo-dropdown').removeClass('pseudo-dropdown_dropdown_open');
				}
			}
	
	
		});
	
		$('.jq-selectbox__select').on('click', function (e) {
			var closeClassName = 'pseudo-dropdown';
			var $hideObject = $('.pseudo-dropdown__list');
	
			if ($hideObject.is(":visible")) {
				$('.pseudo-dropdown').removeClass('pseudo-dropdown_dropdown_open');
			}
		});
	
	
	
	
	
	});
	
	
	var $scrollTop = $('.scroll-top');
	
	$scrollTop.click(function(event) {
		event.preventDefault();
	
	
		$('html, body').stop().animate({
			'scrollTop': 0
		}, 900, 'swing');
	});
	

});
