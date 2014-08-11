/** 
 * Author:
 **/
 var ER = {
    load: function () {

        this.router = new ER.Router();
        Backbone.history.start();
    },

    run: function () {
        var $this = this;
        $this.flag_swipe=false;
         $this.CourseUrl;
         $this.usertype;
         $this.stud_class_info;
         $this.roles;
         $this.user_id;
         $this.flag_circle;
         $this.flag_rectangle;
         $this.flag_underline;
         $this.type_name;
         $this.flag_common=false;
        $this.save_page_no;
        $this.auth_head_info;
        $this.classurl;
        $this.connected_data="";
        $this.particular_class;
        $this.p_no_service;
        $this.stud_class_info=[];
        $this.student_info=[];
        $this.pageNum_displayNum_map = {}, // variable for mapping page number to display num
        $this.displayNum_pageNum_map = {}; // variable for mapping display number to page num

        $this.eBookCollection = new ER.EBookModelCollection();
        $this.chaptersCollection = new ER.ChapterModelCollection();
        $this.pagesCollection = new ER.PagesCollection();

        $this.topBarView = new ER.TOPBarView();
        $this.bottomBarView = new ER.BottomBarView();
        $this.bookview = new ER.BookView();
        $this.tocView = new ER.TOCView();
        $this.torView = new ER.TORView();
        $this.searchView = new ER.SEARCHView();
        $this.helpView = new ER.HELPView();
        $this.stickybuttonView = new ER.STICKYBUTTONView();
        $this.bookmarkbuttonView = new ER.BookmarkBUTTONView();
        $this.myColor = 'yellow';
        $this.myColorID = 'btnyellow',
        $this.ChangeUndo = false;
        $this.lastPageNum = 1;
        $this.currentPageNum = 1;
        $this.currentView = 'single';
        $this.pageFitView = '';
        $this.isBackBtnClick = false;
        $this.isRenderPage = true;
        $this.MyShapeColor_Circle = "#002aff",
        $this.MyShapeColor_Rectangle = "#00ed59",
        $this.MyShapeColor_Underline = "#663399",
        $this.MyCircleShapeID = "Circle_blue",
        $this.MyRectangleShapeID = "Rectangle_green",
        $this.MyUnderlineShapeID = "Underline_purple",
        $this.currenLeftPageVO = {},
        $this.currenRightPageVO = {},
        $this.currentScaleValue = 1,
        $this.Page_Value_Box = "";
        $this.onePercentageScale = 0;
        $this.pageListofHighlightArrays = [];
        $this.saveCurrentPageData = false;
        $this.PresentHighlightText = false;
        $this.PresentUndoHighlightArray = [];
        $this.connectedHighlightedTextArray = [];
        $this.AudioText = '',
        $this.AudioArrayText = [];
        $this.AudioDisturbedTime = 0;
        $this.AudioDisturbedFlag = false;
        $this.AudioEndTime = 0;
        $this.TapnHold = false;
        $this.parseFunction = false;
        $this.OldValue = false;
        $this.SavedHighlightText = false;
        $this.ClickTextGrabber = false;
        $this.HighlightTempFlag = false;
        $this.HighlightCircleTempFlag = false;
        $this.CircleActive = false;
        $this.RectangleActive = false;
        $this.UnderlineActive = false;
        $this.RectangleTool = {};
        $this.InputTypeText = {};
        $this.Circle = {};
        $this.Underline = {};
        $this.SwipePage = false;
        $this.HightLightCount = 0;
        $this.myClearShape = false;
        $this.AudioPlayingvalue = 0;
        $this.HighlightRectangleTempFlag = false;
        $this.myShapeTouchHold = false;
        $this.UserInteractionwithDrawing = false;
        $this.UserInteractionwithHighlight = false;
        $this.requestTokenURLConnected = "";
        $this.PDFheight = "";
        $this.PDFwidth = "";
        $this.CurrentPageAudioSync = "";
        $this.OriginalPDFheight = "";
        $this.OriginalPDFwidth = "";
        $this.PDFScalingValue = 1.5;
        $this.CanvasStarted = false;
        $this.audioVideoView = new ER.AudioVideoView();
        $this.activityView = new ER.ActivityView();
        $this.notebooklinkView = new ER.NotebookButtonView();
        $this.FitWidthFlag = false;
        $this.StickyNoteID = '';
        $this.StickyNotesActive = false;
        $this.currentPageHighlightXml = {};
        $this.RectangleClearActive = false;
        $this.CircleClearActive = false;
        $this.UnderlineClearActive = false;
        $this.ConnectedResults = "";
        $this.ConnectedResultsFlag = false;
        $this.HighlightUnderlineTempFlag = false;
        $this.RetrivingPage = "";
        $this.RequestTokenUrl = "";
        $this.SavingPage = "";
        $this.PresentXml = "";
        $this.Loading_Time = false;
        $this.GenerateConnected = false;
        $this.connected_Rendering = false;
        $this.Loading_Time = false;
        $this.TimeCount = 0;
        $this.AudioXmlLoadedTrue = false;
        $this.FirstAudioLoadedTrue = false;
        $this.AudioSyncIcon = false;
        $this.WindowUnload = false;
        $this.AudioTimmingZero = false;
        $this.AudioPlayerCountConnected = 0;
        $this.AudioMp3 = false;
        $this.KeyValue = "";
        $this.secretkey = "";
        $this.service_getToken = "";
        $this.serviceUrl = "";
        $this.Active_Blur = false;
        $this.view = "";
        $this.ISBN = "";
        $this.Text_Input_Background = false;
        $this.listnotesview = new ER.ListNotesView();
        $this.myScroll = 1;
        $this.myScrollTouches = 1;
        $this.myTouchHold = false;
        $this.hold_timeout = 500;
        $this.DragTouch = false;
        $this.pinchZoom = false;
        $this.StickyNotesZoom = false;
        $this.pencilDraw = false;
        $this.CanvasColor = false;
        $this.canvasButton = false;
        $this.ClearButton = false;
        $this.strokeStyle = 'black';
        $this.ClearAll_button_Activate = false;
        $this.notebookbutton = false;
        $this.ScrollSwipe = false;
        $this.tempScrollScalevalue = 1;
        $this.BackgroundScrollMove = false;
        $this.GrabbersUndo = false;
        $this.Audioloaded = false;
        $this.HighlightButton = false;
        $this.notebook = {};
        $this.stickyNotes = {};
        $this.bookmarks = {};
        $this.CanvasUndo = {};
        $this.CanvasClear = [];
        $this.Canvasmove = false;
        $this.undoHistory = [];
        $this.undoHighlightHistory = [];
        $this.PresentHighlightHistory = [];
        $this.HighlightTexts = {};
        $this.HighlightTextPage = {};
        $this.connectedHighlightText = [];
        $this.highlighting = {};
        $this.pageScroller = null;
        $this.myIScroll_Input = null;
        $this.myIScroll = null;
        $this.DUMMY_PAGE = 'assets/html/dummy.html';

        if (navigator.userAgent.match(/iPad/i)) {
            var supportTouch = navigator.userAgent.match(/iPad/i);
            //|| navigator.userAgent.match(/Android/i) ;
            $this.TOUCH_START_EVENT = supportTouch ? "touchstart" : "mousedown";
            $this.TOUCH_END_EVENT = supportTouch ? "touchend" : "mouseup";
            $this.TOUCH_MOVE_EVENT = supportTouch ? "touchmove" : "mousemove";

        }
	
        if (navigator.userAgent.match(/Android/i)) {
            var supportTouch = navigator.userAgent.match(/Android/i);
            //|| navigator.userAgent.match(/Android/i) ;
            $this.TOUCH_START_EVENT = supportTouch ? "touchstart" : "mousedown";
            $this.TOUCH_END_EVENT = supportTouch ? "touchend" : "mouseup";
            $this.TOUCH_MOVE_EVENT = supportTouch ? "touchmove" : "mousemove";

        }
		
			var matchDevice = /(?:; ([^;)]+) Build\/.*)?\bSilk\/([0-9._-]+)\b(.*\bMobile Safari\b)?/.exec(navigator.userAgent);
			if (matchDevice) {
			
			$this.TOUCH_START_EVENT ="touchstart";
            $this.TOUCH_END_EVENT = "touchend";
            $this.TOUCH_MOVE_EVENT = "touchmove";
			
			
			
			}


        BatchLoader.LoadURL.load('./assets/web.xml', {
            dataType: 'xml',
            cache: false,
            callbackDone: WebXMLData.ParseWEBXML
        }); // webxml loading complete

        // Detect whether device supports orientationchange event, otherwise fall back to the resize event.
        var supportsOrientationChange = "onorientationchange" in window,
            orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

        $(window).bind(orientationEvent, function (event) {
            $(".orientationtemp").show();
            $(".tempscrollBackground").hide();
            //$("input").blur();
            if(window.orientation == 180 || window.orientation == 0){
                //alert('1');
               setTimeout(function(){
                    if(document.documentElement.clientWidth==1280){
                    
               $('.navbar .btn-group').css('margin-top','-10px')
             $('#drop_list_parent').css('margin-top','6px');
            $('#drop_list_parent1').css('margin-top','6px');
             $('#Canvas_back').css('margin-top','6px');
              $("#circle,#rectangle,#underline,#pencilButton").css('margin-top','0px')
               $('.colorPallete,.colorPalletetwo').css('margin-top','7px')
              $('#PencilcolorPallete').css('margin-top','6px')
                 $('.Tools_Color_pallete').css('margin-top','-4px')
            
            }else{
                 $('.navbar .btn-group').css('margin-top','1px')
                 $('#drop_list_parent').css('margin-top','15px');
            $('#drop_list_parent1').css('margin-top','15px');
                
                 $("#circle,#rectangle,#underline,#pencilButton").css('margin-top','8px')
                $("#Canvas_back").css('margin-top','14px');
                $("#Circle_Color_pallete").css('margin-top','-4px')
                 $('.colorPallete,.colorPalletetwo').css('margin-top','14px');
                  $('#PencilcolorPallete').css('margin-top','15px');
                   $('.PencilCanvaspotrait').css('margin-top','15px')
                   $('.Tools_Color_pallete').css('margin-top','5px')
            }
        },1000)
            //$('#CanvasButton,#btnStickyNotesone,#btnHighlighted,#btnSearched,#circle,#rectangle,#underline,#pencilButton,#Circle_yellow,#Circle_blue,#Circle_purple,#Circle_orange,#Circle_green,#Circle_clear,#Circle_clearAll,#Circle_Done').addClass('potrait_dropdown');
           // $('#Rectangle_yellow,#Rectangle_blue,#Rectangle_purple,#Rectangle_orange,#Rectangle_green,#Rectangle_clear,#Rectangle_clearAll,#Rectangle_Done').addClass('potrait_dropdown')
            }else if(window.orientation == 90 || window.orientation == -90){
                   //alert('2');
               
          // $("#circle,#rectangle,#underline,#pencilButton").css('margin-top','-6px')
          //   $("#Canvas_back").css('margin-top','1px')
          //   $("#Circle_Color_pallete").css('margin-top','-9px')
          //   $('#PencilcolorPallete').css('margin-top','1px')
          //   $('.colorPallete,.colorPalletetwo').css('margin-top','0px')
          setTimeout(function(){
             if(navigator.userAgent.match(/iPad/i)){
               
                 $('.navbar .btn-group').css('margin-top','-8px');
                 $('#drop_list_parent').css('margin-top','5px');
            $('#drop_list_parent1').css('margin-top','5px');
             $('#Canvas_back').css('margin-top','6px');
              $("#circle,#rectangle,#underline,#pencilButton").css('margin-top','0px')
               $('.colorPallete,.colorPalletetwo').css('margin-top','7px')
              $('#PencilcolorPallete').css('margin-top','6px')
                 $ ('.Tools_Color_pallete').css('margin-top','-4px')

            }else{
                
                if(document.documentElement.clientWidth==800){
                
                $('.navbar .btn-group').css('margin-top','1px')
                 $('#drop_list_parent').css('margin-top','15px');
            $('#drop_list_parent1').css('margin-top','15px');
                
                 $("#circle,#rectangle,#underline,#pencilButton").css('margin-top','8px')
                $("#Canvas_back").css('margin-top','14px');
                $("#Circle_Color_pallete").css('margin-top','5px')
                 $('.colorPallete,.colorPalletetwo').css('margin-top','14px');
                  $('#PencilcolorPallete').css('margin-top','15px');
                   $('.PencilCanvaspotrait').css('margin-top','15px')
                   $('.Tools_Color_pallete').css('margin-top','5px')
               
            } else if(document.documentElement.clientWidth==1280){
                    
               $('.navbar .btn-group').css('margin-top','-10px')
             $('#drop_list_parent').css('margin-top','1px');
            $('#drop_list_parent1').css('margin-top','1px');
             $('#Canvas_back').css('margin-top','6px');
              $("#circle,#rectangle,#underline,#pencilButton").css('margin-top','0px')
               $('.colorPallete,.colorPalletetwo').css('margin-top','7px')
              $('#PencilcolorPallete').css('margin-top','6px')
                 $('.Tools_Color_pallete').css('margin-top','-4px')
            
            }

            else{

             $('.navbar .btn-group').css('margin-top','-10px')
             $('#drop_list_parent').css('margin-top','1px');
            $('#drop_list_parent1').css('margin-top','1px');
              $("#Canvas_back").css('margin-top','1px')
              $('#PencilcolorPallete').css('margin-top','1px')
               $("#circle,#rectangle,#underline,#pencilButton").css('margin-top','-6px')
               $('.colorPallete,.colorPalletetwo').css('margin-top','0px')
                 $('.PencilcolorPallete_landscape').css('margin-top','1px')
                  $ ('.Tools_Color_pallete').css('margin-top','-9px')
              }

           
            }
        },1000);

            }
            $("input").attr("readonly", "readonly");
            $("textarea").attr("readonly", "readonly");
			var matchDevice = /(?:; ([^;)]+) Build\/.*)?\bSilk\/([0-9._-]+)\b(.*\bMobile Safari\b)?/.exec(navigator.userAgent);
			
            if (navigator.userAgent.match(/Android/i)) {
                if (document.activeElement &&
                    document.activeElement.blur &&
                    document.activeElement !== document.body) {
                    document.activeElement.blur();
                }

            } else if (matchDevice) {
				if (document.activeElement &&
                    document.activeElement.blur &&
                    document.activeElement !== document.body) {
                    document.activeElement.blur();
                }
			}
			
			else {

            }
            if (!$('div.audioVideoModal').is(':hidden')) {
                $(".jp-pause").trigger("click");
            }


            setTimeout(function () {

                if (!$("div.search ").is(':hidden')) {
                    setTimeout(function () {
                        $(".searched").removeClass("search-active");
                        $("#pageViewContainer").trigger("click");
                        $('div.search').hide();

                    }, 100);
                }
                if (ER.pinchZoom) {
                    if ($(".Activity_type_Input").is(":visible")) {


                        $(".Activity_type_Input").hide();
                        $(".InputType_Activity").removeClass("Blur_Search_Input").removeClass("hidden");
                        $(".Activity_type_Input").removeClass("hidden");
                        $(".activityInjection_markup").removeClass("OnPage_Activate");
                        $(".InputType_Activity_textarea").removeAttr("readonly");
                        InputType_Activity_function();
                    }
                    if ($(".InputType_Activity").hasClass("Blur_Search_Input")) {

                        $(".InputType_Activity").removeClass("Blur_Search_Input").removeClass("hidden");
                        $(".Activity_type_Input").removeClass("hidden");
                        $(".activityInjection_markup").removeClass("OnPage_Activate");
                        $(".InputType_Activity_textarea").removeAttr("readonly");
                        InputType_Activity_function();

                    }
                }



                var current_Input_flag = false;
                if ($(".InputType_Activity").hasClass("Blur_Search_Input")) {
                    current_Input_flag = true;
                    $(".Activity_type_Input").trigger("click");


                }

                if ($(".Activity_type_Input").is(":visible") && !current_Input_flag) {

                    $(".Activity_type_Input").trigger("click");
                }
                if ($(".stickyIcon").hasClass("present_icon")) {
                    $(".outerBackground").trigger("click");
                }
                if (!$("#DeleteStickynetworkModel").is(':hidden')) {
                    $("#DeleteStickynetworkModel").hide();
                    $(".popup_background").hide();
                }

                set_body_height(event);
                if ($("div.bookmark ").is(':visible')) {
                    $(".BookmarkBackground").trigger("click");
                }
                if (ER.myTouchHold) {
                    ER.myTouchHold = true;
                    $("#Done").trigger("click");

                    if (!$(".HighlightmessageModel").is(':hidden')) {
                        $(".HighlightmessageModel").hide();
                        $(".ClearPop_Up").hide();
                    }
                }




                if (ER.CanvasStarted) {
                    $(".commonHidden").addClass("hidden");
                    $(".commonHiddenthree ").addClass("hidden");
                    $(".btn-stickyNotes").addClass("hidden");
                    $(".searched").addClass("hidden");
                    $(".btn-highlight").addClass("hidden");
                }
                if ($(".btn-stickyNotes").hasClass("btn-stickyNotes_active")) {
                    $(".commonHiddenthree").addClass("hidden");
                    $(".commonHiddentwo").addClass("hidden");
                    $(".searched").addClass("hidden");
                    $(".btn-stickyNotes_active").removeClass("hidden");
                }

                if (ER.StickyNotesActive) {
                    $(".pencilButton").addClass("hidden");
                    $(".btn-highlight").addClass("hidden");
                    $(".searched").addClass("hidden");
                    $("#btnTOCNavigate").addClass("hidden");
                    $(".separator").addClass("hidden");
                    $(".btn-bookmark").addClass("OnPage_Activate");
                    $(".notebook_link").addClass("OnPage_Activate");
                    $(".Audio_Class").addClass("OnPage_Activate");
                    ER.DragTouch = true;
                    ER.pageScroller.options.zoom = false;
                } else {

                    $(".btn-highlight").removeClass("hidden");
                    if (ER.CanvasStarted) {
                        $(".commonHidden").addClass("hidden");
                        $(".commonHiddenthree ").addClass("hidden");
                        $(".btn-stickyNotes").addClass("hidden");
                        $(".searched").addClass("hidden");
                        $(".btn-highlight").addClass("hidden");
                    }
                }
                if (!$('div.PencilcolorPallete').is(':hidden')) {
                    $(".commonHidden").addClass("hidden");
                    $("#btnTOCNavigate").addClass("hidden");
                    $(".separator").addClass("hidden");
                    if (ER.strokeStyle === "black") {
                        $(".PencilColor").removeClass("Change_Pencil_color_b70d2a");
                        $(".PencilColor").removeClass("Change_Pencil_color_0a823b");
                        $(".PencilColor").removeClass("Change_Pencil_color_1f25aa");
                        $("#btnblack_Pencil").addClass('Change_Pencil_color_000000');
                    }
                    ER.pageScroller.options.zoom = false;
                }
                if (ER.myShapeTouchHold) {

                    $("#btnTOCNavigate").addClass("hidden");
                    $(".removeClass_hidden").addClass("hidden");
                }

                if (!$(".Selectable_Tool").is(':hidden')) {

                    $(".removeClass_hidden").addClass("hidden");

                }

                if (ER.RectangleClearActive || ER.CircleClearActive || !$('div.ClearShapenetworkModel').is(':hidden') || ER.UnderlineClearActive || ER.UnderlineActive || ER.CircleActive || ER.RectangleActive) {
                   // console.log("sf")
                    $(".removeClass_hidden").addClass("hidden");
                    $("#btnTOCNavigate").addClass("hidden");
                }
			  var matchDevice = /(?:; ([^;)]+) Build\/.*)?\bSilk\/([0-9._-]+)\b(.*\bMobile Safari\b)?/.exec(navigator.userAgent);
			
                if (!$('div.audioVideoModal').is(':hidden')) {
                    if ($('div.audioVideoModal').hasClass('Audio_icon_sp_change') || $('div.audioVideoModal').hasClass('Audio_change')) {


                        $(".common_upper").addClass("hide");
                        $(".commonHidden").addClass("hidden");
                        $(".stickyIcon").addClass("hidden");
                        $("#btnTOCNavigate").addClass("hidden");
                        $(".separator").addClass("hidden");
                        $(".btn-bookmark").addClass("hidden");
                        $("div.leftPageURL").find(".syncCueIndicator").remove();
                        $("#audioVideoModal").css({
                            'margin-top': 0 + 'px',
                            'margin-left': 0,
                            left: $(window).width() - (($(".audioVideoModal").width()) + 45),
                            top: $(window).height() - (($(".audioVideoModal").height()) + 45)
                        });
                    } else if ($('div.audioVideoModal').hasClass('Video_change')) {
                        if (navigator.userAgent.match(/iPad/i)) {
                            if ($(".NO_full_screen").is(":visible")) {
                                if (ER.pageFitView == "FIT_WIDTH") {
                                    $(".Video_change").addClass("Video_change_complete_landscape").removeClass("Video_change_complete");
                                    $("#jp_container_1").addClass("Video_Change_Width_complete_landscape").removeClass("Video_Change_Width_complete");
                                    $(".jp-controls-holder").addClass("Video_Screen_complete");
                                    $("#jquery_jplayer_1").addClass("Video_jquery_jplayer_complete_landscape").removeClass("Video_jquery_jplayer_complete");
                                    $("#NO_full_screen").removeClass("hide");
                                    $("#full_screen").addClass("hide");
                                    $(".audioClose").addClass("hide");
                                } else {
                                    $(".Video_change").addClass("Video_change_complete").removeClass("Video_change_complete_landscape");
                                    $("#jp_container_1").addClass("Video_Change_Width_complete").removeClass("Video_Change_Width_complete_landscape");
                                    $(".jp-controls-holder").addClass("Video_Screen_complete");
                                    $("#jquery_jplayer_1").addClass("Video_jquery_jplayer_complete").removeClass("Video_jquery_jplayer_complete_landscape");
                                    $("#NO_full_screen").removeClass("hide");
                                    $("#full_screen").addClass("hide");
                                    $(".audioClose").addClass("hide");
                                }
                            } else {

                            }

                        } else if (navigator.userAgent.match(/Android/i)) {
                            if ($(".NO_full_screen").is(":visible")) {
                                if (ER.pageFitView == "FIT_WIDTH") {
                                    $(".Video_change").removeClass("Video_change_complete_Android_Potrait").addClass("Video_change_complete_landscape_Android");
                                    $("#jp_container_1").removeClass("Video_Change_Width_complete_Android_Potrait").addClass("Video_Change_Width_complete_landscape_Android");
                                    $(".jp-controls-holder").removeClass("Video_Screen_complete_Android").addClass("Video_Screen_complete_Android");
                                    $("#jquery_jplayer_1").removeClass("Video_jquery_jplayer_complete_Android_Potrait").addClass("Video_jquery_jplayer_complete_landscape_Android");
                                    $("#NO_full_screen").removeClass("hide");
                                    $("#full_screen").addClass("hide");
                                    $(".audioClose").addClass("hide");
                                    //
                                } else {
                                    $(".Video_change").removeClass("Video_change_complete_landscape_Android").addClass("Video_change_complete_Android_Potrait");
                                    $("#jp_container_1").removeClass("Video_Change_Width_complete_landscape_Android").addClass("Video_Change_Width_complete_Android_Potrait");
                                    $(".jp-controls-holder").removeClass("Video_Screen_complete_Android").addClass("Video_Screen_complete_Android");
                                    $("#jquery_jplayer_1").removeClass("Video_jquery_jplayer_complete_landscape_Android").addClass("Video_jquery_jplayer_complete_Android_Potrait");
                                    $("#NO_full_screen").removeClass("hide");
                                    $("#full_screen").addClass("hide");
                                    $(".audioClose").addClass("hide");

                                    //
                                }
                            } else {

                            }
                        }
						 else if (matchDevice) {
                            if ($(".NO_full_screen").is(":visible")) {
                                if (ER.pageFitView == "FIT_WIDTH") {
                                    $(".Video_change").removeClass("Video_change_complete_Android_Potrait").addClass("Video_change_complete_landscape_Android");
                                    $("#jp_container_1").removeClass("Video_Change_Width_complete_Android_Potrait").addClass("Video_Change_Width_complete_landscape_Android");
                                    $(".jp-controls-holder").removeClass("Video_Screen_complete_Android").addClass("Video_Screen_complete_Android");
                                    $("#jquery_jplayer_1").removeClass("Video_jquery_jplayer_complete_Android_Potrait").addClass("Video_jquery_jplayer_complete_landscape_Android");
                                    $("#NO_full_screen").removeClass("hide");
                                    $("#full_screen").addClass("hide");
                                    $(".audioClose").addClass("hide");
                                    //
                                } else {
                                    $(".Video_change").removeClass("Video_change_complete_landscape_Android").addClass("Video_change_complete_Android_Potrait");
                                    $("#jp_container_1").removeClass("Video_Change_Width_complete_landscape_Android").addClass("Video_Change_Width_complete_Android_Potrait");
                                    $(".jp-controls-holder").removeClass("Video_Screen_complete_Android").addClass("Video_Screen_complete_Android");
                                    $("#jquery_jplayer_1").removeClass("Video_jquery_jplayer_complete_landscape_Android").addClass("Video_jquery_jplayer_complete_Android_Potrait");
                                    $("#NO_full_screen").removeClass("hide");
                                    $("#full_screen").addClass("hide");
                                    $(".audioClose").addClass("hide");

                                    //
                                }
                            } else {

                            }
                        }
						

                    }
                }


                $("input").removeAttr("readonly");
                $("textarea").removeAttr("readonly");
                if (document.activeElement &&
                    document.activeElement.blur &&
                    document.activeElement !== document.body) {
                    $("#pageViewContainer").trigger("click");
                }
                $(".orientationtemp").hide();
                $this.pageScroller.refresh();
                //console.log(ER.pinchZoom);
            }, 2000);

            $(".outerBackground").hide();

            $this.pageScroller.refresh();
        });




        createContains(); // used for search function

        new FastClick(document.body);
        document.addEventListener('DOMContentLoaded', function () {
            new FastClick(document.body);
        });

    },

    getUrlVars: function () {
        var vars = [],
            hash;

        var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },

    getAbsolutePath: function () {
        var loc = window.location;
        var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
        return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    },

    enableDisableNavigationButton: function () {
        if (ER.currentPageNum > 1) {
            $("#btnPreviousPage").attr("disabled", false);
            $("#btnFirstPage").attr("disabled", false);
        } else {
            $("#btnPreviousPage").attr("disabled", true);
            $("#btnFirstPage").attr("disabled", true);
        }

        if (ER.currentPageNum < ER.lastPageNum) {
            $("#btnNextPage").attr("disabled", false);
            $("#btnLastPage").attr("disabled", false);
        } else {
            $("#btnNextPage").attr("disabled", true);
            $("#btnLastPage").attr("disabled", true);
        }

        if (ER.currentView == "single") {
            $("#btnOnePageView").attr("disabled", true);
            $("#btnTwoPageView").attr("disabled", false);

        } else {
            $("#btnOnePageView").attr("disabled", false);
            $("#btnTwoPageView").attr("disabled", true);
        }

        if (ER.pageFitView == 'FIT_WIDTH') {
            $("#btnfitWidth").attr("disabled", true);
            $("#btnfitHeight").attr("disabled", false);

        } else if (ER.pageFitView == 'FIT_HEIGHT') {
            $("#btnfitWidth").attr("disabled", false);
            $("#btnfitHeight").attr("disabled", true);
        } else {
            $("#btnfitWidth").attr("disabled", false);
            $("#btnfitHeight").attr("disabled", false);
        }

        var obj = $('#btnTeacherStudent').attr('data-value');

        if ($('#btnTeacherStudent').attr('data-type') === undefined || $('#btnTeacherStudent').attr('data-type') === "") {
            $("#btnTeacherStudent").attr("disabled", true);
        } else {
            $("#btnTeacherStudent").attr("disabled", false);
        }

        if (parseInt(ER.currentScaleValue * 100) > 150) {
            $("#zoomin").attr("disabled", true);
        } else {
            $("#zoomin").attr("disabled", false);
        }
        if (parseInt(ER.currentScaleValue * 100) < 50) {
            $("#zoomout").attr("disabled", true);
        } else {
            $("#zoomout").attr("disabled", false);
        }
    },

    ParseWEBXML: function (webXMLData) {
        if ($(webXMLData).find("security").attr("check") != "1040") {

        } else {
            BatchLoader.LoadURL.load('./assets/xml-bin/eBook.xml', {
                dataType: 'xml',
                cache: false,
                callbackDone: $this.ParseEookXML
            }); // ebook xml loading complete 
        } // else ends
    }

};

