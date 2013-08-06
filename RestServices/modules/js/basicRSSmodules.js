/*
****************************************************************
*	Name    : showNewsCategory
*	Author  : Kony 
*	Purpose : This function is to show News category form
****************************************************************
*/
function showNewsCategory(){
		frmNewsCategory.show();
}
/*
****************************************************************
*	Name    : frmNewsCategory_segCategory_onRowClick_response
*	Author  : Kony 
*	Purpose : This function is the sucess callback for the service call
****************************************************************
*/
function frmNewsCategory_segCategory_onRowClick_response(status, News) {
    if (status == 400) {
             if (News != null && News != undefined && News["channel"] != null && News["channel"] != undefined) {
            var frmResult_segResult_temp = [];
            for (var i1 = 0; i1 < News["channel"].length; i1++) {
                frmResult_segResult_temp.push({
                    "lblResult": News["channel"][i1]["title"]
                });
            }
            if(channel == "tablet")
            frmNewsCategory.segResult.setData(frmResult_segResult_temp);
            else
            frmResult.segResult.setData(frmResult_segResult_temp);
        }
           kony.application.dismissLoadingScreen()
        if(channel != "tablet")
        frmResult.show();
    }
}
/*
****************************************************************
*	Name    : frmNewsCategory_segCategory_onRowClick
*	Author  : Kony 
*	Purpose : This function is to make service call 
****************************************************************
*/
function frmNewsCategory_segCategory_onRowClick() {
    kony.application.showLoadingScreen("loadingscreen", "loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    var News_inputparam = {};
    News_inputparam["serviceID"] = "News";
	News_inputparam["type"] = frmNewsCategory.segCategory.selectedItems[0]["newstype"];
    News_inputparam["httpheaders"] = {};
    News_inputparam["httpconfigs"] = {};
    News = appmiddlewareinvokerasync(News_inputparam, frmNewsCategory_segCategory_onRowClick_response);
}

/*
****************************************************************
*	Name    : setIndex
*	Author  : Kony 
*	Purpose : This function is to set index of segment for the first time 
****************************************************************
*/

function setIndex()
{
	if(flag){
		frmNewsCategory.segCategory.selectedIndex=[0,0];
		frmNewsCategory_segCategory_onRowClick();
		flag =false;
	}	
}	
	
			