/* Router use for url navigation */
ER.Router = Backbone.Router.extend({
    initialize: function () {
        this.route(/page=(.*)/, 'render');
        this.route('', 'refetch');
    },

    refetch: function () {
        ER.run();
    },

    render: function (displayNum) {
        if (ER.displayNum_pageNum_map !== undefined) {
            /* check for first load code in ChapterModel.js*/
            // only navigation 
            var pageNum = ER.currentPageNum;

            if (displayNum !== undefined) {
                pageNum = parseInt(ER.displayNum_pageNum_map[displayNum]);
                ER.currentPageNum = pageNum;
            }

            if ($('div.row-fluid').length <= 0) {
                ER.bookview.render();
            }
            ER.bookview.loadPage(pageNum);

        } else {
            //onload of first time;
            ER.run();
        }
    }
});

/*used for loading file*/
var BatchLoader = {
    LoadURL: {}
};

BatchLoader.LoadURL.load = function (urlPath, options) {
    var option = options || {};

    var loadURLDeffered = $.Deferred();

    $.ajax({
        type: "GET",
        url: urlPath,
        dataType: option.dataType || 'xml',
        cache: option.cache || false,
        statusCode: {
            404: function () {
                //alert("page not found");
            }
        }
    }).done(function (data) {

        if (option.callbackDone)
            option.callbackDone(data);
    }).error(function () {
        // alert("page not found");
    });

};

ER.TOPBarView = Backbone.View.extend({
    el: 'div.navbar-fixed-top',

    mainTemplate: _.template($('#topBarView').html()),

    events: {
        'click #btnHighlighted': 'highlight_Click',
        'click #Clear': 'delete_Click',
        'click #ClearAll': 'deleteAll_Click',
        'click #Done': 'SaveHighlight_Click',
        'click #HighlightUndo': 'UndoHighlight_Click',
        'click #pencilfunctional': "PencilTools_click",
        'click #pencilButton': 'btnPencil_click',
        'click #PencilErase': 'btnEraser_Click',
        'click #circle': 'btn_circle_click',
        'click #rectangle': 'btn_Rectangle_click',
        'click #underline': 'btn_underline_click',
        'click #Circle_clear': 'btn_circle_click_clear',
        'click #Rectangle_clear': 'btn_Rectangle_click_clear',
        'click #Underline_clear': 'btn_underline_click_clear',
        'click #Circle_clearAll': 'Circle_clearAll_click',
        'click #Rectangle_clearAll': 'Rectangle_clearAll_click',
        'click #Underline_clearAll': 'Underline_clearAll_Click',
        'click #Underline_Done': 'Underline_Done_Click',
        'click #Rectangle_Done': 'Rectangle_Done_Click',
        'click #Circle_Done': 'Circle_Done_Click',
        'click #Circle_yellow': 'Circle_color_highlight_Click',
        'click #Circle_blue': 'Circle_color_highlight_Click',
        'click #Circle_purple': 'Circle_color_highlight_Click',
        'click #Circle_orange': 'Circle_color_highlight_Click',
        'click #Circle_green': 'Circle_color_highlight_Click',
        'click #Rectangle_yellow': 'Rectangle_color_highlight_Click',
        'click #Rectangle_blue': 'Rectangle_color_highlight_Click',
        'click #Rectangle_purple': 'Rectangle_color_highlight_Click',
        'click #Rectangle_orange': 'Rectangle_color_highlight_Click',
        'click #Rectangle_green': 'Rectangle_color_highlight_Click',
        'click #Underline_yellow': 'Underline_color_highlight_Click',
        'click #Underline_blue': 'Underline_color_highlight_Click',
        'click #Underline_purple': 'Underline_color_highlight_Click',
        'click #Underline_orange': 'Underline_color_highlight_Click',
        'click #Underline_green': 'Underline_color_highlight_Click',
        'click #PencilClear': 'btnClear_Click',
        'click #PencilDone': 'btnPencilDone_Click',
        'click #PencilClearAll': 'btnClearAll_Click',
        'click #btnSearched': 'searchedBtn_Click',
        'click #btnHelp': 'helpBtn_Click',
        'click #btngreen': 'color_highlight_Click',
        'click #btnred': 'color_highlight_Click',
        'click #btnyellow': 'color_highlight_Click',
        'click #btnblue': 'color_highlight_Click',
        'click #btngreen_Pencil': 'color_highlight_Pencil',
        'click #btnred_Pencil': 'color_highlight_Pencil',
        'click #btnblack_Pencil': 'color_highlight_Pencil',
        'click #btnblue_Pencil': 'color_highlight_Pencil',
        'click #CanvasButton': "canvas_button_click",
        'click #Canvas_back': "Canvas_back_click"

    },

    render: function () {
        $(this.$el).html('');
        this.$el.html(this.mainTemplate({
            langXML: $(LanguageXMLData.languageXMLData)
        }));
    },
    helpBtn_Click: function (evt) {
        evt.stopPropagation();
        ER.helpView.render();
        $(".searched").removeClass("search-active");

        if (!$('div.toc').is(':hidden')) {
            $('div.toc').modal('hide'); // hide the modal in dom
        }
        if (!$('div.audioVideoModal').is(':hidden')) {
            $('div.audioVideoModal').modal('hide');

        }
        if (!$('div.bookmark').is(':hidden')) {
            $("div.btn-bookmark").removeClass("active");
            $('div.bookmark').modal('hide'); // hide the modal in dom
        }

        $('div.search').modal('hide');
        $('div.search').css("display", "none");
        $('div.topsearch').addClass('hide');
        if (!$('div.tor').is(':hidden')) {
            $('div.tor').modal('hide'); // hide the modal in dom
        }

        $('div.help').modal({
            backdrop: false
        }).css({
            'margin-top': 0 + 'px',
            'margin-left': 0,
            top: $('.navbar-fixed-top').height() - 25,
            left: ($(event.target).offset().left - 309)
        });
        $('div.help').show();




    },

    canvas_button_click: function (event) {

        if (document.activeElement &&
            document.activeElement.blur &&
            document.activeElement !== document.body) {
            document.activeElement.blur();
        }
        $('#DropDownList1').hide();
         $('#DropDownList').hide();
        ER.pageScroller.options.zoom = false;
        ER.pageScroller.disable();
        $(".tempscrollBackground").hide();
        $(".InputType_Activity").addClass("Input_type_Z_index_low");
        $(".btn-stickyNotes").addClass("hidden");
        $(".btn-highlight").addClass("hidden");
        $(".searched").addClass("hidden");
        $(".CanvasButton").addClass("hidden");
        $(".stickyIcon").addClass("hidden");
        $(".Selectable_Tool").removeClass("hidden");
        $("#btnTOCNavigate").addClass("hidden");
        $(".centered").addClass("hidden");
        ER.DragTouch = true;

        $(".markup").addClass("OnPage_Activate").addClass("Z-index_markup");
        $(".btn-bookmark").addClass("OnPage_Activate");
        $("div.InputType_Activity").off("click");
        $("div.InputType_Activity").attr('disabled', 'disabled');
        $(".InputType_Activity_textarea").attr("readonly", "readonly").attr('disabled', 'disabled');

    },

    Canvas_back_click: function (event) {
        ClassesRemove();
        $('#DropDownList1').show();
        $('#DropDownList').show();

    },

    btn_circle_click: function (event) {
        $("#circle").css("background-image", 'url(./assets/images/assets/topbar/circle_selected.png)');
        $(".canvas_hide_common").addClass("hidden");
        $("#" + event.currentTarget.id).removeClass("hidden");
        $(".Circle_Color_pallete").removeClass("hidden");

        var current_Id = ER.MyCircleShapeID;
        var shape = "Circle";
        var Shape_color = ER.MyShapeColor_Circle;
        color_Change_on_Click(shape, current_Id, Shape_color);

        Circle_Click_Active();


    },

    btn_Rectangle_click: function (event) {
        $("#rectangle").css("background-image", 'url(./assets/images/assets/topbar/sqaure_selected.png)');
        $(".canvas_hide_common").addClass("hidden");
        $("#" + event.currentTarget.id).removeClass("hidden");
        $(".Rectangle_Color_pallete").removeClass("hidden");
        var current_Id = ER.MyRectangleShapeID;
        var shape = "Rectangle";
        var Shape_color = ER.MyShapeColor_Rectangle;
        color_Change_on_Click(shape, current_Id, Shape_color)
        Rectangle_Click_Active();

    },


    btn_underline_click: function (event) {
        $("#underline").css("background-image", 'url(./assets/images/assets/topbar/underline_selected.png)');
        $(".canvas_hide_common").addClass("hidden");
        $("#" + event.currentTarget.id).removeClass("hidden");
        $(".Underline_Color_pallete").removeClass("hidden");
        var current_Id = ER.MyUnderlineShapeID;
        var shape = "Underline";
        var Shape_color = ER.MyShapeColor_Underline;
        color_Change_on_Click(shape, current_Id, Shape_color)
        Underline_Click_Active();

    },


    Underline_Done_Click: function (event) {
        $(".canvas_hide_common").addClass("hidden");
        $(".Underline_Color_pallete").addClass("hidden");
         if(ER.roles=="COLORADO_STUDENT"){
            $('#DropDownList1').hide();
            $('#DropDownList').hide();
        }else if(ER.roles=="COLORADO_TEACHER"){
        $('#DropDownList1').show();
        $('#DropDownList').show();
        }

        SaveShape("UnderlineShape", "Underline");
		onSaveReady(ER.currentPageNum);
        ClassesRemove();

    },
    Rectangle_Done_Click: function (event) {
        $(".canvas_hide_common").addClass("hidden");
        $(".Rectangle_Color_pallete").addClass("hidden");
        if(ER.roles=="COLORADO_STUDENT"){
            $('#DropDownList1').hide();
            $('#DropDownList').hide();
        }else if(ER.roles=="COLORADO_TEACHER"){
        $('#DropDownList1').show();
        $('#DropDownList').show();
        }

        SaveShape("RectangleShape", "Rectangle");
		onSaveReady(ER.currentPageNum);
        ClassesRemove();

    },
    Circle_Done_Click: function (event) {
        $(".canvas_hide_common").addClass("hidden");
        $(".Circle_Color_pallete").addClass("hidden");

        if(ER.roles=="COLORADO_STUDENT"){
            $('#DropDownList1').hide();
            $('#DropDownList').hide();
        }else if(ER.roles=="COLORADO_TEACHER"){
        $('#DropDownList1').show();
        $('#DropDownList').show();
        }
        SaveShape("CircleShape", "Circle");
		onSaveReady(ER.currentPageNum);
        ClassesRemove();

    },
    Underline_clearAll_Click: function (event) {
        var CircleShape = "UnderlineShape";
        var Circle = "Underline";
        clear_All_calling(CircleShape, Circle);
    },
    Rectangle_clearAll_click: function (event) {
        var CircleShape = "RectangleShape";
        var Circle = "Rectangle";
        clear_All_calling(CircleShape, Circle);
    },

    Circle_clearAll_click: function (event) {
        var CircleShape = "CircleShape";
        var Circle = "Circle";
        clear_All_calling(CircleShape, Circle);

    },

    Circle_color_highlight_Click: function (event) {
        var currentColor = $(event.target).attr("name");
        var currentColor_change = $(event.target).attr("name");
        ER.MyShapeColor_Circle = currentColor;
        ER.MyCircleShapeID = $(event.target).attr("id");
        $(".Circle_common_color").removeClass("Circle_Highlight_color_00ed59").removeClass("Circle_Highlight_color_002aff").removeClass("Circle_Highlight_color_f7753b").removeClass("Circle_Highlight_color_663399").removeClass("Circle_Highlight_color_fffd3f"); //yellow

        currentColor_change = currentColor_change.replace('#', '');

        $(event.target).addClass("Circle_Highlight_color_" + currentColor_change + "");

    },
    Rectangle_color_highlight_Click: function (event) {
        var currentColor = $(event.target).attr("name");
        var currentColor_change = $(event.target).attr("name");
        ER.MyShapeColor_Rectangle = currentColor;
        ER.MyRectangleShapeID = $(event.target).attr("id");
        $(".Rectangle_common_color").removeClass("Rectangle_Highlight_color_fffd3f").removeClass("Rectangle_Highlight_color_00ed59").removeClass("Rectangle_Highlight_color_f7753b").removeClass("Rectangle_Highlight_color_002aff").removeClass("Rectangle_Highlight_color_663399"); //yellow


        currentColor_change = currentColor_change.replace('#', '');

        $(event.target).addClass("Rectangle_Highlight_color_" + currentColor_change + "");

    },
    Underline_color_highlight_Click: function (event) {
        var currentColor = $(event.target).attr("name");
        var currentColor_change = $(event.target).attr("name");
        ER.MyUnderlineShapeID = $(event.target).attr("id");
        ER.MyShapeColor_Underline = currentColor;
        $(".Underline_common_color").removeClass("Underline_Highlight_color_00ed59").removeClass("Underline_Highlight_color_f7753b").removeClass("Underline_Highlight_color_663399").removeClass("Underline_Highlight_color_fffd3f").removeClass("Underline_Highlight_color_002aff"); //yellow

        currentColor_change = currentColor_change.replace('#', '');
        $(event.target).addClass("Underline_Highlight_color_" + currentColor_change + "");

    },
    btn_circle_click_clear: function (event) {


        if ($(".CircleShape").length > 0) {
            $("#circle").css("background-image", 'url(./assets/images/assets/topbar/circle.png)');
            $(".textHighlight").removeClass("TempMax_Z_Index");
            Circle_clear(event);
        }
    },
    btn_Rectangle_click_clear: function (event) {

        if ($(".RectangleShape").length > 0) {
            $("#rectangle").css("background-image", 'url(./assets/images/assets/topbar/square.png)');
            $(".textHighlight").removeClass("TempMax_Z_Index");
            Rectangle_clear(event);
        }
    },
    btn_underline_click_clear: function (event) {

        if ($(".UnderlineShape").length > 0) {
            $("#underline").css("background-image", 'url(./assets/images/assets/topbar/underline.png)');
            $(".textHighlight").removeClass("TempMax_Z_Index");
            Underline_clear(event);
        }
    },




    btnClearAll_Click: function (event) {
        ER.ClearAll_button_Activate = true;
        if (ER.ClearButton) {
            ER.pageScroller.disable();
            $(".ClearPop_Up").show();
            $("#messageModel").show();

            $("#btnYes").bind("click", function () {
                var canvaso = $('#parentContainer').find('canvas').attr("id");
                var canvas = document.getElementById(canvaso);
                var context = canvas.getContext('2d');
                context.clearRect(0, 0, canvas.width, canvas.height);
                ER.undoHistory = [];
                // if (ER.CanvasUndo[ER.currentPageNum]) {
                    
                //     delete ER.CanvasUndo[ER.currentPageNum];
                // }
                // ER.CanvasUndo[ER.currentPageNum] = {};
                tools.clearall();
                ER.UserInteractionwithDrawing = true;
                ER.canvasButton = false;
                ER.ClearButton = false;
                ER.ClearAll_button_Activate = false;
                $(".PencilErase").css("opacity", "0.5");
                $(".PencilClear").css("opacity", "0.5");
                $(".PencilClearAll").css("opacity", "0.5");
                $("#messageModel").hide();
                $(".ClearPop_Up").hide();
                ER.pageScroller.enable();


            });
            $("#btnNo").bind("click", function () {
                $("#messageModel").hide();
                $(".ClearPop_Up").hide();
                ER.pageScroller.enable();


            });



        }


    },
    btnPencil_click: function (event) {
        ER.pageScroller.options.zoom = false;
        $(".canvas_hide_common").addClass("hidden");
        $(".pencilButton").removeClass("hidden");
        $('div.firstGrabber').removeClass("hidden");
        $('div.lastGrabber').removeClass("hidden");
        $('div.firstGrabber').remove();
        $('div.lastGrabber').remove();
        $(".tempscrollBackground").hide();
        $(".searched").removeClass("search-active");
        $(".searched").removeClass("active");
        if (!$('div.help').is(':hidden')) {
            $('div.help').modal('hide'); // hide the modal in dom
        }
        if (!$('div.bookmark').is(':hidden')) {
            $("div.btn-bookmark").removeClass("active");
            $('div.bookmark').modal('hide'); // hide the modal in dom
        }
        if (!$('div.search').is(':hidden')) {
            $('div.search').modal('hide'); // hide the modal in dom
        }
        $('div.search').modal('hide');
        $('div.search').css("display", "none");
        $('div.topsearch').addClass('hide');
        $("#btnTOCNavigate").addClass("hidden");

        ER.DragTouch = true;
        ER.CanvasColor = true;
        ER.pencilDraw = true;
        ER.CanvasStarted = true;
        ER.CircleActive = false;
        ER.RectangleActive = false;
        var currentFlag = false;
        if (ER.myShapeTouchHold) {
            SaveShape("RectangleShape");
            SaveShape("CircleShape");
        }

        if (ER.CanvasUndo && ER.CanvasUndo[ER.currentPageNum]) {
            var currPageSnotes = ER.CanvasUndo[ER.currentPageNum];
            for (var propt in currPageSnotes) {
                currentFlag = true;
                $(".PencilClear").css("opacity", "1");
                $(".PencilClearAll").css("opacity", "1");
                ER.ClearButton = true;
            }
            if (!currentFlag) {
                ER.ClearButton = false;
                $(".PencilClear").css("opacity", "0.5");
                $(".PencilClearAll").css("opacity", "0.5");
            }
        } else {
            ER.ClearButton = false;
            $(".PencilClear").css("opacity", "0.5");
            $(".PencilClearAll").css("opacity", "0.5");
        }

        if (ER.undoHistory.length == 0) {
            ER.canvasButton = false;
            $(".PencilErase").css("opacity", "0.5");

        } else {
            ER.canvasButton = true;
            $(".PencilErase").css("opacity", "1");
        }

        $('.pencilButton').addClass("active");
        $("#pencilButton").addClass("active");
        $(".btn-highlight").addClass("active");
        $(".pencilButton").addClass("stableState");
        $(".PencilCanvas").removeClass("hidden");
        $(".commonHidden").addClass("hidden");
        $(".commonHiddenthree").addClass("hidden");
        $(".colorPallete").addClass("hidden");
        $(".pencilButtonClear").addClass("hidden");
        $(".circle").addClass("hidden");
        $(".rectangle").addClass("hidden");
        $(".separator").addClass("hidden");
        $(".pencilButtonClearAll").addClass("hidden");
        $(".PencilcolorPallete").removeClass("hidden");
        $(".pencilButtonDone").addClass("hidden");

        $("#topBarView_container").on("click", function () {
            if (ER.pencilDraw) {
                $('.pencilButton').addClass("active");
                $("#pencilButton").addClass("active");
            }
        });
        $("#parentContainer").on("click", function () {

            if (ER.pencilDraw) {
                $('.pencilButton').addClass("active");
                $("#pencilButton").addClass("active");
            }

        });
        if (ER.strokeStyle === "black") {
            $(".PencilColor").removeClass("Change_Pencil_color_b70d2a");
            $(".PencilColor").removeClass("Change_Pencil_color_0a823b");
            $(".PencilColor").removeClass("Change_Pencil_color_1f25aa");
            $("#btnblack_Pencil").addClass('Change_Pencil_color_000000');
        }
        Highlight.btnPencil_click(event);
        ER.pageScroller.options.zoom = false;
        $("#pencilButton").css("background-image", 'url(./assets/images/assets/topbar/pen_selected.png)');
    },
    btnPencilDone_Click: function (event) {

        ER.pageScroller.options.zoom = true;
        ER.DragTouch = false;
        ER.CanvasColor = false;
        ER.pencilDraw = false;
        ER.canvasButton = false;
        ER.ClearButton = false;
        ER.CanvasStarted = false;
        ER.myShapeTouchHold = false;
        ER.HighlightCircleTempFlag = false;
        ER.HighlightRectangleTempFlag = false;
        ER.RectangleClearActive = false;
        ER.CircleClearActive = false;
        ER.strokeStyle = 'black';
        ClassesRemove();
        if(ER.roles=="COLORADO_STUDENT"){
            $('#DropDownList1').hide();
            $('#DropDownList').hide();
        }else if(ER.roles=="COLORADO_TEACHER"){
        $('#DropDownList1').show();
        $('#DropDownList').show();
        }
        $('div.firstGrabber').removeClass("hidden");
        $('div.lastGrabber').removeClass("hidden");
        $('div.firstGrabber').remove();
        $('div.lastGrabber').remove();
        $(".PencilErase").css("opacity", "0.5");
        $(".PencilClear").css("opacity", "0.5");
        $(".PencilClearAll").css("opacity", "0.5");
        $(".btn-highlight").removeClass("active");
        $(".pencilButton").removeClass("stableState");
        $(".PencilCanvas").addClass("hidden");
        $(".commonHidden").removeClass("hidden");
        $(".commonHiddenthree").removeClass("hidden");
        $("#btnTOCNavigate").removeClass("hidden");
        $(".colorPallete").addClass("hidden");
        $(".PencilcolorPallete").addClass("hidden");
        $('canvas.drawingCanvas').removeCss('z-index');
        $('.pencilButton').removeClass("active");
        $("#btnPencil").addClass("hidden");
        $(".pencilButton").removeClass("hidden");
        $(".separator").removeClass("hidden");
        $(".circle").removeClass("hidden");
        $(".rectangle").removeClass("hidden");
        $(".pencilButtonClearAll").removeClass("hidden");
        $(".pencilButtonClear").removeClass("hidden");
        $(".pencilButtonDone").removeClass("hidden");
        $(".pencilfunctional").removeClass("hidden");
        $(".pencilfunctional").removeClass("active");
        if (ER.myShapeTouchHold) {
            SaveShape("RectangleShape");
            SaveShape("CircleShape");
        }
        ER.undoHistory = [];

        ER.pageScroller.options.zoom = true;
        $(".markup").removeClass("OnPage_Activate");
        $(".btn-bookmark").removeClass("OnPage_Activate");
        $(".stickyIcon").removeClass("hidden");
        $("#pencilButton").css("background-image", 'url(./assets/images/assets/topbar/pen.png)');

        if (ER.UserInteractionwithDrawing) {
            ER.CanvasUndo[ER.currentPageNum + "modified"] = true;

            ER.UserInteractionwithDrawing = false;
        }

		onSaveReady(ER.currentPageNum);

    },

    btnClear_Click: function (event) {
        ER.ClearAll_button_Activate = false;
        if (ER.ClearButton) {
            Highlight.btnUndo_Click(event);
        }
        $(".btn-pencil").removeClass("stableState");

    },
    btnEraser_Click: function (event) {
        $(".btn-pencil").removeClass("stableState");
        if (ER.undoHistory.length > 0) {
            ER.canvasButton = true;
            ER.ClearButton = true;
            $(".PencilErase").css("opacity", "1");
            $(".PencilClear").css("opacity", "1");
            $(".PencilClearAll").css("opacity", "1");
        }
        if (ER.undoHistory.length == 0) {
            ER.canvasButton = false;
            $(".PencilErase").css("opacity", "0.5");

        }
        if (ER.CanvasClear && ER.CanvasClear.length == 0) {
            $(".PencilClear").css("opacity", "0.5");
            $(".PencilClearAll").css("opacity", "0.5");
            ER.ClearButton = false;
        }
        if (ER.canvasButton) {
            Highlight.btnUndoLast_Click(event);
        }

    },

    PencilTools_click: function (event) {
        $(".btn-pencil").removeClass("hidden");
        $(".pencilfunctional").addClass("hidden");
        $(".btn-highlight").addClass("active");
        $(".PencilCanvas").addClass("hidden");
        $(".commonHidden").addClass("hidden");
        $(".commonHiddenthree").addClass("hidden");
        $("#btnTOCNavigate").addClass("hidden");
        $(".colorPallete").addClass("hidden");
        $(".PencilcolorPallete").addClass("hidden");
        $("#circle").trigger("click");
        if ($(".CircleShape").length > 0 || $(".RectangleShape").length > 0) {
            $(".pencilButtonClearAll").css("opacity", "1");
            $(".pencilButtonClear").css("opacity", "1");
        } else {
            $(".pencilButtonClearAll").css("opacity", "0.5");
            $(".pencilButtonClear").css("opacity", "0.5");
        }
        ER.pageScroller.options.zoom = false;
        ER.DragTouch = true;
        $(".pencilfunctional").removeClass("active");
    },
    color_highlight_Pencil: function (event) {

        if (ER.CanvasColor) {
            //$(".PencilColor").removeClass("Change_Pencil_color"++"");
            $(".PencilColor").removeClass("Change_Pencil_color_000000");
            $(".PencilColor").removeClass("Change_Pencil_color_b70d2a");
            $(".PencilColor").removeClass("Change_Pencil_color_0a823b");
            $(".PencilColor").removeClass("Change_Pencil_color_1f25aa");
            var currentColor = $(event.target).attr("name");
            ER.strokeStyle = currentColor;
            currentColor = currentColor.replace(/#/i, "_");
            $(event.target).addClass("Change_Pencil_color" + currentColor + "");
        }
        if (!ER.CanvasColor) {
            $(".PencilColor").removeClass("Change_Pencil_color_000000");
            $(".PencilColor").removeClass("Change_Pencil_color_b70d2a");
            $(".PencilColor").removeClass("Change_Pencil_color_0a823b");
            $(".PencilColor").removeClass("Change_Pencil_color_1f25aa");
            ER.strokeStyle = 'black';
            $(event.target).addClass("Change_Pencil_color");
            var currentColor = $(event.target).attr("name");
            currentColor = currentColor.replace(/#/i, "_");
            $(event.target).addClass("Change_Pencil_color" + currentColor + "");
        }


    },
    color_highlight_Click: function (event) {

        if ($(".firstGrabber").is(":visible") || $(".lasttGrabber").is(":visible")) {
            var currentColor = $(event.target).attr("name");
            $(".HighlightColor").removeClass("Change_Highlight_color");
            $(event.target).addClass("Change_Highlight_color");
            ER.myColor = currentColor;
            ER.myColorID = $(event.target).attr("id");

            var current = $(".firstGrabber").attr("firstchild_id");
            var currenttwo = $(".lastGrabber").attr("lastchild_id");
            $(".highlightText").each(function (index) {
                if (($(this).attr("data-id") == current) || ($(this).attr("data-id") == currenttwo)) {
                    var currentID = $(this).attr("id");
                    $(this).addClass("changeColor");
                    var currentDataValue = JSON.parse($(this).attr('data-value'));
                    currentDataValue.color = currentColor;

                    $("#" + currentID).attr('data-value', JSON.stringify(currentDataValue));

                    $("#" + currentID).css("background", "");
                    $("#" + currentID).css("background", currentColor);
                    $("#" + currentID).attr("data-color", currentColor);
                    ER.UserInteractionwithHighlight = true;

                }

            });

        } else {
            var currentColor = $(event.target).attr("name");
            ER.myColor = currentColor;
            $(".HighlightColor").removeClass("Change_Highlight_color");
            $(event.target).addClass("Change_Highlight_color");

        }

    },


    searchedBtn_Click: function (event) {

        if ($(".JumpToPageInputBox").hasClass("Blur_Search") || $(".InputType_Activity").hasClass("Blur_Search_Input")) {
            $('div.search').hide();
            return false;
        } else {

            if (!$('div.help').is(':hidden')) {
                $('div.help').modal('hide'); // hide the modal in dom
            }
            if (!$('div.bookmark').is(':hidden')) {
                $("div.btn-bookmark").removeClass("active");
                $('div.bookmark').modal('hide'); // hide the modal in dom
            }
            $(".searched").addClass("search-active");
            $('div.search').css({
                'margin-top': 0 + 'px',
                'margin-left': 0,
                top: $('.navbar-fixed-top').height() + 3,
                left: ($(event.target).offset().left - 309)
            });
            $('div.topsearch').addClass('hide');
            $('div.search').show();
            $('div.topsearch').addClass('hide');

            $(".present").bind('touchstart', function (evt) {
                $(this).focus();
				 if($.browser.webkit){
			 var currentVersion = navigator.userAgent.split("OS")[1].split("like")[0];
			 }
			 else{
			 var currentVersion = navigator.userAgent.split("Version/")[1].split("Mobile")[0];
			 }
			if (navigator.userAgent.match(/iPad/i)) {
			  if(parseFloat(currentVersion) > 6.9 )
			  {
				if( $(window).height()>$(window).width())
				{
				}
				if( $(window).height() < $(window).width())
				{
				 set_body_height(event);	 
				}
				}
			  else{
			  
			  }
		   }
				
                evt.stopImmediatePropagation();
                if (!$('div.audioVideoModal').is(':hidden')) {
                    $('div.audioVideoModal').modal('hide');

                }
                if (!$('div.help').is(':hidden')) {
                    $('div.help').modal('hide');
                }


                if (ER.currentView === 'single') {
                    evt.preventDefault();




                    $('span.searchHighlight').remove();
                    if ($("#txtSearched").val().length >= 3) {

                        ER.searchView.findSearchWord($('div.leftPageURL'), $("#txtSearched").val());

                    }
                    setTimeout(function () {
                        ER.myIScroll = new IScroll('tempScroll-div');
                        ER.myIScroll.refresh();
                      //  console.log("dfd")
                    }, 30);


                    setTimeout(function () {
                        //console.log("dfd2_98")

                        if ($("#txtSearched").val().length >= 3) {
                            $('div.topsearch').removeClass("hide");

                        } else {
                            $('span.searchHighlight').remove();
                            $('div.topsearch').addClass("hide");
                        }
                    }, 40);


                } else {
                    $('span.searchHighlight').remove();
                    ER.searchView.findSearchWord($('div.leftPageURL'), $("#txtSearched").val());
                    ER.searchView.findSearchWord($('div.rightPageURL'), $("#txtSearched").val());
                }
                if ($("#txtSearched").val() !== '' && $("#txtSearched").val().length > 1) {

                }
            });
            $('.present').bind('keyup', function (evt) {

                evt.stopImmediatePropagation();

                var key = evt.keyCode || evt.charCode;
                if (key === 13) {

                    if (ER.currentView === 'single') {
                        evt.preventDefault();
                        $("input").blur();



                        $('span.searchHighlight').remove();
                        if ($("#txtSearched").val().length >= 3) {

                            ER.searchView.findSearchWord($('div.leftPageURL'), $("#txtSearched").val());


                        }



                        setTimeout(function () {
                            ER.myIScroll = new IScroll('tempScroll-div');
                            ER.myIScroll.refresh();
                            //console.log("dfd")
                        }, 30);
                        setTimeout(function () {
                            //console.log("dfd2____")

                            if ($("#txtSearched").val().length >= 3) {
                                $('div.topsearch').removeClass("hide");

                            } else {
                                $('span.searchHighlight').remove();
                                $('div.topsearch').addClass("hide");
                            }
                        }, 40);


                    } else {
                        $('span.searchHighlight').remove();
                        ER.searchView.findSearchWord($('div.leftPageURL'), $("#txtSearched").val());
                        ER.searchView.findSearchWord($('div.rightPageURL'), $("#txtSearched").val());
                    }

                }

                if (evt.keyCode == 8) {

                    $('span.searchHighlight').remove();
                    $('div.topsearch').addClass("hide");
                    $(".Notext").html("");
                    $(".Notext").html(" Search  Results  Found   0");
                    $("#searchedtext").empty();
                }

                if (navigator.userAgent.match(/Android/i)) {
                    if ($("#txtSearched").val().length < 3) {
                        $(".Notext").html("");
                        $(".Notext").html(" Search  Results  Found   0");
                        $("div.topsearch").addClass("hide");
                        $("#searchedtext").empty();

                    }

                }




            });
        }

    },




    delete_Click: function (event) {
        if ($(".highlightText").length > 0) {

            ER.HighlightButton = true;
        } else {
            ER.HighlightButton = false;

        }
        if (ER.HighlightButton) {
            if ($(".pageContainer").find(".highlightText").length == 0) {
                ER.HighlightButton = true;

                $(".Clear").css("opacity", "0.5");
                $(".ClearAll").css("opacity", "0.5");
            } else {
                ER.HighlightButton = false;

                if ($(".firstGrabber").is(":visible")) {

                    Highlight.deleteHighlight_Click();
                }
                $(".Clear").css("opacity", "0.5");
                //  $(".ClearAll").css("opacity", "1");
            }
            if (ER.undoHighlightHistory.length > 0) {
                ER.HighlightButton = true;
                // $(".Clear").css("opacity", "1");
                // $(".ClearAll").css("opacity", "1");
                $(".HighlightUndo").css("opacity", "1");
            }
            if (ER.undoHighlightHistory.length == 0) {
                $(".HighlightUndo").css("opacity", "0.5");
            }


        }
    },
    UndoHighlight_Click: function (event) {

        if (ER.undoHighlightHistory.length > 0) {
            ER.HighlightButton = true;
            //$(".Clear").css("opacity", "1");
            $(".ClearAll").css("opacity", "1");
            $(".HighlightUndo").css("opacity", "1");
        }
        if (ER.undoHighlightHistory.length == 0) {
            ER.HighlightButton = false;
            $(".HighlightUndo").css("opacity", "0.5");

        }


        if (ER.HighlightButton) {

            Highlight.btnHighlightUndo_Click(event);

        }


    },

    deleteAll_Click: function (event) {

        if ($(".highlightText").length > 0) {
            ER.HighlightButton = true;
        } else {
            ER.HighlightButton = false;
        }
        if (ER.HighlightButton) {
            $(".ClearPop_Up").show();
            $("#HighlightmessageModel").show();
            $("#HighlightbtnNo").bind("click", function () {
                $("#HighlightmessageModel").hide();
                $(".HighlightUndo").css("opacity", "1");
                //$(".Clear").css("opacity", "1");
                $(".ClearAll").css("opacity", "1");
                ER.HighlightButton = true;
                if (ER.undoHighlightHistory.length > 0) {
                    ER.HighlightButton = true;
                    //$(".Clear").css("opacity", "1");
                    $(".ClearAll").css("opacity", "1");
                    $(".HighlightUndo").css("opacity", "1");
                }
                if (ER.undoHighlightHistory.length == 0) {
                    ER.HighlightButton = false;
                    $(".HighlightUndo").css("opacity", "0.5");
                }
                if ($(".firstGrabber").is(":visible")) {
                    $(".Clear").css("opacity", "1");
                }

                $(".ClearPop_Up").hide();
            });
            $("#HighlightbtnYes").bind("click", function () {
                $("#HighlightmessageModel").hide();
                Highlight.deleteAllHighlight_Click();
                ER.UserInteractionwithHighlight = true;
                $(".HighlightUndo").css("opacity", "0.5");
                $(".Clear").css("opacity", "0.5");
                $(".ClearAll").css("opacity", "0.5");
                ER.HighlightButton = false;
                $(".ClearPop_Up").hide();
            });
            if (ER.HighlightTexts && ER.HighlightTexts[ER.currentPageNum]) {
                var currPageSnotes = ER.HighlightTexts[ER.currentPageNum];
                for (var propt in currPageSnotes) {
                    ER.HighlightButton = true;
                    // $(".Clear").css("opacity", "1");
                    $(".ClearAll").css("opacity", "1");
                }
            } else {
                $(".Clear").css("opacity", "0.5");
                $(".ClearAll").css("opacity", "0.5");
            }
        }

    },
    SaveHighlight_Click: function (event) {
        ER.undoHighlightHistory = [];
        ER.HighlightTempFlag = false;
        ER.pageScroller.options.zoom = true;
        Highlight.saveHighlight_Click();
        ER.strokeStyle = 'black';
         if(ER.roles=="COLORADO_STUDENT"){
            $('#DropDownList1').hide();
            $('#DropDownList').hide();
        }else if(ER.roles=="COLORADO_TEACHER"){
        $('#DropDownList1').show();
        $('#DropDownList').show();
        }
        $(".markup").removeClass("Z-index_markup");
        $(".PencilColor").removeClass("Change_Pencil_color_000000");
        $(".PencilColor").removeClass("Change_Pencil_color_b70d2a");
        $(".PencilColor").removeClass("Change_Pencil_color_0a823b");
        $(".PencilColor").removeClass("Change_Pencil_color_1f25aa");
        $(".HighlightUndo").css("opacity", "0.5");
		$("textarea.InputType_Activity_textarea").removeAttr("readonly");
		InputType_Activity_function();
        $(".btn-bookmark").removeClass("OnPage_Activate");
        $(".notebook_link").removeClass("OnPage_Activate");
        $(".Audio_Class").removeClass("OnPage_Activate");
        $(".separator").removeClass("hidden");
        $(".markup").removeClass("OnPage_Activate");
        $("#btnTOCNavigate").removeClass("hidden");
        $("#btnHighlighted").removeClass("active");
        $(".btn-highlight").removeClass("active");
        $(".stickyIcon").removeClass("hidden");
        $("#btnHighlighted").css("background-image", 'url(./assets/images/assets/topbar/highlighter.png)');
        ER.parseFunction = false;
        ER.OldValue = false;

        ER.DragTouch = false;
        ER.myTouchHold = false;

        if (ER.UserInteractionwithHighlight) {

            ER.HighlightTexts[ER.currentPageNum + "modified"] = true;
            ER.UserInteractionwithHighlight = false;
        }
		onSaveReady(ER.currentPageNum);
    },

    highlight_Click: function (event) {
	
        if (document.activeElement &&
            document.activeElement.blur &&
            document.activeElement !== document.body) {
            document.activeElement.blur();
        }
         $('#DropDownList1').hide();
        $('#DropDownList').hide();
        if (!ER.HighlightTempFlag) {
            ER.pageScroller.options.zoom = false;
            ER.HighlightTempFlag = true;
            $(".tempscrollBackground").hide();
            if (!$('div.help').is(':hidden')) {
                $('div.help').modal('hide'); // hide the modal in dom
            }
            if (!$('div.bookmark').is(':hidden')) {
                $('div.bookmark').modal('hide'); // hide the modal in dom
            }
            if (!$('div.search').is(':hidden')) {
                $('div.search').modal('hide'); // hide the modal in dom
            }
            $('div.search').modal('hide');
            $('div.search').css("display", "none");
            $('div.topsearch').addClass('hide');
            $(".searched").removeClass("search-active");
            $(".markup").addClass("Z-index_markup");
			$("textarea.InputType_Activity_textarea").attr("readonly", "readonly");
			$("div.InputType_Activity").off("click");
            //$(".btn-bookmark").addClass("OnPage_Activate");
            // $(".notebook_link").addClass("OnPage_Activate");
            //$(".Audio_Class").addClass("OnPage_Activate");
            $("#btnTOCNavigate").addClass("hidden");
            if (ER.HighlightTexts && ER.HighlightTexts[ER.currentPageNum]) {
                var currPageSnotes = ER.HighlightTexts[ER.currentPageNum];
                for (var propt in currPageSnotes) {
                    ER.HighlightButton = true;
                    $(".Clear").css("opacity", "0.5");
                    $(".ClearAll").css("opacity", "1");
                    $(".HighlightUndo").css("opacity", "0.5");
                }
            } else {
                $(".HighlightUndo").css("opacity", "0.5");
                $(".Clear").css("opacity", "0.5");
                $(".ClearAll").css("opacity", "0.5");
            }

            $(".searched").removeClass("active");

            ER.myTouchHold = true;
            ER.myShapeTouchHold = false;
            ER.DragTouch = true;
            if (ER.myColor === "yellow") {
                $(".HighlightColor").removeClass("Change_Highlight_color");
                $("#btnyellow").addClass('Change_Highlight_color');
            }
            $(".separator").addClass("hidden");
            $(".btn-highlight").addClass("active");
            $(".btn-highlight").addClass("btn-highlight-active");
            $(".colorPallete").removeClass("hidden");
            $(".commonHidden").addClass("hidden");
            $(".colorPalletetwo").removeClass("hidden");
            $(".commonHiddentwo").addClass("hidden");
            $('.btn-pencil').removeClass("active");
            $(".btn-bookmark").removeClass("hidden");
            $(".btn-bookmark").addClass("OnPage_Activate");
            $(".notebook_link").addClass("OnPage_Activate");
            $(".Audio_Class").addClass("OnPage_Activate");
            $(".stickyIcon").addClass("hidden");
            $(".markup").addClass("OnPage_Activate");
            $("#btnHighlighted").css("background-image", 'url(./assets/images/assets/topbar/highlighter_selected.png)');
			 
        }
    }
});

ER.BottomBarView = Backbone.View.extend({
    el: 'div.navbar-fixed-bottom',

    mainTemplate: _.template($('#bottomBarView').html()),

    events: {
        'click #btnTOC': 'tocBtn_Click',
        'click #btnTOCNavigate': 'tocNavigateBtn_Click',
        'click #btnTOR': 'torBtn_Click',
        'touchstart #jumpTopageBtn': 'jumpTopageBtn_Click',
        'touchstart #jumpToPage': 'jumpToPage_KeyPress_click',
        'keydown #jumpToPage': 'jumpToPage_KeyPress'
    },

    render: function () {
        $(this.$el).html('');
        this.$el.html(this.mainTemplate({
            langXML: $(LanguageXMLData.languageXMLData)
        }));
    },
    tocBtn_Click: function (event) {
        event.stopImmediatePropagation();
        $('div.search').modal('hide');
        if (!$('div.audioVideoModal').is(':hidden')) {
            $('div.audioVideoModal').modal('hide');

        }
        if (!$('div.help').is(':hidden')) {
            $('div.help').modal('hide');
        }
        ER.tocView.render(ER.tocView.tocXMLData);
    },

    tocNavigateBtn_Click: function (event) {
        event.stopImmediatePropagation();

        $.ajax({
            type: "GET",
            url: "./assets/web.xml",
            dataType: "xml",
            success: onDataLoaded
        });

        function onDataLoaded(webXMLData) {
            onSaveReady(ER.currentPageNum);
            var currentNavigate = $(webXMLData).find("tocPageNumber").attr("value");


            $(".Swipetemp").show();

            var pageNum = ER.displayNum_pageNum_map["" + currentNavigate + ""];
            ER.flag_swipe=false;
            ER.bookview.loadPage(parseInt(pageNum));
            /*$("#btnTOCNavigate").removeClass("active");
                $(".common_upper").removeClass("hide");*/

            if (ER.FitWidthFlag) {

                $(".tempscrollBackground").show();
            }


            if (ER.pinchZoom) {

                ER.pageScroller.zoom(0, 0, 1, 0);
                // $(".common_upper").removeClass("hide");
                ER.pinchZoom = false;

            }


            $("#btnTOCNavigate").removeClass("active");
        }

    },


    torBtn_Click: function (evt) {
        evt.stopImmediatePropagation();
        if (!$('div.audioVideoModal').is(':hidden')) {
            $('div.audioVideoModal').modal('hide');

        }
        if (!$('div.help').is(':hidden')) {
            $('div.help').modal('hide');
        }
        $('div.search').modal('hide');
        ER.torView.render();
        $(".deleted").bind("click", function (event) {
            var currentparent = $(event.target).parent();
            var uniqueId = $(event.target).attr("uniqueId");
            var clickedCurrentPageNumber = $(event.target).attr("clickedpageNumber");
            $(".onPageNotePointer").each(function () {
                var currentid = $(this).attr("id");
                if (currentid == uniqueId) {
                    $("#" + currentid).remove();
                    var currentpageNotes = ER.stickyNotes[clickedCurrentPageNumber];
                    delete currentpageNotes[uniqueId];
                    $("#" + currentid).remove();
                    onSaveReady(clickedCurrentPageNumber);
                }
            });
            $(currentparent).remove();
        });
        $(".delete").bind("click", function (event) {
            var currentparent = $(event.target).parent();
            $(currentparent).css("background", "red");
            var uniqueId = $(event.target).attr("uniqueId");
            var clickedCurrentPageNumber = $(event.target).attr("clickedpageNumber");
            $(".highlightText").each(function () {
                var currentdeleting = $(this).attr("data-id");
                var currentId = $(this).attr("id");
                if (uniqueId == currentdeleting) {
                    $("#" + currentId).remove();
                    ER.pagesCollection.deleteHighlightValues(currentdeleting, 'data_id');
                    var currentpageNotes = ER.HighlightTexts[clickedCurrentPageNumber];
                    delete currentpageNotes[uniqueId];
                    $("#" + currentId).remove();
                    onSaveReady(clickedCurrentPageNumber);
                }
            });
            $(currentparent).remove();
        });
    },
    prevBtn_Click: function () {

       
        if (ER.currentPageNum == 1) {
            $(".Swipetemp").hide();
        }


        if (ER.currentPageNum > 1) {


            ER.backBtnClick = true;
            if (ER.currentView === 'single') {
                onSaveReady(ER.currentPageNum);
                ER.currentPageNum--;

                ER.bookview.singleViewPageStatus();


                onDocumentReady(ER.currentPageNum);


                ER.saveCurrentPageData = false;


            } else {
                var currentPageNumberleft = $(".leftPageURL").attr("id");
                var currentPageNumberright = $(".rightPageURL").attr("id");
                var x = currentPageNumberleft;

                var y = currentPageNumberright;
                y = y.replace(/[^0-9]/g, '').replace(/[_\s]/g, '');
                ER.currentPageNum -= 2;
                ER.bookview.doubleViewPageStatus();
            } // check for double page ends

        }
    },

    nextBtn_Click: function () {
       
        if (ER.lastPageNum == ER.currentPageNum) {

            $(".Swipetemp").hide();
        }


        if (ER.currentPageNum < ER.lastPageNum) {

            if (ER.currentView === 'single') {

                onSaveReady(ER.currentPageNum);
                ER.currentPageNum++;
                ER.bookview.singleViewPageStatus();


                onDocumentReady(ER.currentPageNum);
                ER.saveCurrentPageData = false;

            } else {
                var currenLeftPageVO = new Object();
                var currenRightPageVO = new Object();

                if (ER.currentPageNum + 2 > ER.lastPageNum) { //this page is actually a last page
                    ER.currentPageNum++;
                    currenLeftPageVO = ER.pagesCollection.searchCurrentPage(ER.currentPageNum, 'pageNum');

                    if (currenLeftPageVO === undefined) {
                        var currentChapter = ER.chaptersCollection.searchPageInChapter(ER.currentPageNum);

                        var pagesXMLPath = currentChapter.get('pagesXMLPath');
                        ER.LoadPagesXML(pagesXMLPath);
                        ER.isRenderPage = true;
                        return;
                    }

                    currenRightPageVO = new Object();
                    currenRightPageVO.pageURL = ER.DUMMY_PAGE;
                } else {
                    var currentPageNumberleft = $(".leftPageURL").attr("id");
                    var currentPageNumberright = $(".rightPageURL").attr("id");
                    var x = currentPageNumberleft;
                    x = x.replace(/[^0-9]/g, '').replace(/[_\s]/g, '');
                    var y = currentPageNumberright;
                    y = y.replace(/[^0-9]/g, '').replace(/[_\s]/g, '');

                    ER.currentPageNum++;
                    currenLeftPageVO = ER.pagesCollection.searchCurrentPage(ER.currentPageNum, 'pageNum');
                    if (currenLeftPageVO === undefined) {
                        var currentChapter = ER.chaptersCollection.searchPageInChapter(ER.currentPageNum);
                        var pagesXMLPath = currentChapter.get('pagesXMLPath');
                        ER.LoadPagesXML(pagesXMLPath);
                        ER.isRenderPage = true;
                        return;
                    }
                    ER.currentPageNum++;
                    currenRightPageVO = ER.pagesCollection.searchCurrentPage(ER.currentPageNum, 'pageNum');

                    if (currenRightPageVO === undefined) {
                        var currentChapter = ER.chaptersCollection.searchPageInChapter(ER.currentPageNum);

                        var pagesXMLPath = currentChapter.get('pagesXMLPath');
                        ER.LoadPagesXML(pagesXMLPath);
                        ER.isRenderPage = true;
                        return;
                    }
                }

                if (currenLeftPageVO !== undefined && currenRightPageVO !== undefined) {

                    onDocumentReady(currenLeftPageVO.id);
                    onDocumentReady(currenRightPageVO.id);
                    ER.bookview.displayPages(currenLeftPageVO, currenRightPageVO);
                }
            }

            ER.enableDisableNavigationButton();
        }
    },
    btnStickynote_Click: function (event) {
        $(".pageContainer *:not('.onPageNotePointer, button')").unbind("click");
        $(".pageContainer *:not('.onPageNotePointer, button')").bind("click", ER.stickybuttonView.addOnPageNote);
    },

    fitWidthBtn_Click: function () {
        ER.pageFitView = 'FIT_WIDTH';

        var leftPage = $('div.leftPageURL');
        ER.bottomBarView.fitWidth($('div.leftPageURL'), $('div.rightPageURL'));

    },

    fitHeightBtn_Click: function () {
        ER.pageFitView = 'FIT_HEIGHT';

        ER.bottomBarView.fitHeight($('div.leftPageURL'), $('div.rightPageURL'));
        $(".container").addClass("top_height");
    },

    fitWidth: function (leftPage, rightPage) {
        var scaleVal;

        if (ER.currentView === "single") {

            scaleVal = 1 + ($('.container-fluid').width() - $(leftPage).data('width')) / $(leftPage).data('width');
            applyCssToChild($(leftPage), parseFloat(scaleVal).toFixed(4));


        } else {
            scaleVal = 1 + (($('.container-fluid').width() - scrollbarWidth() - $('.container-fluid').css('padding')) - ($(leftPage).data('width') + $(rightPage).data('width'))) / ($(leftPage).data('width') + $(rightPage).data('width'));
            applyCssToChild($(leftPage), parseFloat(scaleVal));
            applyCssToChild($(rightPage), parseFloat(scaleVal));
        }
        ER.onePercentageScale = parseFloat(scaleVal) / 100;
        ER.currentScaleValue = parseFloat(scaleVal).toFixed(4);
        $('.zoomValue').val(parseInt(scaleVal * 100) + ' %');
        ER.enableDisableNavigationButton();
    },

    fitHeight: function (leftPage, rightPage) {
        var scaleVal;

        if (ER.currentView === "single") {

            if (parseInt($(leftPage).data('height')) < parseInt($(leftPage).data('width') + 50)) {

                if ((1000 > $(leftPage).data('width')) && ($(leftPage).data('width') > 701)) {
                   // console.log("ff11")
                    scaleVal = 1 + ($('.container-fluid').height() - $(leftPage).data('width')) / $(leftPage).data('height');

                    scaleVal2 = 1 + ($('.container-fluid').width() - $(leftPage).data('width')) / $(leftPage).data('width');
                    var current = parseInt($('.container-fluid').width()) * parseInt($('.container-fluid').height());
                    var current2 = parseInt($(leftPage).data('height')) * parseInt($(leftPage).data('width'))
                    var three = parseInt(current) - parseInt(current2)
                    scaleVal = (parseInt(1) + parseInt(three / current2)) / 1.25;
                } else if ((1200 > $(leftPage).data('width')) && ($(leftPage).data('width') > 1000)) {
                    //console.log("ff2")
                    scaleVal = 1 + ($('.container-fluid').height() - $(leftPage).data('width')) / $(leftPage).data('height');

                    scaleVal2 = 1 + ($('.container-fluid').width() - $(leftPage).data('width')) / $(leftPage).data('width');
                    var current = parseInt($('.container-fluid').width()) * parseInt($('.container-fluid').height());
                    var current2 = parseInt($(leftPage).data('height')) * parseInt($(leftPage).data('width'))
                    var three = parseInt(current) - parseInt(current2)
                    scaleVal = (parseInt(1) + parseInt(three / current2)) / 1.6;
                } else if ($(leftPage).data('width') > 1200) {
                   // console.log("ff")
                    scaleVal = 1 + ($('.container-fluid').height() - $(leftPage).data('width')) / $(leftPage).data('height');

                    scaleVal2 = 1 + ($('.container-fluid').width() - $(leftPage).data('width')) / $(leftPage).data('width');
                    var current = parseInt($('.container-fluid').width()) * parseInt($('.container-fluid').height());
                    var current2 = parseInt($(leftPage).data('height')) * parseInt($(leftPage).data('width'))
                    var three = parseInt(current) - parseInt(current2)
                    scaleVal = (parseInt(1) + parseInt(three / current2)) / 1.7;
                } else {
                   // console.log("ff_else")
                    scaleVal = 1 + ($('.container-fluid').height() - $(leftPage).data('height')) / $(leftPage).data('height');
                    scaleVal2 = 1 + ($('.container-fluid').width() - $(leftPage).data('width')) / $(leftPage).data('width');
                    var current = parseInt($('.container-fluid').width()) * parseInt($('.container-fluid').height());
                    var current2 = parseInt($(leftPage).data('height')) * parseInt($(leftPage).data('width'))
                    var three = parseInt(current) - parseInt(current2)
                    scaleVal = parseInt(1) + parseInt(three / current2);
                }


                applyCssToChild($(leftPage), parseFloat(scaleVal));
            } else {
                scaleVal = 1 + ($('.container-fluid').height() - $(leftPage).data('height')) / $(leftPage).data('height');
                applyCssToChild($(leftPage), parseFloat(scaleVal));
            }

        } else {
            scaleVal = 1 + ($('.container-fluid').height() - $(leftPage).data('height')) / $(leftPage).data('height');
            applyCssToChild($(leftPage), parseFloat(scaleVal));
            applyCssToChild($(rightPage), parseFloat(scaleVal));
        }
        ER.onePercentageScale = parseFloat(scaleVal) / 100;
        ER.currentScaleValue = parseFloat(scaleVal).toFixed(4);
        $('.zoomValue').val(parseInt(scaleVal * 100) + ' %');
        ER.enableDisableNavigationButton();
    },

    jumpTopageBtn_Click: function (event) {
        ER.flag_swipe=false;
        event.preventDefault();
        event.stopImmediatePropagation();
        $(".JumpToPageInputBox").removeClass("Blur_Search");
        var pageNum = ER.displayNum_pageNum_map[$("#jumpToPage").val()];
        $(".btn-jumpTopage").addClass("active");
        if (pageNum != undefined) {
            $(".btn-jumpTopage").removeClass("active");
            onSaveReady(ER.currentPageNum);
            ER.bookview.loadPage(pageNum);
            $("#jumpToPage").val(ER.pageNum_displayNum_map[ER.currentPageNum].displayNum);

        } else {
            //alert("Please enter a valid Page Number.");
            $('input').blur();
            $(".jumpbackground").show();
            $("#jumpModel").show();

            $(".btn-jumpTopage").removeClass("active");
        }


    },

    jumpToPage_KeyPress_click: function (event) {

		
        if (!$('div.search').is(':hidden')) {
            $('div.search').modal('hide');


        } else {

            $(".JumpToPageInputBox").addClass("Focusing");
            $(".JumpToPageInputBox").addClass("Blur_Search");
			//setTimeOut(function(){
			  $(".JumpToPageInputBox").focus();
			//});
            
		
            ER.pageScroller.disable();
		    
			// set_body_height(event);	 
			
			 //alert($.browser)
               if (navigator.userAgent.match(/iPad/i)) {
			 if($.browser.webkit){
			 var currentVersion = navigator.userAgent.split("OS")[1].split("like")[0];
			 }
			 else{
			 var currentVersion = navigator.userAgent.split("Version/")[1].split("Mobile")[0];
			 
			 }
            }
		
			
			  if (navigator.userAgent.match(/iPad/i)) {
				  if(parseFloat(currentVersion) > 6.9 )
				  {
					
				   if( $(window).height()>$(window).width())
					{
					}
					if( $(window).height() < $(window).width())
					{
					 $(".btn-group").addClass("Temp_btn_group");
					}
				  
				 
				  }
				  else{
				  
				  }
			  
			  }
			
        }


    },
    jumpToPage_KeyPress: function (event) {
          ER.flag_swipe=false;
        event.stopImmediatePropagation();

        $(".JumpToPageInputBox").removeClass("Blur_Search");
		
        ER.pageScroller.options.zoom = true;
        if (event.keyCode === 13) {
            var searchingText = $("#jumpToPage").val();
            searchingText = searchingText.toLowerCase();
			$(".btn-group").removeClass("Temp_btn_group");
            if (searchingText == ER.Page_Value_Box) {

            } else if (searchingText == "i" || searchingText == "I") {
                var pageNum = ER.displayNum_pageNum_map["i"];
            } else if (searchingText == "BC" || searchingText == "bc" || searchingText == "Bc") {
                var pageNum = ER.displayNum_pageNum_map["BC"];
            } else if (searchingText == "¿Está" || searchingText == "Cover" || searchingText == "COVER" || searchingText == "cover") {
                var pageNum = ER.displayNum_pageNum_map["Cover"];
            } else {
                var pageNum = ER.displayNum_pageNum_map[event.currentTarget.value];
            }

            // var pageNum = ER.displayNum_pageNum_map[event.currentTarget.value];

            if (pageNum != undefined) {
                onSaveReady(ER.currentPageNum);
                $("input").blur();
                $(".Swipetemp").show();
                ER.bookview.loadPage(pageNum);
                $("#jumpToPage").val(ER.pageNum_displayNum_map[ER.currentPageNum].displayNum);
            } else {
                if (searchingText == ER.Page_Value_Box) {
                    $('input').blur();
                } else {
                    $(".jumpbackground").show();
                    $("#jumpModel").show();
                    $('input').blur();
                }

            }
            //.currentTarget.value = '';
        }
    },

    zoomout_click: function (event) {


        var scaleVal = parseFloat(ER.currentScaleValue) - parseFloat(ER.onePercentageScale * 25);
        ER.currentScaleValue = parseFloat(scaleVal).toFixed(4);

        if (ER.currentView === "single") {
            applyCssToChild($('.leftPageURL'), scaleVal);
        } else {
            applyCssToChild($('.leftPageURL'), scaleVal);
            applyCssToChild($('.rightPageURL'), scaleVal);
        }

        $('.zoomValue').val(parseInt($('.zoomValue').val()) - 25 + ' %');
        ER.pageFitView == '';
        ER.enableDisableNavigationButton();
    },

    zoomin_click: function (event) {

        var scaleVal = parseFloat(ER.currentScaleValue) + parseFloat(ER.onePercentageScale * 25);
        ER.currentScaleValue = parseFloat(scaleVal).toFixed(4);

        if (ER.currentView === "single") {
            applyCssToChild($('.leftPageURL'), scaleVal);
        } else {
            applyCssToChild($('.leftPageURL'), scaleVal);
            applyCssToChild($('.rightPageURL'), scaleVal);
        }

        $('.zoomValue').val(parseInt($('.zoomValue').val()) + 25 + ' %');
        ER.pageFitView == '';
        ER.enableDisableNavigationButton();
    },

    SE_TE_click: function (event) {
        var pageNum = parseInt(ER.displayNum_pageNum_map[$('#btnTeacherStudent').attr('data-url')]);

        if (pageNum != null) {
            ER.bookview.loadPage(pageNum);
            if ($('#btnTeacherStudent').attr('data-type') === 'studentview') {
                $('.btnTeacherStudent').attr('title', 'TeacherView');
            } else {
                $('.btnTeacherStudent').attr('title', 'StudentView');
            }
        }
    }

});

var ModalView = Backbone.View.extend({

    events: {
        'click .close': 'close'
    },

    initialize: function () {
        this.template = _.template($('#modal-template').html());
    },

    render: function () {
        this.$el.html(this.template());
        $(this.el).children('div.modal').draggable({
            containment: "div.row-fluid"
        });
        return this;
    },

    show: function () {
        $(document.body).append(this.render().el);
        log('this.render().el', this.render().el)
    },

    close: function () {
        this.remove();
    }

});